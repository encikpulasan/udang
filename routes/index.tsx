import { Head } from "$fresh/runtime.ts";
import ContactForm from "../islands/ContactForm.tsx";
import SmoothScroll from "../islands/SmoothScroll.tsx";
import MobileMenu from "../islands/MobileMenu.tsx";
import LogoCarousel from "../islands/LogoCarousel.tsx";
import ThemeToggle from "../islands/ThemeToggle.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>SOFEHAUS - Malaysian Software House & IT Consultancy</title>
        <meta name="description" content="SOFEHAUS PLT is a Malaysian startup software house focusing on developing in-house products while also offering UI/UX design and IT development services." />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Head>
      <SmoothScroll />
      <div class="min-h-screen flex flex-col theme-transition">
        {/* Header */}
        <header class="bg-white dark:bg-sofehaus-gray-900 sticky top-0 z-50 shadow-sm dark:shadow-sofehaus-gray-800/30 theme-transition">
          <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
            <div class="flex items-center">
              <img src="/logo.png" alt="SOFEHAUS Logo" class="h-10 w-auto" />
              <span class="ml-3 text-xl font-bold text-sofehaus-dark dark:text-white">SOFEHAUS</span>
            </div>
            <div class="hidden md:flex items-center space-x-8">
              <a href="#services" class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 hover:text-sofehaus-primary dark:hover:text-sofehaus-primary">Services</a>
              <a href="#projects" class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 hover:text-sofehaus-primary dark:hover:text-sofehaus-primary">Projects</a>
              <a href="#about" class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 hover:text-sofehaus-primary dark:hover:text-sofehaus-primary">About</a>
              <a href="#contact" class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 hover:text-sofehaus-primary dark:hover:text-sofehaus-primary">Contact</a>
              <ThemeToggle />
            </div>
            <MobileMenu />
          </nav>
        </header>

        {/* Hero Section - Enhanced version */}
        <section class="relative overflow-hidden py-20 md:py-28">
          {/* Background with overlay */}
          <div class="absolute inset-0 z-0">
            <div class="absolute inset-0 bg-gradient-to-br from-sofehaus-dark via-sofehaus-primary to-sofehaus-secondary opacity-90 dark:opacity-80"></div>
            <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070')] bg-cover bg-center opacity-50 mix-blend-overlay"></div>
            {/* Animated geometric shapes */}
            <div class="absolute inset-0 overflow-hidden">
              <div class="absolute -top-20 -left-20 w-80 h-80 bg-sofehaus-secondary/30 dark:bg-sofehaus-secondary/20 rounded-full blur-3xl animate-pulse-slow"></div>
              <div class="absolute bottom-10 right-10 w-60 h-60 bg-sofehaus-primary/30 dark:bg-sofehaus-primary/20 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 1s;"></div>
              <div class="absolute top-60 right-20 w-40 h-40 bg-sofehaus-accent/30 dark:bg-sofehaus-accent/20 rounded-full blur-3xl animate-pulse-slow" style="animation-delay: 2s;"></div>
            </div>
          </div>

          <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="md:flex md:items-center md:gap-12">
              <div class="md:w-1/2 mb-12 md:mb-0 animate-slideRight">
                <div class="max-w-2xl">
                  <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                    <span class="block">Building Digital</span>
                    <span class="text-gradient">Solutions</span>
                    <span class="block">for a Better Future</span>
                  </h1>
                  
                  <p class="text-lg mb-8 text-white/90 dark:text-white/80">
                    SOFEHAUS PLT is a Malaysian startup software house focusing on developing innovative in-house products while offering comprehensive UI/UX design and IT development services.
                  </p>
                  
                  <div class="flex flex-wrap gap-4">
                    <a href="#contact" class="bg-sofehaus-accent hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 hover-lift shadow-lg shadow-sofehaus-accent/20">
                      Contact Us
                    </a>
                    <a href="#services" class="border border-white hover:bg-white hover:text-sofehaus-primary font-bold py-3 px-8 rounded-lg transition duration-300 hover-lift bg-white/10 backdrop-blur-sm text-white">
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
              
              <div class="md:w-1/2 relative animate-slideLeft">
                <div class="relative mx-auto max-w-md">
                  {/* Main image with glass effect card */}
                  <div class="glass-effect rounded-2xl shadow-2xl overflow-hidden transform rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                      src="https://images.unsplash.com/photo-1581472723648-909f4851d4ae?q=80&w=2070" 
                      alt="SOFEHAUS Innovation" 
                      class="w-full h-auto rounded-t-lg"
                    />
                    <div class="p-6 backdrop-blur-md bg-white/30 dark:bg-sofehaus-gray-900/30">
                      <h3 class="font-bold text-sofehaus-dark dark:text-white">Innovative Digital Solutions</h3>
                      <p class="text-sofehaus-gray-700 dark:text-sofehaus-gray-300 text-sm">Transforming ideas into powerful digital experiences</p>
                    </div>
                  </div>
                  
                  {/* Floating badges */}
                  <div class="absolute -top-5 -right-5 bg-sofehaus-primary text-white p-3 rounded-full shadow-lg rotate-12 hover:rotate-0 transition-transform">
                    <i class="fas fa-rocket text-xl"></i>
                  </div>
                  <div class="absolute -bottom-6 -left-6 bg-sofehaus-secondary text-white p-4 rounded-full shadow-lg rotate-12 hover:rotate-0 transition-transform">
                    <i class="fas fa-lightbulb text-xl"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats section */}
            <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div class="glass-effect rounded-xl p-4 text-center backdrop-blur-lg shadow-lg">
                <div class="text-3xl font-bold text-sofehaus-primary">10+</div>
                <div class="text-sm mt-1 text-white dark:text-white">Years Experience</div>
              </div>
              <div class="glass-effect rounded-xl p-4 text-center backdrop-blur-lg shadow-lg">
                <div class="text-3xl font-bold text-sofehaus-primary">50+</div>
                <div class="text-sm mt-1 text-white dark:text-white">Projects Completed</div>
              </div>
              <div class="glass-effect rounded-xl p-4 text-center backdrop-blur-lg shadow-lg">
                <div class="text-3xl font-bold text-sofehaus-primary">99%</div>
                <div class="text-sm mt-1 text-white dark:text-white">Client Satisfaction</div>
              </div>
              <div class="glass-effect rounded-xl p-4 text-center backdrop-blur-lg shadow-lg">
                <div class="text-3xl font-bold text-sofehaus-primary">24/7</div>
                <div class="text-sm mt-1 text-white dark:text-white">Support</div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Logo Strip */}
        <section class="py-12 bg-sofehaus-light dark:bg-sofehaus-gray-900 theme-transition">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-bold text-center text-sofehaus-dark dark:text-white mb-8">Trusted by</h2>
            <LogoCarousel />
          </div>
        </section>

        {/* Services Section */}
        <section id="services" class="py-20 bg-white dark:bg-sofehaus-gray-900/50 theme-transition">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-fadeIn">
              <h2 class="text-3xl font-bold text-sofehaus-dark dark:text-white mb-4">Our Core Services</h2>
              <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 max-w-2xl mx-auto">We offer a comprehensive range of IT services to help your business grow and transform digitally.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div class="bg-sofehaus-light dark:bg-sofehaus-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-slideUp hover-lift dark:border dark:border-sofehaus-gray-700">
                <div class="w-12 h-12 bg-sofehaus-primary rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-paint-brush text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">UI/UX Design</h3>
                <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300">Creating intuitive, user-friendly interfaces that enhance user experience and drive engagement.</p>
              </div>
              <div class="bg-sofehaus-light dark:bg-sofehaus-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-slideUp hover-lift dark:border dark:border-sofehaus-gray-700" style="animation-delay: 100ms">
                <div class="w-12 h-12 bg-sofehaus-primary rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-mobile-alt text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">App Development</h3>
                <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300">Building high-performance mobile applications for iOS and Android platforms.</p>
              </div>
              <div class="bg-sofehaus-light dark:bg-sofehaus-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-slideUp hover-lift dark:border dark:border-sofehaus-gray-700" style="animation-delay: 200ms">
                <div class="w-12 h-12 bg-sofehaus-primary rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-laptop-code text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">Web Development</h3>
                <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300">Crafting responsive, modern websites and web applications tailored to your business needs.</p>
              </div>
              <div class="bg-sofehaus-light dark:bg-sofehaus-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-slideUp hover-lift dark:border dark:border-sofehaus-gray-700" style="animation-delay: 300ms">
                <div class="w-12 h-12 bg-sofehaus-primary rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-database text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">Database Migration</h3>
                <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300">Seamlessly transferring your data to modern, efficient database systems with minimal downtime.</p>
              </div>
              <div class="bg-sofehaus-light dark:bg-sofehaus-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-slideUp hover-lift dark:border dark:border-sofehaus-gray-700" style="animation-delay: 400ms">
                <div class="w-12 h-12 bg-sofehaus-primary rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-chalkboard-teacher text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">Training & Mentoring</h3>
                <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300">Empowering your team with the knowledge and skills needed to succeed in the digital landscape.</p>
              </div>
              <div class="bg-sofehaus-light dark:bg-sofehaus-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-slideUp hover-lift dark:border dark:border-sofehaus-gray-700" style="animation-delay: 500ms">
                <div class="w-12 h-12 bg-sofehaus-primary rounded-full flex items-center justify-center mb-4">
                  <i class="fas fa-hands-helping text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">Project Collaboration</h3>
                <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300">Working together with your team to bring innovative ideas to life through effective collaboration.</p>
              </div>
              <div class="bg-sofehaus-light dark:bg-sofehaus-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 animate-slideUp hover-lift dark:border dark:border-sofehaus-gray-700" style="animation-delay: 500ms">
                <div class="w-12 h-12 bg-sofehaus-primary rounded-full flex items-center justify-center mb-4">
                <i class="fas fa-lightbulb text-white text-xl"></i>
                </div>
                <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">Technology Consultationn</h3>
                <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300">Providing expert advice on the best technology solutions to help your business thrive.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" class="py-20 bg-sofehaus-light dark:bg-sofehaus-gray-800 theme-transition">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-fadeIn">
              <h2 class="text-3xl font-bold text-sofehaus-dark dark:text-white mb-4">Our Projects</h2>
              <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 max-w-2xl mx-auto">Discover our innovative in-house products and ongoing development projects.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div class="bg-white dark:bg-sofehaus-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 animate-slideRight hover-lift">
                <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=2069" alt="Antara Project" class="w-full h-48 object-cover" />
                <div class="p-6">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white">Antara</h3>
                    <span class="bg-sofehaus-primary text-white text-xs px-3 py-1 rounded-full">In Development</span>
                  </div>
                  <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 mb-4">Learning and Career Path Building Platform powered by Crowdsourcing - A revolutionary approach to education and professional development.</p>
                  <a href="#" class="text-sofehaus-primary hover:underline font-medium flex items-center">
                    Learn more <i class="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
              <div class="bg-white dark:bg-sofehaus-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300 animate-slideLeft hover-lift">
                <img src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2070" alt="Atap Project" class="w-full h-48 object-cover" />
                <div class="p-6">
                  <div class="flex justify-between items-center mb-4">
                    <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white">Atap</h3>
                    <span class="bg-sofehaus-secondary text-white text-xs px-3 py-1 rounded-full">Testing Phase</span>
                  </div>
                  <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 mb-4">Consolidated Charity Platform Advisor - Connecting donors with charitable organizations through a streamlined, transparent platform.</p>
                  <a href="#" class="text-sofehaus-primary hover:underline font-medium flex items-center">
                    Learn more <i class="fas fa-arrow-right ml-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Involvement */}
        <section id="about" class="py-20 bg-white dark:bg-sofehaus-gray-900/50 theme-transition">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-fadeIn">
              <h2 class="text-3xl font-bold text-sofehaus-dark dark:text-white mb-4">Community Involvement</h2>
              <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 max-w-2xl mx-auto">We're proud to contribute to the education and development of the next generation of IT professionals.</p>
            </div>
            <div class="bg-sofehaus-light dark:bg-sofehaus-gray-800 p-8 rounded-lg shadow-md animate-slideUp">
              <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-sofehaus-primary text-white mb-4">
                    <i class="fas fa-user-tie text-2xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">Academic Advisor</h3>
                  <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 mb-3">Kolej Komuniti Ampang, Kuala Lumpur</p>
                  <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 text-sm">Providing expert guidance on curriculum development and industry-relevant skills for future IT professionals.</p>
                </div>
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-sofehaus-primary text-white mb-4">
                    <i class="fas fa-users-cog text-2xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">Industry Advisory Committee</h3>
                  <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 mb-3">Kolej Komuniti Ampang, Kuala Lumpur</p>
                  <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 text-sm">Bridging the gap between academic education and industry requirements through strategic recommendations.</p>
                </div>
                <div class="flex flex-col items-center text-center">
                  <div class="w-16 h-16 rounded-full flex items-center justify-center bg-sofehaus-primary text-white mb-4">
                    <i class="fas fa-graduation-cap text-2xl"></i>
                  </div>
                  <h3 class="text-xl font-bold text-sofehaus-dark dark:text-white mb-2">Industry Advisory Committee</h3>
                  <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 mb-3">Politeknik Sultan Abdul Halim Mu'adzam Shah, Kedah</p>
                  <p class="text-sofehaus-gray-600 dark:text-sofehaus-gray-300 text-sm">Collaborating with polytechnic education to enhance student learning and prepare graduates for the evolving tech industry.</p>
                </div>
              </div>
              <div class="mt-12 text-center">
                <div class="inline-block bg-sofehaus-primary bg-opacity-10 text-sofehaus-primary px-4 py-2 rounded-lg font-medium">
                  HRDCorp Certified Training Center (In Process)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" class="py-20 bg-sofehaus-dark text-white theme-transition">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 animate-fadeIn">
              <h2 class="text-3xl font-bold mb-4">Get In Touch</h2>
              <p class="text-sofehaus-gray-300 max-w-2xl mx-auto">Have a project in mind or want to learn more about our services? Contact us today.</p>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div class="animate-slideRight">
                <ContactForm />
              </div>
              <div class="animate-slideLeft">
                <div class="bg-sofehaus-gray-800 p-6 rounded-lg">
                  <h3 class="text-xl font-bold mb-6">Contact Information</h3>
                  <div class="space-y-4">
                    <div class="flex items-start">
                      <div class="flex-shrink-0 w-10 h-10 bg-sofehaus-primary rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-envelope text-white"></i>
                      </div>
                      <div>
                        <p class="text-sm text-sofehaus-gray-400">Email</p>
                        <a href="mailto:info@sofehaus.com" class="text-white hover:text-sofehaus-accent">info@sofehaus.com</a>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex-shrink-0 w-10 h-10 bg-sofehaus-primary rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-map-marker-alt text-white"></i>
                      </div>
                      <div>
                        <p class="text-sm text-sofehaus-gray-400">Location</p>
                        <p class="text-white">Nilai, Negeri Sembilan, Malaysia</p>
                      </div>
                    </div>
                    <div class="flex items-start">
                      <div class="flex-shrink-0 w-10 h-10 bg-sofehaus-primary rounded-full flex items-center justify-center mr-4">
                        <i class="fas fa-clock text-white"></i>
                      </div>
                      <div>
                        <p class="text-sm text-sofehaus-gray-400">Operating Hours</p>
                        <p class="text-white">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      </div>
                    </div>
                  </div>
                  <div class="mt-8">
                    <h3 class="text-xl font-bold mb-4">Follow Us</h3>
                    <div class="flex space-x-4">
                      <a href="#" class="w-10 h-10 bg-sofehaus-gray-700 rounded-full flex items-center justify-center hover:bg-sofehaus-primary transition duration-300">
                        <i class="fab fa-linkedin-in text-white"></i>
                      </a>
                      <a href="#" class="w-10 h-10 bg-sofehaus-gray-700 rounded-full flex items-center justify-center hover:bg-sofehaus-primary transition duration-300">
                        <i class="fab fa-twitter text-white"></i>
                      </a>
                      <a href="#" class="w-10 h-10 bg-sofehaus-gray-700 rounded-full flex items-center justify-center hover:bg-sofehaus-primary transition duration-300">
                        <i class="fab fa-facebook-f text-white"></i>
                      </a>
                      <a href="#" class="w-10 h-10 bg-sofehaus-gray-700 rounded-full flex items-center justify-center hover:bg-sofehaus-primary transition duration-300">
                        <i class="fab fa-instagram text-white"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer class="bg-sofehaus-dark text-white py-12 border-t border-sofehaus-gray-800 theme-transition">
          <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col md:flex-row justify-between mb-8">
              <div class="mb-8 md:mb-0">
                <div class="flex items-center mb-4">
                  <img src="/logo.png" alt="SOFEHAUS Logo" class="h-8 w-auto" />
                  <span class="ml-3 text-lg font-bold">SOFEHAUS</span>
                </div>
                <p class="text-sofehaus-gray-400 max-w-md">SOFEHAUS PLT is a Malaysian startup software house focusing on developing in-house products while also offering UI/UX design and IT development services.</p>
              </div>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
                <div>
                  <h3 class="text-lg font-bold mb-4">Quick Links</h3>
                  <ul class="space-y-2">
                    <li><a href="#" class="text-sofehaus-gray-400 hover:text-white">Home</a></li>
                    <li><a href="#services" class="text-sofehaus-gray-400 hover:text-white">Services</a></li>
                    <li><a href="#projects" class="text-sofehaus-gray-400 hover:text-white">Projects</a></li>
                    <li><a href="#about" class="text-sofehaus-gray-400 hover:text-white">About</a></li>
                    <li><a href="#contact" class="text-sofehaus-gray-400 hover:text-white">Contact</a></li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-4">Services</h3>
                  <ul class="space-y-2">
                    <li><a href="#services" class="text-sofehaus-gray-400 hover:text-white">UI/UX Design</a></li>
                    <li><a href="#services" class="text-sofehaus-gray-400 hover:text-white">App Development</a></li>
                    <li><a href="#services" class="text-sofehaus-gray-400 hover:text-white">Web Development</a></li>
                    <li><a href="#services" class="text-sofehaus-gray-400 hover:text-white">Database Migration</a></li>
                    <li><a href="#services" class="text-sofehaus-gray-400 hover:text-white">Training & Mentoring</a></li>
                  </ul>
                </div>
                <div>
                  <h3 class="text-lg font-bold mb-4">Legal</h3>
                  <ul class="space-y-2">
                    <li><a href="#" class="text-sofehaus-gray-400 hover:text-white">Privacy Policy</a></li>
                    <li><a href="#" class="text-sofehaus-gray-400 hover:text-white">Terms of Service</a></li>
                    <li><a href="#" class="text-sofehaus-gray-400 hover:text-white">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="pt-8 border-t border-sofehaus-gray-800 flex flex-col md:flex-row justify-between items-center">
              <p class="text-sofehaus-gray-400">© {new Date().getFullYear()} SOFEHAUS PLT. All rights reserved.</p>
              <p class="text-sofehaus-gray-400 mt-4 md:mt-0">Designed with ❤️ in Malaysia</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
