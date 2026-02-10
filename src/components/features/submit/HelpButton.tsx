"use client"

import { HelpCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HelpButtonProps {
  onClick: () => void
  disabled?: boolean
}

export function HelpButton({ onClick, disabled = false }: HelpButtonProps) {
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={onClick}
      disabled={disabled}
      aria-label="Get help with this question"
      className="fixed bottom-20 right-4 z-10 size-10 rounded-full shadow-md md:bottom-24 md:right-6"
    >
      <HelpCircle className="size-5" />
    </Button>
  )
}
