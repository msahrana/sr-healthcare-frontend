import { ICredentialLogin } from '@/interface';
import apiClient from '@/lib/apiClient';

export function userLogin(payload: ICredentialLogin) {
    return apiClient('/auth/login', { method: 'POST', body: payload });
}

export function userLogout() {
    return apiClient('/auth/logout', { method: 'POST' });
}

export function getMe() {
    return apiClient('/auth/me');
}
