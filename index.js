// Wait until DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 1000,
    once: false,
    mirror: false,
    offset: 100
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

  // Handle resume button interaction
  const resumeLink = document.getElementById('resumeLink');
  const downloadArrow = document.getElementById('downloadArrow');
  const downloadResumeBtn = document.getElementById('downloadResumeBtn');

  if (resumeLink && downloadArrow) {
    resumeLink.addEventListener('click', function(e) {
      e.preventDefault();
      downloadArrow.classList.add('active');
      
      // Scroll to the download button
      downloadResumeBtn.scrollIntoView({ behavior: 'smooth' });
      
      // Highlight the button
      downloadResumeBtn.querySelector('.button').classList.add('pulse-animation');
      
      // Remove the arrow and animation after 3 seconds
      setTimeout(() => {
        downloadArrow.classList.remove('active');
        downloadResumeBtn.querySelector('.button').classList.remove('pulse-animation');
      }, 3000);
    });
  }
  
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
  
  if (cursor && cursorOutline) {
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
    const interactiveElements = document.querySelectorAll('a, button, .btnLive, .square, .input, textarea, .button, .tech-tag, .view-more-btn');
    
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
  }

  // Scroll to top button functionality
  const scrollBtn = document.querySelector('.toTheTopBtnContainer');
  
  if (scrollBtn) {
    window.addEventListener('scroll', function() {
      if (this.scrollY > 300) {
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
  }

  // Sticky navigation
  const nav = document.querySelector('nav');
  
  if (nav) {
    window.addEventListener('scroll', function() {
      if (this.scrollY > 100) {
        nav.classList.add('stickyNav');
      } else {
        nav.classList.remove('stickyNav');
      }
    });
  }

  // Active menu item on scroll
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.a');
  
  if (sections.length && navLinks.length) {
    window.addEventListener('scroll', () => {
      let current = '';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
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
  }

  // Mobile menu toggle
  const menuOpenBtn = document.getElementById('menuOpenBtn');
  const menuCloseBtn = document.getElementById('menuCloseBtn');
  const sideMenu = document.querySelector('.sideMenu');
  
  // Simple toggle menu function
  function toggleSideMenu() {
    // Toggle the hamburger icon
    if (menuOpenBtn) menuOpenBtn.classList.toggle('click');
    if (menuCloseBtn) menuCloseBtn.classList.toggle('click');
    
    // Toggle the side menu
    if (sideMenu) sideMenu.classList.toggle('sideMenuSlide');
    
    // Toggle body scrolling
    if (sideMenu && sideMenu.classList.contains('sideMenuSlide')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }
  
  // Add click event to menu buttons
  if (menuOpenBtn) {
    menuOpenBtn.addEventListener('click', toggleSideMenu);
  }
  
  if (menuCloseBtn) {
    menuCloseBtn.addEventListener('click', toggleSideMenu);
  }
  
  // Handle navigation links
  const navMenuLinks = document.querySelectorAll('[data-nav]');
  
  navMenuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // If side menu is open, close it
      if (sideMenu && sideMenu.classList.contains('sideMenuSlide')) {
        toggleSideMenu();
      }
      
      // Get target section
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      // Smooth scroll to section
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

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
  const projectButtons = document.querySelectorAll('.btnLive');
  projectButtons.forEach(button => {
    button.addEventListener('click', () => {
      const url = button.getAttribute('data-href');
      if (url) {
        window.open(url, '_blank');
      }
    });
  });
  
  // Update copyright year automatically
  const yearSpan = document.getElementById('currentYear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // Animate skills when they come into view
  function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      if (bar.classList.contains('HTMLLoader')) {
        bar.style.width = '90%';
      } else if (bar.classList.contains('cssLoader')) {
        bar.style.width = '90%';
      } else if (bar.classList.contains('bootstrapLoader')) {
        bar.style.width = '90%';
      } else if (bar.classList.contains('javascriptLoader')) {
        bar.style.width = '85%';
      } else if (bar.classList.contains('jQueryLoader')) {
        bar.style.width = '70%';
      } else if (bar.classList.contains('nodejsLoader')) {
        bar.style.width = '50%';
      }
    });
  }
  
  function checkSkillsVisibility() {
    const skillSection = document.getElementById('skillSection');
    if (!skillSection) return;
    
    const sectionPosition = skillSection.getBoundingClientRect();
    const screenPosition = window.innerHeight / 1.3;
    
    if (sectionPosition.top < screenPosition) {
      animateSkillBars();
      window.removeEventListener('scroll', checkSkillsVisibility);
    }
  }
  
  window.addEventListener('scroll', checkSkillsVisibility);
  
  // Initialize skill bars
  const skillBars = document.querySelectorAll('.skill-bar');
  skillBars.forEach(bar => {
    bar.style.width = '0';
  });
  
  // Check visibility on load
  setTimeout(checkSkillsVisibility, 500);
  
  // Initialize percentage displays
  document.querySelectorAll('.skill-bar').forEach(bar => {
    const percentClass = Array.from(bar.classList)
      .find(className => className.includes('Loader'));
      
    if (percentClass) {
      const percentElement = bar.querySelector('.progress-percent');
      if (percentElement) {
        let percent = '0%';
        
        if (percentClass === 'HTMLLoader' || percentClass === 'cssLoader' || percentClass === 'bootstrapLoader') {
          percent = '90%';
        } else if (percentClass === 'javascriptLoader') {
          percent = '85%';
        } else if (percentClass === 'jQueryLoader') {
          percent = '70%';
        } else if (percentClass === 'nodejsLoader') {
          percent = '50%';
        }
        
        percentElement.textContent = percent;
      }
    }
  });
  
  // Enhanced project card hover effects
  document.querySelectorAll('.projectContentDiv').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.classList.add('card-focus');
      const siblings = Array.from(this.parentNode.children).filter(elem => elem !== this);
      siblings.forEach(sibling => {
        sibling.classList.add('card-neighbor');
      });
    });
    
    card.addEventListener('mouseleave', function() {
      this.classList.remove('card-focus');
      const siblings = Array.from(this.parentNode.children);
      siblings.forEach(sibling => {
        sibling.classList.remove('card-neighbor');
      });
    });
  });
  
  // Disable parallax effect on mobile
  if (document.getElementById('particles-js') && window.innerWidth > 768) {
    window.addEventListener('mousemove', function(e) {
      const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
      const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
      
      const particles = document.getElementById('particles-js');
      particles.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .pulse-animation {
    animation: buttonPulse 1.5s infinite;
  }
  
  .card-focus {
    z-index: 5;
  }
  
  .card-neighbor {
    transform: scale(0.98) translateY(-5px);
    opacity: 0.8;
  }
  
  @keyframes buttonPulse {
    0% { box-shadow: 0 0 0 0 rgba(126, 181, 166, 0.7); }
    70% { box-shadow: 0 0 0 15px rgba(126, 181, 166, 0); }
    100% { box-shadow: 0 0 0 0 rgba(126, 181, 166, 0); }
  }
`;

document.head.appendChild(style);