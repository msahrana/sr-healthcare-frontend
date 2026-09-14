import { useMutation } from '@tanstack/react-query';

import {
    getMe,
    googleOAuth,
    userLogin,
    userLogout,
    userRegistration,
    verifyAccount,
} from '@/api';

import { useAuth } from '@/providers/auth.provider';

export function useRegister() {
    return useMutation({
        mutationFn: userRegistration,
    });
}

export function useLogin() {
    const { setUser } = useAuth();

    return useMutation({
        mutationFn: userLogin,

        onSuccess: async (res) => {
            if (!res.success) {
                return;
            }

            try {
                const user = await getMe();

                setUser(user);
            } catch {
                setUser(null);
            }
        },
    });
}

export function useVerifyAccount() {
    const { setUser } = useAuth();

    return useMutation({
        mutationFn: verifyAccount,

        onSuccess: async (res) => {
            if (!res.success) {
                return;
            }

            try {
                const user = await getMe();

                setUser(user);
            } catch {
                setUser(null);
            }
        },
    });
}

export function useLogout() {
    const { clearUser } = useAuth();

    return useMutation({
        mutationFn: userLogout,

        onSuccess: () => {
            clearUser();
        },
    });
}

export function useGoogleOAuth() {
    const { setUser } = useAuth();

    return useMutation({
        mutationFn: googleOAuth,

        onSuccess: async (res) => {
            if (!res.success) {
                return;
            }

            try {
                const user = await getMe();

                setUser(user);
            } catch {
                setUser(null);
            }
        },
    });
}

export function useGetMe() {
    const { user, isLoading, isAuthenticated } = useAuth();

    return {
        data: user,
        isLoading,
        isAuthenticated,
    };
}
