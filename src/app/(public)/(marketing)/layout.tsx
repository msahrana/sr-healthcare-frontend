import { ReactNode } from 'react';
import Footer from '@/components/layout/public/Footer';
import Header from '@/components/layout/public/Header';
import ChatWidgetMount from '@/components/modules/chat/chat-widget-mount';

const PublicLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
            <ChatWidgetMount />
        </div>
    );
};

export default PublicLayout;
