import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
    getMe,
    googleOAuth,
    userLogin,
    userLogout,
    userRegistration,
    verifyAccount,
} from '@/api';

export function useRegister() {
    return useMutation({
        mutationFn: userRegistration,
    });
}

export function useLogin() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userLogin,

        onSuccess: async (res) => {
            if (res.success) {
                await queryClient.refetchQueries({
                    queryKey: ['user'],
                });
            }
        },
    });
}

export function useVerifyAccount() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: verifyAccount,

        onSuccess: async (res) => {
            if (res.success) {
                await queryClient.refetchQueries({
                    queryKey: ['user'],
                });
            }
        },
    });
}

export function useLogout() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: userLogout,

        onSuccess: async () => {
            queryClient.setQueryData(['user'], null);

            await queryClient.invalidateQueries({
                queryKey: ['user'],
            });
        },
    });
}

export function useGoogleOAuth() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: googleOAuth,

        onSuccess: async (res) => {
            if (res.success) {
                await queryClient.refetchQueries({
                    queryKey: ['user'],
                });
            }
        },
    });
}

export function useGetMe() {
    return useQuery({
        queryKey: ['user'],
        queryFn: getMe,
        retry: false,
    });
}
