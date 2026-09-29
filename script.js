let cartCount = 0;
  const cartCountEl = document.getElementById('cartCount');
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cartCount++;
      cartCountEl.textContent = cartCount;
      btn.textContent = 'Added';
      btn.classList.add('added');
      setTimeout(() => {
        btn.textContent = 'Add to Cart';
        btn.classList.remove('added');
      }, 1200);
    });
  });

  document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    const btn = this.querySelector('.submit-btn');
    const original = btn.textContent;
    btn.textContent = 'Message Sent';
    this.reset();
    setTimeout(() => { btn.textContent = original; }, 2000);
  });
  document.getElementById('contactForm').addEventListener('submit', function(e){
  e.preventDefault();
  
  const btn = this.querySelector('.submit-btn');
  btn.textContent = 'Sending...';
  btn.style.backgroundColor = '#c9963c'; // Gold color feedback
  
  setTimeout(() => {
    alert('Thank you! Your message has been sent successfully.');
    btn.textContent = 'Send Message';
    btn.style.backgroundColor = ''; // Reset background color
    this.reset();
  }, 800);
});