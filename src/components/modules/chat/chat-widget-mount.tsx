'use client';

import { usePathname } from 'next/navigation';
import ChatWidget from './chat-widget';

const CHAT_ROUTES = ['/', '/doctors'];

const ChatWidgetMount = () => {
    const pathname = usePathname();

    const isChatRoute =
        CHAT_ROUTES.includes(pathname) || pathname.startsWith('/doctors/');

    return (
        <div className={isChatRoute ? undefined : 'hidden'}>
            <ChatWidget />
        </div>
    );
};

export default ChatWidgetMount;
