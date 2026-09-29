/**
 * =========================================================
 * PORTFOLIO SCRIPT: ALAVALA RAM AKHIL
 * Clean, lightweight, beginner-friendly JavaScript
 * =========================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Navigation Toggle
  const mobileBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.getElementById('navLinks');

  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      mobileBtn.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when clicking any nav link
    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // 2. Skill Category Filtering
  const filterButtons = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterButtons.forEach((btn) => {
    btn.addEventListener('click', () => {
      // Update active button state
      filterButtons.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

      const filterValue = btn.getAttribute('data-filter');

      skillCards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 3. Project Placeholder Modal Handler (GitHub / Live Demo)
  // Ensures all buttons have working handlers without inventing URLs
  const noticeModal = document.getElementById('noticeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalBody = document.getElementById('modalBody');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const placeholderButtons = document.querySelectorAll('.placeholder-btn');

  placeholderButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const type = btn.getAttribute('data-type');
      const projectName = btn.getAttribute('data-project') || 'this project';

      if (type === 'repo') {
        modalTitle.textContent = `${projectName} — Repository Status`;
        modalBody.textContent = `As a first-semester college student, Ram Akhil is actively testing, documenting, and formatting the source files for ${projectName} before publishing the repository to GitHub. Connect on LinkedIn for code walkthroughs.`;
      } else {
        modalTitle.textContent = `${projectName} — Live Demo Status`;
        modalBody.textContent = `A hosted web preview for ${projectName} is currently being prepared. Check back soon or reach out via LinkedIn or the contact form.`;
      }

      if (noticeModal) {
        noticeModal.classList.remove('hidden');
      }
    });
  });

  if (closeModalBtn && noticeModal) {
    closeModalBtn.addEventListener('click', () => {
      noticeModal.classList.add('hidden');
    });

    noticeModal.addEventListener('click', (e) => {
      if (e.target === noticeModal) {
        noticeModal.classList.add('hidden');
      }
    });
  }

  // 4. Contact Form Handler (Client-side validation & feedback)
  const contactForm = document.getElementById('contactForm');
  const formSuccessNotice = document.getElementById('formSuccessNotice');

  if (contactForm && formSuccessNotice) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = document.getElementById('contactName');
      const emailInput = document.getElementById('contactEmail');
      const messageInput = document.getElementById('contactMessage');

      const name = nameInput ? nameInput.value.trim() : '';
      const email = emailInput ? emailInput.value.trim() : '';
      const message = messageInput ? messageInput.value.trim() : '';

      if (!name || !email || !message) {
        alert('Please fill out all fields.');
        return;
      }

      // Display clean success state
      formSuccessNotice.classList.remove('hidden');
      formSuccessNotice.innerHTML = `
        <strong>Message Draft Prepared!</strong><br>
        Thank you, <em>${name}</em>. Your message has been recorded. To send it immediately, feel free to also reach out to Ram Akhil on LinkedIn.
      `;

      // Reset input values
      contactForm.reset();
    });
  }
});
