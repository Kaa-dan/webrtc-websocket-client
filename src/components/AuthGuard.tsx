"use client";

import { useAppDispatch } from "@/hooks/useAppDispatch";
import { useAppSelector } from "@/hooks/useAppSelector";
import { initializeAuth } from "@/store/slices/authSlice";
import { useRouter } from "next/navigation";
import type React from "react";
import { useEffect } from "react";

interface AuthGuardProps {
  children: React.ReactNode;
  requireAuth?: boolean;
}

export function AuthGuard({ children, requireAuth = false }: AuthGuardProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isAuthenticated, isLoading } = useAppSelector((state) => state.auth);

  // Check if the user is authenticated
  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);

  useEffect(() => {
    if (isLoading) {
      if (requireAuth && !isAuthenticated) {
        router.push("/auth/login");
      } else if (!requireAuth && isAuthenticated) {
        router.push("/profile");
      }
    }
  }, [isAuthenticated, isLoading, requireAuth, router]);

  // If loading, show a spinner or loading state
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }
  // If authenticated, render children
  return <>{children}</>;
}
