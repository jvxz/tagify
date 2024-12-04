"use client";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle({
  variant,
}: {
  variant:
    | "link"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | null
    | undefined;
}) {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <Button
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      variant={variant}
    >
      {resolvedTheme === "dark" ? (
        <Sun className="size-5" />
      ) : (
        <Moon className="size-5" />
      )}
    </Button>
  );
}
