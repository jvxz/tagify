"use client";
import { useTheme } from "next-themes";
import { Button } from "./components/Button";

export default function Page() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="bg-background text-foreground flex h-screen flex-col items-center justify-center">
      <Button
        onPress={() => {
          setTheme(theme === "dark" ? "light" : "dark");
        }}
      >
        Click me
      </Button>
    </div>
  );
}
