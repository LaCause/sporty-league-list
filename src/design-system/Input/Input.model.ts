import { cva, VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  "block w-full rounded-md border bg-background text-foreground " +
    "placeholder:text-[color:var(--foreground)/50] transition-colors " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary " +
    "disabled:opacity-50 disabled:cursor-not-allowed border-[color:var(--foreground)/20]",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-12 px-4 text-base",
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

export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  label?: string;
  helperText?: string;
  error?: string;
  requiredIndicator?: boolean;
}
