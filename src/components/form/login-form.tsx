'use client';

import { CredentialResponse, GoogleLogin } from '@react-oauth/google';
import { useForm } from '@tanstack/react-form';
import { useQueryClient } from '@tanstack/react-query';
import { Eye, EyeClosed } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useGoogleOAuth, useLogin } from '@/hooks';
import { loginSchema } from '@/validation';
import { Button } from '../ui/button';
import {
    Field,
    FieldDescription,
    FieldError,
    FieldGroup,
    FieldLabel,
    FieldSeparator,
} from '../ui/field';
import { Input } from '../ui/input';
import { Spinner } from '../ui/spinner';
import { toast } from '../ui/toast';

export default function LoginForm() {
    const [showPassword, setShowPassword] = useState(false);

    const router = useRouter();
    const queryClient = useQueryClient();

    const { mutate: login, isPending: loginPending } = useLogin();
    const { mutate: googleLogin } = useGoogleOAuth();

    const form = useForm({
        defaultValues: {
            email: 'msahossainrana@gmail.com',
            password: '$2b$12$SAyed2244',
        },

        validators: {
            onSubmit: loginSchema,
        },

        onSubmit: ({ value }) => {
            const loginData = {
                email: value.email,
                password: value.password,
            };

            login(loginData, {
                onSuccess: async (res) => {
                    await queryClient.invalidateQueries({
                        queryKey: ['user'],
                    });

                    toast.add({
                        title: 'Login Successfully!',
                        description: res.message || 'Welcome Back to Homepage',
                        type: 'success',
                    });

                    router.push('/');
                },

                onError: (err) => {
                    toast.add({
                        title: 'Authorization Failure',
                        description:
                            err.message || 'Something went wrong. Try again...',
                        type: 'error',
                    });
                },
            });
        },
    });

    const handleGoogleSuccess = (credentialResponse: CredentialResponse) => {
        const idToken = credentialResponse.credential;

        if (!idToken) {
            toast.add({
                title: 'Google OAuth Failed',
                description: 'Google credential was not received.',
                type: 'error',
            });

            return;
        }

        googleLogin(
            { idToken },
            {
                onSuccess: async () => {
                    await queryClient.invalidateQueries({
                        queryKey: ['user'],
                    });

                    toast.add({
                        title: 'Google Login Successful',
                        description: 'Welcome back!',
                        type: 'success',
                    });

                    router.push('/');
                },

                onError: (err) => {
                    toast.add({
                        title: 'Google OAuth Failed',
                        description:
                            err.message ||
                            'Something went wrong. Please try again later.',
                        type: 'error',
                    });
                },
            },
        );
    };

    const handleGoogleError = () => {
        toast.add({
            title: 'Google OAuth Failed',
            description: 'Google login was unsuccessful. Please try again.',
            type: 'error',
        });
    };

    return (
        <div className="flex flex-col gap-5">
            {/* Header */}
            <div className="flex flex-col items-center gap-2 text-center">
                <h1 className="text-2xl font-bold tracking-tight">
                    Login to your account
                </h1>

                <p className="text-balance text-sm text-muted-foreground">
                    Enter your email below to login to your account
                </p>
            </div>

            {/* Login Form */}
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                }}
            >
                <FieldGroup>
                    {/* Email */}
                    <form.Field name="email">
                        {(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid;

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Email
                                    </FieldLabel>

                                    <Input
                                        id={field.name}
                                        name={field.name}
                                        type="email"
                                        placeholder="Enter your email"
                                        onChange={(e) =>
                                            field.handleChange(e.target.value)
                                        }
                                        onBlur={field.handleBlur}
                                        value={field.state.value}
                                        autoComplete="email"
                                        aria-invalid={isInvalid}
                                    />

                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            );
                        }}
                    </form.Field>

                    {/* Password */}
                    <form.Field name="password">
                        {(field) => {
                            const isInvalid =
                                field.state.meta.isTouched &&
                                !field.state.meta.isValid;

                            return (
                                <Field data-invalid={isInvalid}>
                                    <FieldLabel htmlFor={field.name}>
                                        Password
                                    </FieldLabel>

                                    <div className="relative">
                                        <Input
                                            id={field.name}
                                            name={field.name}
                                            type={
                                                showPassword
                                                    ? 'text'
                                                    : 'password'
                                            }
                                            placeholder="Enter your password"
                                            onChange={(e) =>
                                                field.handleChange(
                                                    e.target.value,
                                                )
                                            }
                                            onBlur={field.handleBlur}
                                            value={field.state.value}
                                            autoComplete="current-password"
                                            aria-invalid={isInvalid}
                                            className="pr-10"
                                        />

                                        <button
                                            type="button"
                                            className="absolute right-3 top-1/2 -translate-y-1/2"
                                            onClick={() =>
                                                setShowPassword((prev) => !prev)
                                            }
                                            aria-label={
                                                showPassword
                                                    ? 'Hide password'
                                                    : 'Show password'
                                            }
                                        >
                                            {showPassword ? (
                                                <EyeClosed className="size-4" />
                                            ) : (
                                                <Eye className="size-4" />
                                            )}
                                        </button>
                                    </div>

                                    {isInvalid && (
                                        <FieldError
                                            errors={field.state.meta.errors}
                                        />
                                    )}
                                </Field>
                            );
                        }}
                    </form.Field>

                    {/* Forgot Password */}
                    <div className="flex justify-end">
                        <Link
                            href="/forgot-password"
                            className="text-sm text-red-400 underline underline-offset-4"
                        >
                            Forgot password?
                        </Link>
                    </div>

                    {/* Submit */}
                    <Button
                        disabled={loginPending}
                        type="submit"
                        className="w-full"
                    >
                        {loginPending ? (
                            <>
                                <Spinner />
                                Submitting
                            </>
                        ) : (
                            'Submit'
                        )}
                    </Button>

                    {/* Social Login Separator */}
                    <FieldSeparator>Or continue with</FieldSeparator>

                    {/* Social Login Buttons */}
                    <Field>
                        <div className="flex flex-col gap-2">
                            {/* Login with Google */}
                            <GoogleLogin
                                theme="outline"
                                text="continue_with"
                                onSuccess={handleGoogleSuccess}
                                onError={handleGoogleError}
                            />

                            {/* Facebook */}
                            <Button
                                variant="outline"
                                type="button"
                                className="w-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="size-4"
                                    fill="currentColor"
                                >
                                    <title>Facebook</title>

                                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.87.24-1.46 1.5-1.46h1.7V5c-.3-.04-1.32-.13-2.5-.13-2.47 0-4.16 1.51-4.16 4.29V11H7.3v3h2.74v8h3.46Z" />
                                </svg>
                                Login with Facebook
                            </Button>

                            {/* GitHub */}
                            <Button
                                variant="outline"
                                type="button"
                                className="w-full"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    className="size-4"
                                >
                                    <title>GitHub</title>

                                    <path
                                        d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                                        fill="currentColor"
                                    />
                                </svg>
                                Login with GitHub
                            </Button>
                        </div>

                        {/* Sign Up */}
                        <FieldDescription className="text-center">
                            Don&apos;t have an account?{' '}
                            <Link
                                href="/register"
                                className="underline underline-offset-4"
                            >
                                Sign Up
                            </Link>
                        </FieldDescription>
                    </Field>
                </FieldGroup>
            </form>
        </div>
    );
}
