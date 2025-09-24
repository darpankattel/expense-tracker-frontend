"use client";
import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority: process.env.NEXT_PUBLIC_COGNITO_DOMAIN,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
  response_type: "code",
  scope: "email openid phone profile",
};

export default function CognitoAuthProvider({ children }) {
  return (
    <AuthProvider {...cognitoAuthConfig}>
      {children}
    </AuthProvider>
  );
}