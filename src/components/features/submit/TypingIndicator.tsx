"use client"

export function TypingIndicator() {
  return (
    <div className="flex justify-start">
      <div className="bg-surface rounded-2xl rounded-tl-sm px-4 py-3">
        <div className="flex items-center gap-1">
          <span className="bg-muted-foreground/50 size-2 animate-bounce rounded-full [animation-delay:0ms]" />
          <span className="bg-muted-foreground/50 size-2 animate-bounce rounded-full [animation-delay:150ms]" />
          <span className="bg-muted-foreground/50 size-2 animate-bounce rounded-full [animation-delay:300ms]" />
        </div>
      </div>
    </div>
  )
}
