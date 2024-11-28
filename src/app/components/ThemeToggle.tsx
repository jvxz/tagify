"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <Button
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      variant="outline"
    >
      {resolvedTheme === "dark" ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </Button>
  );
}
