import React from "react"
import { Loader } from "lucide-react"

type LoadingStateProps = {
  label?: string
  compact?: boolean
  className?: string
}

export const LoadingState: React.FC<LoadingStateProps> = ({
  label,
  compact = false,
  className = "",
}) => {
  if (compact) {
    return (
      <span className={`inline-flex items-center justify-center gap-2 ${className}`}>
        <Loader className="h-5 w-5 animate-spin text-current" />
        {label && <span>{label}</span>}
      </span>
    )
  }

  return (
    <div
      className={`flex min-h-48 flex-col items-center justify-center gap-4 rounded-3xl border border-gray-200 bg-white/70 px-6 py-12 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900/70 ${className}`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 dark:bg-red-900/25 dark:text-red-400">
        <Loader className="h-7 w-7 animate-spin" />
      </div>
      {label && (
        <p className="text-base font-bold text-gray-600 dark:text-gray-300">
          {label}
        </p>
      )}
    </div>
  )
}
