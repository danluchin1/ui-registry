import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@my-better-t-app/ui/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "rounded-full bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 focus-visible:ring-primary/30",
        secondary:
          "rounded-full bg-white text-black shadow-sm hover:bg-white/90 focus-visible:ring-foreground/10",
        outline:
          "rounded-full border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        "outline-hero":
          "rounded-full border-white/60 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white/30",
        glass:
          "rounded-full border-white/30 bg-white/25 text-white shadow-sm backdrop-blur-md hover:bg-white/35 focus-visible:ring-white/30",
        success:
          "rounded-full bg-success text-success-foreground shadow-sm hover:bg-success/90 focus-visible:ring-success/30",
        ghost:
          "rounded-full hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
        destructive:
          "rounded-full bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
        link: "rounded-none text-primary underline-offset-4 hover:underline",
        pill:
          "rounded-full bg-white/15 text-white backdrop-blur-sm hover:bg-white/25 focus-visible:ring-white/20",
        "pill-active":
          "rounded-full bg-white/60 text-foreground shadow-md hover:bg-white/65 focus-visible:ring-foreground/10",
      },
      size: {
        default: "h-10 gap-2 px-5",
        xs: "h-7 gap-1 rounded-full px-3 text-xs [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9 gap-1.5 rounded-full px-4 text-sm",
        lg: "h-11 gap-2 rounded-full px-6 text-base",
        xl: "h-12 gap-2 rounded-full px-8 text-base",
        icon: "size-10 rounded-full",
        "icon-sm": "size-9 rounded-full",
        "icon-lg": "size-12 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
