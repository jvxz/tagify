import { Button } from "./button";
import { Tooltip, TooltipTrigger } from "./tooltip";

export default function TooltipButton({
  children,
  tooltip,
  displayDelay = 100,
}: {
  children: React.ReactNode;
  tooltip: string;
  displayDelay?: number;
}) {
  return (
    <TooltipTrigger asChild>
      <Button variant="outline" size="icon" aria-label={tooltip}>
        {children}
      </Button>
      <Tooltip delayDuration={displayDelay}>{tooltip}</Tooltip>
    </TooltipTrigger>
  );
}
