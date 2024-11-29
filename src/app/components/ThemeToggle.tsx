"use client";
import { Button } from "@/components/ui/button";
import { Moon } from "lucide-react";
import { Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  return (
    <Button
      onPress={() => setTheme(theme === "dark" ? "light" : "dark")}
      size="icon"
      variant="outline"
    >
      {resolvedTheme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}
