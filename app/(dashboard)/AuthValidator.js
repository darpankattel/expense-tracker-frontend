"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "react-oidc-context";

const AuthValidator = ({ children }) => {
  const router = useRouter();
  const auth = useAuth();

  useEffect(() => {
    // Wait until auth state is loaded before checking
    if (!auth.isLoading) {
      if (!auth.isAuthenticated) {
        router.replace("/?message=authentication-required");
      }
    }
    
  }, [auth.isLoading, auth.isAuthenticated, router]);

  // While auth is loading, optionally show a loading spinner
  if (auth.isLoading) {
    return <div>Loading authentication status...</div>;
  }

  // If authenticated, render children
  return <>{children}</>;
};

export default AuthValidator;
