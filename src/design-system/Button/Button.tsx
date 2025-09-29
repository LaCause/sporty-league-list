import * as React from "react";
import { cn } from "@/app/utils";
import { ButtonProps, buttonVariants } from "./Button.model";

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      intent,
      size,
      fullWidth,
      className,
      isLoading = false,
      disabled,
      type = "button",
      children,
      ...props
    },
    ref
  ) {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        type={type}
        className={cn(buttonVariants({ intent, size, fullWidth }), className)}
        aria-busy={isLoading || undefined}
        aria-disabled={isDisabled || undefined}
        disabled={isDisabled}
        {...props}
      >
        {isLoading ? (
          <span className="pointer-events-none inline-flex items-center gap-2">
            <svg
              className="size-4 animate-spin"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
              />
            </svg>
            <span className="sr-only">Chargement…</span>
            {children}
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

export default Button;
