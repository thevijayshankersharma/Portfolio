document.addEventListener("DOMContentLoaded", function () {
  const viewResumeBtn = document.querySelector('.btn-view');
  if (viewResumeBtn) {
    viewResumeBtn.addEventListener('click', function (event) {
      event.preventDefault();
      window.open('../assets/VijayShankerSharma_Resume.pdf', '_blank');
    });
  }

  // script.js

document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function () {
      navLinks.classList.toggle('nav-active');
  });
});


  const links = document.querySelectorAll("nav ul li a");

  for (const link of links) {
    link.addEventListener("click", smoothScroll);
  }

  setTimeout(function () {
    document.querySelectorAll(".intro-text").forEach(function (element) {
      element.style.animationPlayState = "running";
    });
  }, 500);

  function smoothScroll(event) {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50,
        behavior: "smooth",
      });
    }
  }

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 160,
        density: {
          enable: true,
          value_area: 1500,
        },
      },
      line_linked: {
        enable: false,
        opacity: 0.03,
      },
      move: {
        direction: "right",
        speed: 0.05,
      },
      size: {
        value: 1,
      },
      opacity: {
        anim: {
          enable: true,
          speed: 1,
          opacity_min: 0.05,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: false,
          mode: "repulse",
        },
        onclick: {
          enable: false,
          mode: "push",
        },
        resize: true,
      },
    },
    retina_detect: true,
  });

  // Initially set dark mode
  document.body.classList.add('dark-mode');

  // Toggle between light and dark mode
  const toggleContainer = document.querySelector('.toggle-container');
  toggleContainer.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
      activateDarkMode();
    } else {
      activateLightMode();
    }
  });

  function activateLightMode() {
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    updateTypingSvgColor('#fff'); // Update typing SVG color for light mode
}

function activateDarkMode() {
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    updateTypingSvgColor('#0e75b6'); // Update typing SVG color for dark mode
}

function updateTypingSvgColor(color) {
    const typingSvg = document.getElementById('typing-svg');
    const currentSrc = typingSvg.src;
    const newSrc = currentSrc.replace(/color=[^&]*/, `color=${color.replace('#', '')}`);
    typingSvg.src = newSrc;
}
});

function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}

// assets/js/scripts.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);

  fetch(this.action, {
      method: 'POST',
      body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message')
      }),
      headers: {
          'Content-Type': 'application/json'
      }
  })
  .then(response => response.text())
  .then(data => {
      document.getElementById('response').textContent = data;
  })
  .catch(error => {
      console.error('Error:', error);
      document.getElementById('response').textContent = 'Error sending message';
  });
});
