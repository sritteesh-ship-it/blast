/**
 * TechNova Dynamic Application Client Logic
 * Vanilla JavaScript (HTML5/CSS3 Compliant Context)
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. Sticky Navigation & Responsive Scroll Tracking
  // ==========================================================================
  const header = document.getElementById('main-header');
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section');

  const handleHeaderSticky = () => {
    if (window.scrollY > 30) {
      header.classList.add('sticky');
    } else {
      header.classList.remove('sticky');
    }
  };

  // Run immediately to capture initial loaded position, then add scroll listener
  handleHeaderSticky();
  window.addEventListener('scroll', handleHeaderSticky);


  // ==========================================================================
  // 2. Active Section Navigation Indicator (IntersectionObserver)
  // ==========================================================================
  const navObserverOptions = {
    root: null,
    rootMargin: '-30% 0px -60% 0px', // Narrow vertical sweep to register precise focus
    threshold: 0
  };

  const navObserverCallback = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        // Remove active class from all links
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  const navObserver = new IntersectionObserver(navObserverCallback, navObserverOptions);
  sections.forEach(section => navObserver.observe(section));


  // ==========================================================================
  // 3. Mobile Hamburger Menu & Overlay Actions
  // ==========================================================================
  const menuToggle = document.getElementById('menu-toggle');
  const mobileOverlay = document.getElementById('mobile-menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileCta = document.getElementById('mob-btn-cta');

  const toggleMobileMenu = () => {
    const isOpened = menuToggle.classList.contains('open');
    if (isOpened) {
      // Close Menu
      menuToggle.classList.remove('open');
      mobileOverlay.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
      document.body.style.overflow = ''; // Unlock background scrolling
    } else {
      // Open Menu
      menuToggle.classList.add('open');
      mobileOverlay.classList.add('open');
      menuToggle.setAttribute('aria-expanded', 'true');
      document.body.style.overflow = 'hidden'; // Lock background scrolling
    }
  };

  menuToggle.addEventListener('click', toggleMobileMenu);

  // Close Mobile Drawer on Link clicking or CTA clicking
  const closeMobileMenu = () => {
    menuToggle.classList.remove('open');
    mobileOverlay.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  mobileLinks.forEach(link => link.addEventListener('click', closeMobileMenu));
  mobileCta.addEventListener('click', closeMobileMenu);


  // ==========================================================================
  // 4. Smooth Scrolling Reveal Entrance Animation Trigger
  // ==========================================================================
  const revealElements = document.querySelectorAll('.scrolling-reveal');

  const revealObserverOptions = {
    root: null,
    rootMargin: '0px 0px -10% 0px', // Trigger slightly before element enters viewport completely
    threshold: 0.15
  };

  const revealObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        // Unobserve to run animation only once during user session
        observer.unobserve(entry.target);
      }
    });
  };

  const revealObserver = new IntersectionObserver(revealObserverCallback, revealObserverOptions);
  revealElements.forEach(el => revealObserver.observe(el));


  // ==========================================================================
  // 5. Intelligent Metric Counter Animation Logic
  // ==========================================================================
  const statsSection = document.getElementById('about');
  const statNumbers = document.querySelectorAll('.stat-number');
  let countersAnimated = false;

  const countUp = (element) => {
    const targetString = element.getAttribute('data-target');
    const target = parseFloat(targetString);
    const duration = 2000; // Animation runs for exactly 2 seconds
    const startTime = performance.now();
    const isFloat = targetString.includes('.');

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function - easeOutQuad
      const easeProgress = progress * (2 - progress);
      const currentValue = easeProgress * target;

      if (isFloat) {
        element.textContent = currentValue.toFixed(1) + '%';
      } else {
        // Appends specific suffix based on element targets
        const roundedVal = Math.floor(currentValue);
        if (target === 15) {
          element.textContent = roundedVal + 'M';
        } else if (target === 250) {
          element.textContent = roundedVal + '+';
        } else if (target === 24) {
          element.textContent = roundedVal + '/7';
        } else {
          element.textContent = roundedVal;
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Hard assert real final metric display with correct notation
        if (isFloat) {
          element.textContent = targetString + '%';
        } else {
          if (target === 15) element.textContent = '15M';
          else if (target === 250) element.textContent = '250+';
          else if (target === 24) element.textContent = '24/7';
          else element.textContent = targetString;
        }
      }
    };

    requestAnimationFrame(animate);
  };

  const statsObserverOptions = {
    root: null,
    threshold: 0.3 // Trigger when 30% of About section is visible
  };

  const statsObserverCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !countersAnimated) {
        countersAnimated = true;
        statNumbers.forEach(stat => countUp(stat));
        observer.unobserve(entry.target);
      }
    });
  };

  const statsObserver = new IntersectionObserver(statsObserverCallback, statsObserverOptions);
  if (statsSection) {
    statsObserver.observe(statsSection);
  }


  // ==========================================================================
  // 6. Interactive Form Intercept, Validation & Dynamic Alerts
  // ==========================================================================
  const contactForm = document.getElementById('tech-contact-form');
  const submitBtn = document.getElementById('form-submit-btn');
  const btnText = submitBtn.querySelector('.btn-text');
  const successAlert = document.getElementById('submit-success-alert');
  const errorAlert = document.getElementById('submit-error-alert');

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Hide any existing messages
    successAlert.style.display = 'none';
    errorAlert.style.display = 'none';

    // Toggle button to loading state
    submitBtn.disabled = true;
    const oldBtnText = btnText.textContent;
    btnText.textContent = 'Transmitting Signatures...';

    // Instantiate simple inputs extraction
    const formData = {
      name: document.getElementById('usr-name').value.trim(),
      email: document.getElementById('usr-email').value.trim(),
      subject: document.getElementById('usr-subject').value.trim(),
      message: document.getElementById('usr-msg').value.trim()
    };

    // Client-side local sanitation validation check
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      setTimeout(() => {
        errorAlert.style.display = 'flex';
        submitBtn.disabled = false;
        btnText.textContent = oldBtnText;
      }, 600);
      return;
    }

    // Simulate reliable network request
    setTimeout(() => {
      // Clear inputs
      contactForm.reset();

      // Trigger success notification
      successAlert.style.display = 'flex';
      submitBtn.disabled = false;
      btnText.textContent = oldBtnText;

      // Scroll elegantly to the notification toast inside contact container
      successAlert.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      // Auto-fade success alert after 8 seconds
      setTimeout(() => {
        successAlert.style.transition = 'opacity 0.8s ease';
        successAlert.style.opacity = '0';
        setTimeout(() => {
          successAlert.style.display = 'none';
          successAlert.style.opacity = '1';
          successAlert.style.transition = '';
        }, 800);
      }, 8000);

    }, 1500); // 1.5s simulated network delay
  });

});
