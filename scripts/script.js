document.addEventListener("DOMContentLoaded", function () {
  const ratingButtons = document.querySelector('.rating-buttons');
  const submitButton = document.querySelector('.submit');
  const ratingCard = document.querySelector('.rating-card');
  const thanksRating = document.querySelector('.thanks-rating');
  const showEval = document.querySelector('.show-eval');
  const flashcard = document.querySelector('.flashcard-section');
  let rating

  for (let i = 1; i <= 5; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.classList.add(`button`);
    ratingButtons.appendChild(button);
  }

  ratingButtons.addEventListener('click', (event) => {
    if (event.target.className === 'button') {
      rating = parseInt(event.target.innerText);
      console.log(rating);
      return rating;
    }
  });

  submitButton.addEventListener('click', (event) => {
    if (!rating) {
      console.log(rating)
      flashcard.style.display = 'block';
      return;
    }
    ratingCard.style.display = 'none';
    thanksRating.style.display = 'block';
    let showEvalText = `You selected ${rating} here out of 5`;
    showEval.innerText = showEvalText;
  });

  const flashcardOKButton = document.querySelector('.close-flashcard');
  flashcardOKButton.addEventListener('click', (event) => {
    flashcard.style.display = 'none';
  });
});