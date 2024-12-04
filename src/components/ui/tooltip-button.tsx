import { Button } from "@/components/ui/button";
import { Tooltip, TooltipTrigger } from "@/components/ui/tooltip";

export function TooltipButton({
  children,
  tooltip,
  placement = "top",
  isDisabled = false,
}: {
  children: React.ReactNode;
  tooltip: string;
  placement?: "top" | "bottom" | "left" | "right";
  isDisabled?: boolean;
}) {
  return (
    <TooltipTrigger delay={200} closeDelay={0}>
      <Button
        isDisabled={isDisabled}
        variant="outline"
        size="icon"
        aria-label={tooltip}
      >
        {children}
      </Button>
      <Tooltip className="pointer-events-none" placement={placement}>
        {tooltip}
      </Tooltip>
    </TooltipTrigger>
  );
}
