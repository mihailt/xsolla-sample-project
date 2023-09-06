"use client";

import { useEffect } from "react";
import {Loader2} from 'lucide-react';
import { useRouter } from 'next/navigation'
import { useAppStore } from "@/store/app";
import { delay } from "@/lib/utils";

export default function AuthSignout({
  redirectRoute
}: {
  redirectRoute: string
}) {

  const router = useRouter()
  const { signout } = useAppStore()

  useEffect(() => {
    const op = async () => {
      await delay(200)
      signout()
      router.push(redirectRoute)
    }

    op().catch(console.error);
  }, [router, redirectRoute, signout])

  return (
    <div className="flex flex-col">
      <Loader2 className="h-8 w-8 animate-spin shadow-none stroke-gray-600" />
    </div>
  );
}