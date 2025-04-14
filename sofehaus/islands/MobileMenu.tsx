import { useState } from "preact/hooks";
import ThemeToggle from "./ThemeToggle.tsx";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  return (
    <div class="md:hidden">
      <div class="flex items-center space-x-2">
        <ThemeToggle />
        <button 
          class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 hover:text-sofehaus-primary dark:hover:text-sofehaus-primary"
          onClick={toggleMenu}
        >
          <i class={`fas ${isOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
        </button>
      </div>
      
      {/* Mobile menu dropdown */}
      <div 
        class={`fixed inset-0 z-50 bg-sofehaus-dark bg-opacity-95 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div class="container mx-auto px-4 py-6">
          <div class="flex justify-between items-center mb-10">
            <div class="flex items-center">
              <img src="/logo.svg" alt="SOFEHAUS Logo" class="h-8 w-auto" />
              <span class="ml-3 text-lg font-bold text-white">SOFEHAUS</span>
            </div>
            <button 
              class="text-white hover:text-sofehaus-accent"
              onClick={toggleMenu}
            >
              <i class="fas fa-times text-xl"></i>
            </button>
          </div>
          
          <nav class="flex flex-col space-y-6">
            <a 
              href="#" 
              class="text-white text-2xl font-medium hover:text-sofehaus-accent"
              onClick={closeMenu}
            >
              Home
            </a>
            <a 
              href="#services" 
              class="text-white text-2xl font-medium hover:text-sofehaus-accent"
              onClick={closeMenu}
            >
              Services
            </a>
            <a 
              href="#projects" 
              class="text-white text-2xl font-medium hover:text-sofehaus-accent"
              onClick={closeMenu}
            >
              Projects
            </a>
            <a 
              href="#about" 
              class="text-white text-2xl font-medium hover:text-sofehaus-accent"
              onClick={closeMenu}
            >
              About
            </a>
            <a 
              href="#contact" 
              class="text-white text-2xl font-medium hover:text-sofehaus-accent"
              onClick={closeMenu}
            >
              Contact
            </a>
          </nav>
          
          <div class="mt-12 pt-6 border-t border-sofehaus-gray-800">
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-sofehaus-gray-800 rounded-full flex items-center justify-center hover:bg-sofehaus-primary transition duration-300">
                <i class="fab fa-linkedin-in text-white"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-sofehaus-gray-800 rounded-full flex items-center justify-center hover:bg-sofehaus-primary transition duration-300">
                <i class="fab fa-twitter text-white"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-sofehaus-gray-800 rounded-full flex items-center justify-center hover:bg-sofehaus-primary transition duration-300">
                <i class="fab fa-facebook-f text-white"></i>
              </a>
              <a href="#" class="w-10 h-10 bg-sofehaus-gray-800 rounded-full flex items-center justify-center hover:bg-sofehaus-primary transition duration-300">
                <i class="fab fa-instagram text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 