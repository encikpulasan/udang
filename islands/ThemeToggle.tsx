import { useEffect, useState } from "preact/hooks";

export default function ThemeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if theme is stored in localStorage
    const savedTheme = localStorage.getItem("theme");
    
    // If theme is stored, use that value
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } 
    // Otherwise, use system preference
    else {
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setIsDarkMode(prefersDark);
      document.documentElement.classList.toggle("dark", prefersDark);
      localStorage.setItem("theme", prefersDark ? "dark" : "light");
    }
  }, []);

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      class="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-sofehaus-primary transition-colors duration-200 ease-in-out"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <div class="text-yellow-300 hover:text-yellow-400 transition-colors">
          <i class="fas fa-sun text-xl"></i>
        </div>
      ) : (
        <div class="text-sofehaus-gray-600 hover:text-sofehaus-gray-800 transition-colors">
          <i class="fas fa-moon text-xl"></i>
        </div>
      )}
    </button>
  );
} 