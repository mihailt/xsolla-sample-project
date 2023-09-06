"use client";

import { useAppStore } from "@/store/app";
import AppButton from "@/components/app/ui/button";
import { Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const router  = useRouter()
  const [mounted, setMounted] = useState(false);
  const {loading, token, user, setLoading, fetchUser} = useAppStore()
  const [showLogin, setShowLogin] = useState(false)

  const authClickHandler = () => {
    router.push("/auth")
  }

  const signoutClickHandler = () => {
    router.push("/auth/signout")
  }  

  useEffect(() => {
    setMounted(true)
    const load = async () => {
      if (!loading) {
        if(!token) {
          setLoading(true)
          setShowLogin(true)
          setLoading(false)  
        } else if (!user) {
          await fetchUser()
        }
      }   
    }

    load();
  }, [fetchUser, loading, setLoading, token, user])

  if (!mounted)  return <></>

  if (loading) {
    return (
      <div className="flex flex-row gap-3 justify-center items-center">
        <div className="flex flex-col">
          <Loader2 className="h-8 w-8 animate-spin shadow-none stroke-gray-400" />
        </div>
      </div>
    )
  } else if (showLogin) {
    return (
      <div className="flex flex-row gap-3 justify-center items-center">
        <div className="flex flex-row gap-3 justify-center items-center">
          <AppButton onClick={authClickHandler} label="Authenticate" icon={true} />
        </div>
      </div>
    )
  
  } else if (user) {
    return (
      <div className="flex flex-row gap-3 justify-center items-center">
        <div className="flex flex-row gap-3 justify-center items-center">
          <div>{user.email}</div>
          <AppButton onClick={signoutClickHandler} label="Sign out" icon={false} />
        </div>
      </div>
    )
  } else if (token) {
    return (
      <div className="flex flex-row gap-3 justify-center items-center">
        <div className="w-24 h-6 overflow-hidden truncate">
          {token}
        </div>
      </div>
    )
  }

}