// Smooth-scroll navigation
document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    this.classList.add('active');
  });
});

// Animated section reveal on scroll
const revealSections = document.querySelectorAll('.section');
function animateSections() {
  const triggerBottom = window.innerHeight * 0.9;
  revealSections.forEach(section => {
    const boxTop = section.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      section.classList.add('visible');
      // Animate child cards
      section.querySelectorAll('.fade-in, .flip-in').forEach(child => {
        setTimeout(() => child.classList.add(child.classList.contains('fade-in') ? 'fade-in' : 'flip-in'), 80);
      });
    }
  });
}
window.addEventListener('scroll', animateSections);
window.addEventListener('load', animateSections);

// Floating Back to Top button logic
const backToTopButton = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
  backToTopButton.style.display = window.scrollY > 260 ? 'block' : 'none';
});
backToTopButton.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth'});
});

// Live Year in Footer
const year = new Date().getFullYear();
document.getElementById('copyYear').textContent = year;

// Contact form animated feedback
const contactForm = document.getElementById('contactForm');
if(contactForm){
contactForm.addEventListener('submit', function(e){
  e.preventDefault();
  document.getElementById('formSuccess').style.display='block';
  document.getElementById('formSuccess').textContent = 'Message sent! We will reply soon.';
  setTimeout(() => {
    document.getElementById('formSuccess').style.display='none';
    contactForm.reset();
  }, 2600);
});
}

// Event countdown timer
const countdownEl = document.getElementById('countdown');
if(countdownEl){
  // Nov 10, 2025, 00:00:00
  const eventDate = new Date('2025-11-10T00:00:00');
  function updateCountdown() {
    const now = new Date();
    const diff = eventDate - now;
    if(diff > 0){
      const days = Math.floor(diff/(1000*60*60*24));
      const hours = Math.floor((diff/(1000*60*60))%24);
      const mins = Math.floor((diff/(1000*60))%60);
      countdownEl.textContent = `Starts in ${days} days, ${hours} hrs, ${mins} min`;
    }else{
      countdownEl.textContent = "Event Started!";
    }
  }
  setInterval(updateCountdown, 5000);
  updateCountdown();
}
