import * as React from "react";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/app/utils";
import { InputProps, inputVariants } from "./Input.model";
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
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
      disabled,
      "aria-describedby": ariaDescribedBy,
      type = "text",
      ...props
    },
    ref
  ) {
    const reactId = React.useId();
    const inputId = id ?? `input-${reactId}`;
    const helperId = helperText ? `${inputId}-help` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const describedBy = [ariaDescribedBy, helperId, errorId]
      .filter(Boolean)
      .join(" ");

    const state: VariantProps<typeof inputVariants>["state"] = error
      ? "error"
      : "default";

    return (
      <div className={cn(fullWidth ? "w-full" : undefined)}>
        {label && (
          <label
            htmlFor={inputId}
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

        <input
          id={inputId}
          ref={ref}
          type={type}
          className={cn(inputVariants({ size, fullWidth, state }), className)}
          aria-invalid={!!error || undefined}
          aria-describedby={describedBy || undefined}
          aria-required={required || undefined}
          required={required}
          disabled={disabled}
          {...props}
        />

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

export default Input;
