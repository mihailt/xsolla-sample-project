"use client";

import { useEffect } from "react";
import {Loader2} from 'lucide-react';
import { useRouter } from 'next/navigation'
import { useAppStore } from "@/store/app";

export interface AuthDoneParams {
  token?: string
}

export default function AuthDone({
  searchParams,
  redirectRoute
}: {
  searchParams: AuthDoneParams,
  redirectRoute: string
}) {

  const router = useRouter()
  const { setToken } = useAppStore()

  const token = searchParams.token

  useEffect(() => {
    const op = async () => {
      setToken(token)
      router.push(redirectRoute)
    }

    op().catch(console.error);
  }, [token, router, redirectRoute, setToken])

  return (
    <div className="flex flex-col">
      <Loader2 className="h-8 w-8 animate-spin shadow-none stroke-gray-600" />
    </div>
  );
}