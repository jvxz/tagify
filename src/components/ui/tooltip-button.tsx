import { Button, type ButtonProps } from "@/components/ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";

export function TooltipButton({
  children,
  tooltip,
  placement = "top",
  isDisabled = false,
  variant = "outline",
  size = "icon",
  ...buttonProps
}: {
  children: React.ReactNode;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  tooltip: string;
  placement?: "top" | "bottom" | "left" | "right";
  isDisabled?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
} & Omit<ButtonProps, "children" | "variant" | "isDisabled">) {
  return (
    <TooltipTrigger delay={200} closeDelay={0}>
      <Button
        isDisabled={isDisabled}
        variant={variant}
        size={size}
        aria-label={tooltip}
        {...buttonProps}
      >
        {children}
      </Button>
      <Tooltip className="pointer-events-none" placement={placement}>
        {tooltip}
      </Tooltip>
    </TooltipTrigger>
  );
}
