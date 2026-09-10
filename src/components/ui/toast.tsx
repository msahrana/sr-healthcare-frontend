"use client";

import { Toast as ToastPrimitive } from "@base-ui/react/toast";
import {
  CircleCheckIcon,
  InfoIcon,
  Loader2Icon,
  OctagonXIcon,
  TriangleAlertIcon,
  XIcon,
} from "lucide-react";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* =========================================================
   TOAST MANAGER
========================================================= */

const toast = ToastPrimitive.createToastManager();

/* =========================================================
   TOAST PROVIDER
========================================================= */

function ToastProvider({ ...props }: ToastPrimitive.Provider.Props) {
  return <ToastPrimitive.Provider {...props} />;
}

/* =========================================================
   TOAST PORTAL
========================================================= */

function ToastPortal({ ...props }: ToastPrimitive.Portal.Props) {
  return <ToastPrimitive.Portal data-slot="toast-portal" {...props} />;
}

/* =========================================================
   TOAST VIEWPORT
   TOP RIGHT POSITION
========================================================= */

function ToastViewport({ className, ...props }: ToastPrimitive.Viewport.Props) {
  return (
    <ToastPrimitive.Viewport
      data-slot="toast-viewport"
      className={cn(
        "pointer-events-none fixed top-4 right-4 z-100 w-[calc(100%-2rem)] max-w-sm outline-none",
        className,
      )}
      {...props}
    />
  );
}

/* =========================================================
   TOAST ROOT
========================================================= */

function Toast({ className, ...props }: ToastPrimitive.Root.Props) {
  return (
    <ToastPrimitive.Root
      data-slot="toast"
      className={cn(
        /* -----------------------------------------------
           BASE
        ------------------------------------------------ */
        "group/toast pointer-events-auto absolute right-0 top-0 z-[calc(1000-var(--toast-index))] w-full origin-top rounded-2xl border bg-background shadow-lg will-change-transform outline-none select-none",

        /* -----------------------------------------------
           FOCUS
        ------------------------------------------------ */
        "focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50",

        /* -----------------------------------------------
           TOAST VARIABLES
        ------------------------------------------------ */
        "[--gap:0.75rem]",
        "[--height:var(--toast-frontmost-height,var(--toast-height))]",
        "[--offset-y:calc(var(--toast-offset-y)*-1+calc(var(--toast-index)*var(--gap)*-1)+var(--toast-swipe-movement-y))]",
        "[--peek:0.75rem]",
        "[--scale:calc(max(0,1-(var(--toast-index)*0.1)))]",
        "[--shrink:calc(1-var(--scale))]",

        /* -----------------------------------------------
           TRANSFORM
        ------------------------------------------------ */
        "h-(--height)",
        "transform-[translateX(var(--toast-swipe-movement-x))_translateY(calc(var(--toast-swipe-movement-y)+(var(--toast-index)*var(--peek))+(var(--shrink)*var(--height))))_scale(var(--scale))]",

        /* -----------------------------------------------
           TRANSITION
        ------------------------------------------------ */
        "[transition:transform_500ms_cubic-bezier(0.22,1,0.36,1),opacity_500ms,height_150ms]",

        /* -----------------------------------------------
           STACK GAP
        ------------------------------------------------ */
        "after:absolute after:top-full after:left-0 after:h-[calc(var(--gap)+1px)] after:w-full after:content-['']",

        /* -----------------------------------------------
           EXPANDED
        ------------------------------------------------ */
        "data-expanded:h-(--toast-height)",
        "data-expanded:transform-[translateX(var(--toast-swipe-movement-x))_translateY(var(--offset-y))]",

        /* -----------------------------------------------
           STARTING ANIMATION
           Toast comes from TOP
        ------------------------------------------------ */
        "data-starting-style:transform-[translateY(-150%)]",
        "data-starting-style:opacity-0",

        /* -----------------------------------------------
           LIMITED
        ------------------------------------------------ */
        "data-limited:opacity-0",

        /* -----------------------------------------------
           DEFAULT ENDING
        ------------------------------------------------ */
        "[&[data-ending-style]:not([data-limited]):not([data-swipe-direction])]:transform-[translateY(-150%)]",
        "[&[data-ending-style]:not([data-limited])]:opacity-0",

        /* -----------------------------------------------
           SWIPE DOWN
        ------------------------------------------------ */
        "data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",

        /* -----------------------------------------------
           SWIPE LEFT
        ------------------------------------------------ */
        "data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",

        /* -----------------------------------------------
           SWIPE RIGHT
        ------------------------------------------------ */
        "data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",

        /* -----------------------------------------------
           SWIPE UP
        ------------------------------------------------ */
        "data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",

        /* -----------------------------------------------
           EXPANDED + SWIPE DOWN
        ------------------------------------------------ */
        "data-expanded:data-ending-style:data-[swipe-direction=down]:transform-[translateY(calc(var(--toast-swipe-movement-y)+150%))]",

        /* -----------------------------------------------
           EXPANDED + SWIPE LEFT
        ------------------------------------------------ */
        "data-expanded:data-ending-style:data-[swipe-direction=left]:transform-[translateX(calc(var(--toast-swipe-movement-x)-150%))_translateY(var(--offset-y))]",

        /* -----------------------------------------------
           EXPANDED + SWIPE RIGHT
        ------------------------------------------------ */
        "data-expanded:data-ending-style:data-[swipe-direction=right]:transform-[translateX(calc(var(--toast-swipe-movement-x)+150%))_translateY(var(--offset-y))]",

        /* -----------------------------------------------
           EXPANDED + SWIPE UP
        ------------------------------------------------ */
        "data-expanded:data-ending-style:data-[swipe-direction=up]:transform-[translateY(calc(var(--toast-swipe-movement-y)-150%))]",

        className,
      )}
      {...props}
    />
  );
}

