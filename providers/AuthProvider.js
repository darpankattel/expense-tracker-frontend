"use client";

import React, { useMemo } from "react";
import { AuthProvider } from "react-oidc-context";
import { WebStorageStateStore } from "oidc-client-ts";

export default function CognitoAuthProvider({ children }) {
  const baseConfig = {
        authority: process.env.NEXT_PUBLIC_COGNITO_AUTHORITY,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
        post_logout_redirect_uri: process.env.NEXT_PUBLIC_LOGOUT_URI,
        response_type: "code",
        scope: "email openid phone profile",
      };
  const config = useMemo(() => {
    if (typeof window === "undefined") {
      return baseConfig;
    }

    // On browser: safe to access window.localStorage
    return {
      ...baseConfig,
      loadUserInfo: true,
      automaticSilentRenew: true,
      userStore: new WebStorageStateStore({ store: window.localStorage }),
    };
  }, []);

  return <AuthProvider {...config}>{children}</AuthProvider>;
}
