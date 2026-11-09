import { ChatMessagePayload, ChatReplyResponse } from '@/interface';
import apiClient from '@/lib/apiClient';

export function sendChatMessage(payload: ChatMessagePayload) {
    return apiClient<ChatReplyResponse>('/chat', {
        method: 'POST',
        body: payload,
    });
}
