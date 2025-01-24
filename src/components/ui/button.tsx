"use client";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import {
  ComponentMetadata,
  PropType,
  EventType,
  ActionType,
  ComponentCategory,
} from "@/lib/metadata";

// Button metadata definition with full type safety
const metadata: ComponentMetadata = {
  id: "button-01",
  name: "Button",
  category: ComponentCategory.UI,
  description: "A customizable button component with multiple variants and sizes.",
  props: [
    {
      name: "variant",
      type: PropType.ENUM,
      values: ["default", "destructive", "outline", "secondary", "ghost", "link"],
      default: "default",
      description: "Defines the button style variant.",
      required: true,
    },
    {
      name: "size",
      type: PropType.ENUM,
      values: ["default", "sm", "lg", "icon"],
      default: "default",
      description: "Defines the button size.",
    },
    {
      name: "asChild",
      type: PropType.BOOLEAN,
      default: false,
      description: "If true, renders the component as a child of another element.",
    },
    {
      name: "onClick",
      type: PropType.FUNCTION,
      description: "Callback function when the button is clicked.",
    },
  ],
  defaultProps: {
    variant: "default",
    size: "default",
    asChild: false,
  },
  events: [
    {
      type: EventType.CLICK,
      actions: [
        {
          type: ActionType.CUSTOM_FUNCTION,
          handlerName: "handleClick",
        },
      ],
    },
  ],
  styles: [
    { property: "backgroundColor", value: "#3498db", editable: true },
    { property: "padding", value: "1rem", responsive: true },
  ],
  childrenAllowed: false,
  dependencies: [],
};

// Button style variants with CVA (Class Variance Authority)
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Button component props interface using types
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  onClickAction?: () => void; // Ensure compatibility in server environments
}

// Button component definition
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, onClickAction, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (onClickAction) {
        onClickAction();
      }
      if (props.onClick) {
        props.onClick(e);
      }
    };

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        onClick={handleClick}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants, metadata };
