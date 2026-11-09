import type { ReactNode } from 'react';

const INLINE_PATTERN = /(\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;

function renderInline(text: string): ReactNode[] {
    let offset = 0;

    return text.split(INLINE_PATTERN).map((part) => {
        const key = `${offset}-${part}`;

        offset += part.length;

        if (part.startsWith('**') && part.endsWith('**')) {
            return <strong key={key}>{part.slice(2, -2)}</strong>;
        }

        if (part.startsWith('*') && part.endsWith('*')) {
            return <em key={key}>{part.slice(1, -1)}</em>;
        }

        if (part.startsWith('`') && part.endsWith('`')) {
            return (
                <code
                    key={key}
                    className="rounded bg-background/60 px-1 py-0.5 font-mono text-[0.85em]"
                >
                    {part.slice(1, -1)}
                </code>
            );
        }

        return part;
    });
}

export default function ChatMarkdown({ content }: { content: string }) {
    const lines = content.split('\n');
    const blocks: ReactNode[] = [];
    let listItems: { id: string; text: string }[] = [];

    const flushList = () => {
        if (listItems.length === 0) {
            return;
        }

        blocks.push(
            <ul
                key={`list-${blocks.length}`}
                className="list-disc space-y-1 pl-5"
            >
                {listItems.map((item) => (
                    <li key={item.id}>{renderInline(item.text)}</li>
                ))}
            </ul>,
        );

        listItems = [];
    };

    for (const line of lines) {
        const trimmed = line.trim();
        const bulletMatch = trimmed.match(/^[-*]\s+(.*)$/);

        if (bulletMatch) {
            listItems.push({
                id: `${blocks.length}-${listItems.length}`,
                text: bulletMatch[1],
            });
            continue;
        }

        flushList();

        if (!trimmed) {
            continue;
        }

        blocks.push(
            <p key={`paragraph-${blocks.length}`} className="whitespace-pre-wrap">
                {renderInline(line)}
            </p>,
        );
    }

    flushList();

    return <div className="space-y-2">{blocks}</div>;
}
