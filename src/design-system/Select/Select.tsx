import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/app/utils";

const selectVariants = cva(
  "block w-full appearance-none rounded-md border bg-background text-foreground " +
    "placeholder:text-[color:var(--foreground)/50] transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary " +
    "disabled:opacity-50 disabled:cursor-not-allowed border-[color:var(--foreground)/20]",
  {
    variants: {
      size: {
        sm: "h-9 px-3 pr-9 text-sm",
        md: "h-10 px-3 pr-10 text-sm",
        lg: "h-12 px-4 pr-12 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
      state: {
        default: "",
        error: "border-error focus-visible:ring-error",
      },
    },
    defaultVariants: {
      size: "md",
      fullWidth: true,
      state: "default",
    },
  }
);

export interface SelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof selectVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  requiredIndicator?: boolean;
}

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    {
      id,
      label,
      helperText,
      error,
      required,
      requiredIndicator = true,
      size,
      fullWidth,
      className,
      children,
      disabled,
      "aria-describedby": ariaDescribedBy,
      ...props
    },
    ref
  ) {
    const reactId = React.useId();
    const selectId = id ?? `select-${reactId}`;
    const helperId = helperText ? `${selectId}-help` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;

    const describedBy = [ariaDescribedBy, helperId, errorId]
      .filter(Boolean)
      .join(" ");

    const state: VariantProps<typeof selectVariants>["state"] = error
      ? "error"
      : "default";

    return (
      <div className={cn(fullWidth ? "w-full" : undefined)}>
        {label && (
          <label
            htmlFor={selectId}
            className="mb-1 block text-sm font-medium text-foreground"
          >
            {label}
            {required && requiredIndicator ? (
              <span
                aria-hidden="true"
                className="ml-0.5 align-middle text-error"
              >
                *
              </span>
            ) : null}
          </label>
        )}

        <div className={cn("relative", fullWidth ? "w-full" : undefined)}>
          <select
            id={selectId}
            ref={ref}
            className={cn(
              selectVariants({ size, fullWidth, state }),
              className
            )}
            aria-invalid={!!error || undefined}
            aria-describedby={describedBy || undefined}
            aria-required={required || undefined}
            required={required}
            disabled={disabled}
            {...props}
          >
            {children}
          </select>

          {/* Chevron icon */}
          <svg
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 size-4 text-[color:var(--foreground)/60]"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 10.17l3.71-2.94a.75.75 0 111.04 1.08l-4.24 3.36a.75.75 0 01-.94 0L5.21 8.31a.75.75 0 01.02-1.1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        {helperText && !error ? (
          <p
            id={helperId}
            className="mt-1 text-xs text-[color:var(--foreground)/70]"
          >
            {helperText}
          </p>
        ) : null}

        {error ? (
          <p id={errorId} className="mt-1 text-xs text-error">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

export default Select;
