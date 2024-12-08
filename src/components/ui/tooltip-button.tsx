import { Button, type ButtonProps } from "@/components/ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

export function TooltipButton({
  children,
  tooltip,
  placement = "top",
  isDisabled = false,
  variant = "outline",
  className,
  ...buttonProps
}: {
  children: React.ReactNode;
  tooltip: string;
  placement?: "top" | "bottom" | "left" | "right";
  isDisabled?: boolean;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost";
  className?: string;
} & Omit<ButtonProps, "children" | "variant" | "isDisabled">) {
  return (
    <TooltipTrigger delay={200} closeDelay={0}>
      <Button
        isDisabled={isDisabled}
        variant={variant}
        size="icon"
        aria-label={tooltip}
        {...buttonProps}
        className={cn(className)}
      >
        {children}
      </Button>
      <Tooltip className="pointer-events-none" placement={placement}>
        {tooltip}
      </Tooltip>
    </TooltipTrigger>
  );
}
