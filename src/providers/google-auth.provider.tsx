"use client";

import { GoogleOAuthProvider } from "@react-oauth/google";
import { ReactNode } from "react";

const googleAuthProvider = ({ children }: { children: ReactNode }) => {
  const clientID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  if (!clientID) {
    return <>{children}</>;
  }

  return (
    <GoogleOAuthProvider clientId={clientID}>{children}</GoogleOAuthProvider>
  );
};

export default googleAuthProvider;
