//  Heart favorites..

const heartFavorites = document.querySelectorAll('.js-card__heart').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('active');
    item.classList.toggle('far');
    item.classList.toggle('fas');
  })
})


