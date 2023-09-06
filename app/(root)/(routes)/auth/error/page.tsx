"use client";

import AppButton from "@/components/app/ui/button";
import { useRouter } from "next/navigation";



export default function ErrorPage() {
  const router  = useRouter()

  const clickHandler = () => {
    router.push("/")
  }

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div>Oops. Something went wrong!</div>
      <AppButton onClick={clickHandler} label="Try Again" icon={false} />
    </div>
  )
}