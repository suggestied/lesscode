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

// Input metadata definition with full type safety
const metadata: ComponentMetadata = {
  id: "input-01",
  name: "Input",
  category: ComponentCategory.FORM,
  description: "A customizable input component with multiple variants and sizes.",
  props: [
    {
      name: "variant",
      type: PropType.ENUM,
      values: ["default", "outline", "filled"],
      default: "default",
      description: "Defines the input style variant.",
      required: true,
    },
    {
      name: "size",
      type: PropType.ENUM,
      values: ["sm", "md", "lg"],
      default: "md",
      description: "Defines the input size.",
    },
    {
      name: "placeholder",
      type: PropType.STRING,
      default: "",
      description: "Placeholder text for the input.",
    },
    {
      name: "value",
      type: PropType.STRING,
      default: "",
      description: "Value of the input field.",
    },
    {
      name: "onChange",
      type: PropType.FUNCTION,
      description: "Callback function when the input value changes.",
    },
    {
      name: "disabled",
      type: PropType.BOOLEAN,
      default: false,
      description: "Disables the input field if set to true.",
    },
  ],
  defaultProps: {
    variant: "default",
    size: "md",
    placeholder: "",
    value: "",
    disabled: false,
  },
  events: [
    {
      type: EventType.CHANGE,
      actions: [
        {
          type: ActionType.CUSTOM_FUNCTION,
          handlerName: "handleChange",
        },
      ],
    },
  ],
  styles: [
    { property: "borderColor", value: "#e2e8f0", editable: true },
    { property: "padding", value: "0.75rem 1rem", responsive: true },
  ],
  childrenAllowed: false,
  dependencies: [],
};

// Input style variants with CVA (Class Variance Authority)
const inputVariants = cva(
  "w-full rounded-md border text-sm transition-all focus:outline-none focus:ring-1 disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "border-gray-300 focus:ring-primary",
        outline: "border-2 border-gray-400 focus:ring-primary",
        filled: "bg-gray-100 focus:ring-primary",
      },
      size: {
        sm: "h-8 px-3 text-xs",
        md: "h-10 px-4",
        lg: "h-12 px-5 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

// Input component props interface
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  asChild?: boolean;
  onChangeAction?: (value: string) => void;
}

// Input component definition
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, asChild = false, onChangeAction, ...props }, ref) => {
    const Comp = asChild ? Slot : "input";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (onChangeAction) {
        onChangeAction(e.target.value);
      }
      if (props.onChange) {
        props.onChange(e);
      }
    };

    return (
      <Comp
        className={cn(inputVariants({ variant, size, className }))}
        ref={ref}
        onChange={handleChange}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants, metadata };
