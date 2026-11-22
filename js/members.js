
const memberCards = document.querySelectorAll('.member-card');

memberCards.forEach(function(card) {
  const memberImage = card.querySelector('.member-image');

  card.addEventListener('mouseenter', function() {
    memberImage.classList.add('is-zoomed');
  });

  card.addEventListener('mouseleave', function() {
    memberImage.classList.remove('is-zoomed');
  });
});
