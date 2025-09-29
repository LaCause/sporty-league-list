import { cva, VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-md font-medium select-none " +
    "transition-colors duration-150 focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary " +
    "disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary:
          "bg-primary text-on-primary hover:opacity-90 active:opacity-100",
        secondary:
          "bg-secondary text-on-secondary hover:opacity-90 active:opacity-100",
        success:
          "bg-success text-on-success hover:opacity-90 active:opacity-100",
        error: "bg-error text-on-error hover:opacity-90 active:opacity-100",
        warning:
          "bg-warning text-on-warning hover:opacity-90 active:opacity-100",
        info: "bg-info text-on-info hover:opacity-90 active:opacity-100",
        neutral:
          "bg-foreground text-[color:var(--background)] hover:opacity-90 active:opacity-100",
        outline:
          "bg-transparent border border-[color:var(--foreground)/20] text-foreground hover:bg-[color:var(--foreground)/5]",
        ghost:
          "bg-transparent text-foreground hover:bg-[color:var(--foreground)/7]",
      },
      size: {
        sm: "h-8 px-3 text-sm",
        md: "h-10 px-4 text-sm",
        lg: "h-12 px-6 text-base",
      },
      fullWidth: {
        true: "w-full",
        false: "",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}
