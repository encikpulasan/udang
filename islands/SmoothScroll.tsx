import { useEffect } from "preact/hooks";

export default function SmoothScroll() {
  useEffect(() => {
    // Get all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listeners
    anchorLinks.forEach((anchorLink) => {
      anchorLink.addEventListener("click", smoothScroll);
    });
    
    // Remove event listeners on cleanup
    return () => {
      anchorLinks.forEach((anchorLink) => {
        anchorLink.removeEventListener("click", smoothScroll);
      });
    };
  }, []);
  
  // Smooth scroll function
  const smoothScroll = (e: Event) => {
    e.preventDefault();
    
    const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href") || "";
    
    // Return if the href is just #
    if (targetId === "#") return;
    
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      // Add offset for fixed header (adjust the 80 value as needed)
      const headerOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  // This component doesn't render anything
  return null;
} 