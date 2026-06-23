import * as React from "react"

import { cn } from "@my-better-t-app/ui/lib/utils"

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        "group/card flex flex-col overflow-hidden rounded-2xl bg-card text-card-foreground shadow-md ring-1 ring-black/5 transition-shadow hover:shadow-lg has-[>img:first-child]:pt-0",
        size === "sm" ? "text-sm" : "text-sm",
        className
      )}
      {...props}
    />
  )
}

function CardMedia({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-media"
      className={cn("relative aspect-[4/3] overflow-hidden", className)}
      {...props}
    />
  )
}

function CardBadge({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "default" | "success" | "info" | "rating"
}) {
  return (
    <span
      data-slot="card-badge"
      data-variant={variant}
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "success" && "bg-success text-success-foreground",
        variant === "info" && "bg-sky-500 text-white",
        variant === "rating" &&
          "bg-black/60 text-white normal-case tracking-normal backdrop-blur-sm",
        className
      )}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "flex flex-col gap-1 px-4 pt-4 has-data-[slot=card-action]:flex-row has-data-[slot=card-action]:items-start has-data-[slot=card-action]:justify-between",
        className
      )}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-base font-semibold leading-snug text-foreground", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    />
  )
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn("shrink-0 self-start", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div data-slot="card-content" className={cn("px-4", className)} {...props} />
  )
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-4 pb-4 pt-2", className)}
      {...props}
    />
  )
}

function CardPrice({
  className,
  amount,
  currency = "EUR",
  label = "de la",
  ...props
}: React.ComponentProps<"div"> & {
  amount: string | number
  currency?: string
  label?: string
}) {
  return (
    <div
      data-slot="card-price"
      className={cn("flex items-baseline gap-1.5", className)}
      {...props}
    >
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-base font-bold text-foreground">
        {amount} {currency}
      </span>
    </div>
  )
}

export {
  Card,
  CardAction,
  CardBadge,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardMedia,
  CardPrice,
  CardTitle,
}
