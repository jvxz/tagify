import { Button, type ButtonProps } from "@/components/ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";

export function TooltipButton({
  children,
  tooltip,
  placement = "top",
  isDisabled = false,
  variant = "outline",
  ...buttonProps
}: {
  children: React.ReactNode;
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
        size="icon"
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
