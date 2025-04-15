import { useEffect, useRef } from "preact/hooks";

export default function LogoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    // Clone the carousel items to create an infinite loop
    const originalItems = Array.from(carousel.children);
    originalItems.forEach((item) => {
      const clone = item.cloneNode(true);
      carousel.appendChild(clone);
    });
    
    // Animation function for smooth scrolling
    let animationId: number;
    let position = 0;
    
    const animate = () => {
      if (!carousel) return;
      
      position += 0.5; // Controls the speed of the animation
      
      // Reset position when all logos have scrolled
      if (position >= originalItems.length * 180) { // 180px is the width of each logo + margins
        position = 0;
      }
      
      carousel.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };
    
    // Start the animation
    animationId = requestAnimationFrame(animate);
    
    // Pause animation when the user hovers over the carousel
    carousel.addEventListener("mouseenter", () => {
      cancelAnimationFrame(animationId);
    });
    
    // Resume animation when the user leaves the carousel
    carousel.addEventListener("mouseleave", () => {
      animationId = requestAnimationFrame(animate);
    });
    
    // Clean up the animation on unmount
    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);
  
  return (
    <div class="overflow-hidden">
      <div 
        ref={carouselRef}
        class="flex space-x-12 py-4 inline-flex"
        style="will-change: transform;"
      >
        {/* Tech company logos - for illustration purposes */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/1/12/Wikimedia_logo_text_RGB.svg" 
          alt="Client 1" 
          class="h-12 grayscale hover:grayscale-0 transition-all duration-300" 
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/320px-Microsoft_logo.svg.png" 
          alt="Client 2" 
          class="h-12 grayscale hover:grayscale-0 transition-all duration-300" 
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/320px-IBM_logo.svg.png" 
          alt="Client 3" 
          class="h-12 grayscale hover:grayscale-0 transition-all duration-300" 
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Maxis_Communications_logo.svg/2880px-Maxis_Communications_logo.svg.png" 
          alt="Client 4" 
          class="h-12 grayscale hover:grayscale-0 transition-all duration-300" 
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Telekom_Malaysia_logo_%282023%29.svg" 
          alt="Client 5" 
          class="h-12 grayscale hover:grayscale-0 transition-all duration-300" 
        />
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/320px-Google_2015_logo.svg.png" 
          alt="Client 6" 
          class="h-12 grayscale hover:grayscale-0 transition-all duration-300" 
        />
      </div>
    </div>
  );
} 