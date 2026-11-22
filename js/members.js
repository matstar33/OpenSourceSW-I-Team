const memberCards = document.querySelectorAll('.member-card');

memberCards.forEach(function(card) {
  const memberImage = card.querySelector('.member-image img');

  if (memberImage) {
    memberImage.addEventListener('error', function() {
      memberImage.style.display = 'none';
    });

    if (memberImage.complete && memberImage.naturalWidth === 0) {
      memberImage.style.display = 'none';
    }
  }

  card.addEventListener('mouseenter', function() {
    if (memberImage) {
      memberImage.classList.add('is-zoomed');
    }
  });

  card.addEventListener('mouseleave', function() {
    if (memberImage) {
      memberImage.classList.remove('is-zoomed');
    }
  });
});