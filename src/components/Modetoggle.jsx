import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Monitor } from "lucide-react";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2 bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
      <button onClick={() => setTheme("light")} title="Light">
        <Sun className="h-5 w-5" />
      </button>
      <button onClick={() => setTheme("dark")} title="Dark">
        <Moon className="h-5 w-5" />
      </button>
      <button onClick={() => setTheme("system")} title="System">
        <Monitor className="h-5 w-5" />
      </button>
    </div>
  );
}