/* =========================================================
   TOAST CONTENT
========================================================= */

function ToastContent({ className, ...props }: ToastPrimitive.Content.Props) {
  return (
    <ToastPrimitive.Content
      data-slot="toast-content"
      className={cn(
        "flex h-full items-center gap-3 overflow-hidden p-4",
        "transition-opacity duration-250 ease-[cubic-bezier(0.22,1,0.36,1)]",
        "data-behind:opacity-0",
        "data-expanded:opacity-100",
        className,
      )}
      {...props}
    />
  );
}

/* =========================================================
   TOAST TITLE
========================================================= */

function ToastTitle({ className, ...props }: ToastPrimitive.Title.Props) {
  return (
    <ToastPrimitive.Title
      data-slot="toast-title"
      className={cn("text-sm font-medium", className)}
      {...props}
    />
  );
}

/* =========================================================
   TOAST DESCRIPTION
========================================================= */

function ToastDescription({
  className,
  ...props
}: ToastPrimitive.Description.Props) {
  return (
    <ToastPrimitive.Description
      data-slot="toast-description"
      className={cn("text-sm", "text-muted-foreground", className)}
      {...props}
    />
  );
}

/* =========================================================
   TOAST ACTION
========================================================= */

function ToastAction({
  className,
  render = <Button variant="outline" size="sm" />,
  ...props
}: ToastPrimitive.Action.Props) {
  return (
    <ToastPrimitive.Action
      data-slot="toast-action"
      render={render}
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}

/* =========================================================
   TOAST CLOSE
========================================================= */

function ToastClose({
  className,
  children,
  render = <Button variant="ghost" size="icon-sm" />,
  ...props
}: ToastPrimitive.Close.Props) {
  return (
    <ToastPrimitive.Close
      data-slot="toast-close"
      aria-label="Close toast"
      render={render}
      className={cn(
        "relative shrink-0 text-muted-foreground",
        "after:absolute after:-inset-2 after:content-['']",
        "hover:text-foreground",
        className,
      )}
      {...props}
    >
      {children ?? <XIcon aria-hidden="true" />}
    </ToastPrimitive.Close>
  );
}

/* =========================================================
   TOAST ICON
========================================================= */

function ToastIcon({ type }: { type: string | undefined }) {
  let icon: React.ReactNode = null;

  /* SUCCESS */
  if (type === "success") {
    icon = <CircleCheckIcon className="text-green-600" aria-hidden="true" />;
  }

  /* INFO */
  if (type === "info") {
    icon = <InfoIcon className="text-blue-600" aria-hidden="true" />;
  }

  /* WARNING */
  if (type === "warning") {
    icon = <TriangleAlertIcon className="text-yellow-600" aria-hidden="true" />;
  }

  /* ERROR */
  if (type === "error") {
    icon = <OctagonXIcon className="text-red-600" aria-hidden="true" />;
  }

  /* LOADING */
  if (type === "loading") {
    icon = (
      <Loader2Icon className="animate-spin text-gray-600" aria-hidden="true" />
    );
  }

  if (!icon) {
    return null;
  }

  return (
    <span
      data-slot="toast-icon"
      className={cn(
        "shrink-0",
        "[&_svg]:pointer-events-none",
        "[&_svg:not([class*='size-'])]:size-4",
      )}
    >
      {icon}
    </span>
  );
}

/* =========================================================
   TOAST LIST
========================================================= */

function ToastList() {
  const { toasts } = ToastPrimitive.useToastManager();

  return toasts.map((toastItem) => (
    <Toast
      key={toastItem.id}
      toast={toastItem}
      className={cn(
        /* SUCCESS */
        toastItem.type === "success" &&
          "border-green-200 bg-green-50 text-green-700",

        /* ERROR */
        toastItem.type === "error" && "border-red-200 bg-red-50 text-red-700",

        /* WARNING */
        toastItem.type === "warning" &&
          "border-yellow-200 bg-yellow-50 text-yellow-700",

        /* INFO */
        toastItem.type === "info" && "border-blue-200 bg-blue-50 text-blue-700",

        /* LOADING */
        toastItem.type === "loading" &&
          "border-gray-200 bg-gray-50 text-gray-700",
      )}
    >
      <ToastContent>
        <ToastIcon type={toastItem.type} />

        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <ToastTitle />

          <ToastDescription />
        </div>

        <ToastAction />

        <ToastClose />
      </ToastContent>
    </Toast>
  ));
}

/* =========================================================
   TOASTER
========================================================= */

function Toaster({
  children,
  toastManager = toast,
  ...props
}: ToastPrimitive.Provider.Props) {
  return (
    <ToastProvider toastManager={toastManager} {...props}>
      {children}

      <ToastPortal>
        <ToastViewport>
          <ToastList />
        </ToastViewport>
      </ToastPortal>
    </ToastProvider>
  );
}

/* =========================================================
   EXPORTS
========================================================= */

const createToastManager = ToastPrimitive.createToastManager;

const useToastManager = ToastPrimitive.useToastManager;

export {
  Toaster,
  Toast,
  ToastAction,
  ToastClose,
  ToastContent,
  ToastDescription,
  ToastPortal,
  ToastProvider,
  ToastTitle,
  ToastViewport,
  createToastManager,
  toast,
  useToastManager,
};
