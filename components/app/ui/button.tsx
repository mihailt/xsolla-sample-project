"use client";

import { Button } from "@/components/ui/button"
import { KeyRound } from 'lucide-react';

export default function AppButton({ onClick, label, icon }: { onClick: () => void, label: string, icon: boolean}) {
  const clickHandler = () => {
    onClick()
  }

  return (
    <div>
      <Button onClick={clickHandler} size="lg">
        {label}
        {icon && <KeyRound className="w-4 h-4 ml-2" />}
      </Button>
    </div>
  )
}