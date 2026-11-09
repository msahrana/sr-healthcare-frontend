'use client';

import {
    ChevronRightIcon,
    MessageCircleIcon,
    SendIcon,
    StethoscopeIcon,
    XIcon,
} from 'lucide-react';
import Link from 'next/link';
import {
    type FormEvent,
    type KeyboardEvent,
    useEffect,
    useRef,
    useState,
} from 'react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/ui/toast';
import { useSendChatMessage } from '@/hooks';
import type { ChatDoctor } from '@/interface';
import ChatMarkdown from './chat-markdown';

interface ChatEntry {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    doctors?: ChatDoctor[];
}

const WELCOME_MESSAGE: ChatEntry = {
    id: 'welcome',
    role: 'assistant',
    content:
        "Hi! I'm the SR HealthCare assistant. Tell me what you're experiencing or ask which doctor to see.",
};

const ChatWidget = () => {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [sessionId, setSessionId] = useState<string>();
    const [messages, setMessages] = useState<ChatEntry[]>([WELCOME_MESSAGE]);
    const { mutate: sendMessage, isPending } = useSendChatMessage();
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!open) {
            return;
        }

        if (messages.length === 0 && !isPending) {
            return;
        }

        scrollRef.current?.scrollTo({
            top: scrollRef.current.scrollHeight,
            behavior: 'smooth',
        });
    }, [open, messages, isPending]);

    useEffect(() => {
        if (!open) {
            return;
        }

        const handleEscape = (event: globalThis.KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpen(false);
            }
        };

        window.addEventListener('keydown', handleEscape);

        return () => window.removeEventListener('keydown', handleEscape);
    }, [open]);

    const handleSubmit = (event?: FormEvent<HTMLFormElement>) => {
        event?.preventDefault();

        const message = input.trim();

        if (!message || isPending) {
            return;
        }

        setMessages((current) => [
            ...current,
            {
                id: crypto.randomUUID(),
                role: 'user',
                content: message,
            },
        ]);
        setInput('');

        sendMessage(
            sessionId ? { message, sessionId } : { message },
            {
                onSuccess: (response) => {
                    setSessionId(response.data.sessionId);
                    setMessages((current) => [
                        ...current,
                        {
                            id: crypto.randomUUID(),
                            role: 'assistant',
                            content: response.data.answer,
                            doctors: response.data.doctors,
                        },
                    ]);
                },
                onError: (error) => {
                    toast.add({
                        title: 'Chat unavailable',
                        description:
                            error.message ||
                            'Something went wrong. Please try again.',
                        type: 'error',
                    });
                    setMessages((current) => [
                        ...current,
                        {
                            id: crypto.randomUUID(),
                            role: 'assistant',
                            content:
                                'Sorry, I could not answer that right now. Please try again in a moment.',
                        },
                    ]);
                },
            },
        );
    };

    const handleInputKeyDown = (
        event: KeyboardEvent<HTMLTextAreaElement>,
    ) => {
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            handleSubmit();
        }
    };

    return (
        <>
            {open && (
                <section
                    id="sr-healthcare-chat"
                    aria-label="SR HealthCare chat"
                    className="fixed right-4 bottom-24 z-40 flex h-[min(32rem,calc(100dvh-8rem))] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-2xl border bg-popover text-popover-foreground shadow-2xl sm:right-6"
                >
                    <header className="flex items-start justify-between gap-3 border-b bg-muted/50 px-4 py-3">
                        <div>
                            <h2 className="text-sm font-semibold">
                                SR HealthCare Assistant
                            </h2>
                            <p className="text-xs text-muted-foreground">
                                Ask about symptoms, doctors, or booking
                            </p>
                        </div>

                        <Button
                            type="button"
                            variant="ghost"
                            size="icon-sm"
                            onClick={() => setOpen(false)}
                            aria-label="Close chat"
                        >
                            <XIcon />
                        </Button>
                    </header>

                    <div
                        ref={scrollRef}
                        aria-live="polite"
                        className="flex-1 space-y-4 overflow-y-auto p-4"
                    >
                        {messages.map((entry) => (
                            <ChatBubble
                                key={entry.id}
                                entry={entry}
                                onDoctorClick={() => setOpen(false)}
                            />
                        ))}

                        {isPending && (
                            <div className="flex justify-start">
                                <div className="flex items-center gap-2 rounded-2xl bg-muted px-3 py-2 text-sm text-muted-foreground">
                                    <Spinner />
                                    Thinking...
                                </div>
                            </div>
                        )}
                    </div>

                    <form
                        onSubmit={handleSubmit}
                        className="flex items-end gap-2 border-t p-3"
                    >
                        <Textarea
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                            onKeyDown={handleInputKeyDown}
                            placeholder="Ask about symptoms or a doctor..."
                            aria-label="Message"
                            rows={1}
                            maxLength={1000}
                            disabled={isPending}
                            className="max-h-24 min-h-9 resize-none"
                        />

                        <Button
                            type="submit"
                            size="icon"
                            disabled={!input.trim() || isPending}
                            aria-label="Send message"
                        >
                            {isPending ? <Spinner /> : <SendIcon />}
                        </Button>
                    </form>
                </section>
            )}

            <Button
                type="button"
                size="icon-lg"
                onClick={() => setOpen((current) => !current)}
                aria-expanded={open}
                aria-controls="sr-healthcare-chat"
                aria-label={
                    open ? 'Close SR HealthCare chat' : 'Chat with SR HealthCare'
                }
                className="fixed right-4 bottom-6 z-40 size-14 rounded-full shadow-lg shadow-primary/30 sm:right-6"
            >
                {open ? (
                    <XIcon className="size-6" />
                ) : (
                    <MessageCircleIcon className="size-6" />
                )}
            </Button>
        </>
    );
};

function ChatBubble({
    entry,
    onDoctorClick,
}: {
    entry: ChatEntry;
    onDoctorClick: () => void;
}) {
    const isUser = entry.role === 'user';

    return (
        <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
            <div
                className={`max-w-[85%] space-y-2 rounded-2xl px-3 py-2 text-sm ${
                    isUser ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}
            >
                {isUser ? (
                    <p className="whitespace-pre-wrap">{entry.content}</p>
                ) : (
                    <ChatMarkdown content={entry.content} />
                )}

                {entry.doctors && entry.doctors.length > 0 && (
                    <div className="space-y-2 pt-1">
                        {entry.doctors.map((doctor) => (
                            <Link
                                key={doctor.id}
                                href={`/doctors/${doctor.id}`}
                                onClick={onDoctorClick}
                                className="flex items-center gap-2 rounded-xl border bg-background p-2 text-foreground transition hover:bg-accent"
                            >
                                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <StethoscopeIcon className="size-4" />
                                </span>

                                <span className="min-w-0 flex-1">
                                    <span className="block truncate font-medium">
                                        {doctor.name}
                                    </span>
                                    <span className="block truncate text-xs text-muted-foreground">
                                        {doctor.specialization}
                                        {doctor.consultationFee != null
                                            ? ` - ৳ ${doctor.consultationFee}`
                                            : ''}
                                    </span>
                                </span>

                                <ChevronRightIcon className="size-4 shrink-0 text-muted-foreground" />
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ChatWidget;
