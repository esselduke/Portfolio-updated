// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false
  });

  // Initialize Typed.js
  const options = {
    strings: ['DUKE ESSEL'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,
    showCursor: false,
  };
  
  new Typed('.typing-text', options);
  
  // Initialize Vanilla Tilt for social icons
  VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
  });

  // Preloader Animation
  const preloader = document.querySelector('.preloader');
  setTimeout(() => {
    preloader.style.opacity = '0';
    setTimeout(() => {
      preloader.style.display = 'none';
      
      // Animate skill bars after preloader is gone
      setTimeout(() => {
        const skillBars = document.querySelectorAll('.skill-bar-animation');
        skillBars.forEach(bar => {
          const width = bar.className.includes('HTMLLoader') ? '90%' : 
                      bar.className.includes('cssLoader') ? '90%' : 
                      bar.className.includes('bootstrapLoader') ? '90%' : 
                      bar.className.includes('javascriptLoader') ? '85%' : 
                      bar.className.includes('jQueryLoader') ? '70%' : 
                      bar.className.includes('nodejsLoader') ? '50%' : '0%';
          bar.style.width = width;
        });
      }, 500);
    }, 500);
  }, 2000);
  // Particles.js initialization for background effect
  particlesJS('particles-js', {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: "#7eb5a6"
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000"
        },
      },
      opacity: {
        value: 0.5,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#7eb5a6",
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab"
        },
        onclick: {
          enable: true,
          mode: "push"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1
          }
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  });
  // Custom cursor effect
  const cursor = document.querySelector('.cursor-dot');
  const cursorOutline = document.querySelector('.cursor-dot-outline');
  
  window.addEventListener('mousemove', function(e) {
    cursor.style.opacity = '1';
    cursorOutline.style.opacity = '1';
    
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
    
    cursorOutline.style.top = e.clientY + 'px';
    cursorOutline.style.left = e.clientX + 'px';
  });
  
  window.addEventListener('mouseout', function() {
    cursor.style.opacity = '0';
    cursorOutline.style.opacity = '0';
  });
  
  // Adding cursor effects on hover for interactive elements
  const interactiveElements = document.querySelectorAll('a, button, .btnLive, .square, .input, textarea, .button');
  
  interactiveElements.forEach(el => {
    el.addEventListener('mouseover', () => {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorOutline.style.backgroundColor = 'rgba(126, 181, 166, 0.1)';
      cursor.style.transform = 'translate(-50%, -50%) scale(0.5)';
    });
    
    el.addEventListener('mouseout', () => {
      cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorOutline.style.backgroundColor = 'rgba(126, 181, 166, 0.2)';
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    });
  });

  // Scroll to top button functionality
  const scrollBtn = document.querySelector('.toTheTopBtnContainer');
  
  window.addEventListener('scroll', function() {
    if (this.scrollY > 500) {
      scrollBtn.classList.add('active');
    } else {
      scrollBtn.classList.remove('active');
    }
  });
  
  scrollBtn.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  // Sticky navigation
  const nav = document.querySelector('nav');
  
  window.addEventListener('scroll', function() {
    if (this.scrollY > 100) {
      nav.classList.add('stickyNav');
    } else {
      nav.classList.remove('stickyNav');
    }
  });

  // Active menu item on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (scrollY >= (sectionTop - 200)) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('activeNavItemsOnScroll');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('activeNavItemsOnScroll');
      }
    });
  });

  // Side menu toggle
  function toggleMenu() {
    document
      .querySelector(".hamburgerMenuMainContainer")
      .classList.toggle("click");
    document.querySelector(".sideMenu").classList.toggle("sideMenuSlide");
  }
  
  // Make toggle function available globally
  window.toggleMenu = toggleMenu;
  
  // Side menu vanish on link click
  function sideMenuVan() {
    document.querySelector(".sideMenu").classList.toggle("sideMenuSlide");
    document.querySelector(".hamburgerMenuMainContainer").classList.toggle("click");
  }
  
  // Make sideMenuVan function available globally
  window.sideMenuVan = sideMenuVan;
  // Form validation and submission
  const contactForm = document.getElementById('contact-form');
  const successMessage = document.querySelector('.success-message');
  const errorMessage = document.querySelector('.error-message');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = this.querySelector('input[type="text"]').value;
      const email = this.querySelector('input[type="email"]').value;
      const message = this.querySelector('textarea').value;
      
      if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        successMessage.style.display = 'none';
        errorMessage.style.display = 'inline-block';
        
        setTimeout(() => {
          errorMessage.style.display = 'none';
        }, 3000);
        
        return;
      }
      
      // Simulate form submission (in real world this would be AJAX)
      errorMessage.style.display = 'none';
      successMessage.style.display = 'inline-block';
      
      // Reset form
      this.reset();
      
      setTimeout(() => {
        successMessage.style.display = 'none';
      }, 3000);
    });
  }
  // Adding click handlers for project links
  document.querySelectorAll('.btnLive')[0].addEventListener('click', () => {
    window.location.href = "https://esselduke.github.io/Lessek-initial-/";
  });
  
  document.querySelectorAll('.btnLive')[1].addEventListener('click', () => {
    window.location.href = "https://esselduke.github.io/Delivery/";
  });
  
  document.querySelectorAll('.btnLive')[2].addEventListener('click', () => {
    window.location.href = "https://esselduke.github.io/Ant-Cyber-/";
  });
  
  // Social media links
  document.querySelector(".gitLogo").addEventListener("click", () => {
    window.location.href = "https://github.com/esselduke?tab=repositories";
  });
  
  document.querySelector(".linkedinLogo").addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/david-duke-essel";
  });
  
  document.querySelectorAll(".square")[3].addEventListener("click", () => {
    window.location.href = "https://twitter.com/DukeEssel_";
  });
  
  document.querySelectorAll(".square")[2].addEventListener("click", () => {
    window.location.href = "https://www.instagram.com/dukeessel_/";
  });
  
  document.querySelectorAll(".square")[1].addEventListener("click", () => {
    window.location.href = "https://www.linkedin.com/in/david-duke-essel";
  });
  
  document.querySelectorAll(".square")[0].addEventListener("click", () => {
    window.location.href = "https://github.com/esselduke?tab=repositories";
  });
  // Update copyright year automatically
  const yearSpan = document.querySelector('footer p span');
  if (yearSpan) {
    yearSpan.textContent = `©${new Date().getFullYear()}`;
  }

  // Add scroll reveal animations to various elements
  const animateElements = document.querySelectorAll('.hex, .projectContentDiv, .contactDiv');
  
  // Scroll-triggered animations for skill bars
  const animateOnScroll = () => {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      
      if (elementTop < triggerBottom) {
        element.classList.add('animated');
      }
    });
  };
  
  window.addEventListener('scroll', animateOnScroll);

  // Add loading animation for images
  const projectImages = document.querySelectorAll('.img');
  
  projectImages.forEach(img => {
    img.addEventListener('load', function() {
      this.classList.add('img-loaded');
    });
    
    // For already loaded images
    if (img.complete) {
      img.classList.add('img-loaded');
    }
  });
});