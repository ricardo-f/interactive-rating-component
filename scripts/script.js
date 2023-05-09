document.addEventListener("DOMContentLoaded", function () {
  const ratingButtons = document.querySelector('.rating-buttons');
  const submitButton = document.querySelector('.submit');
  const ratingCard = document.querySelector('.rating-card');
  const thanksCard = document.querySelector('.thanks-card');
  const showEval = document.querySelector('.show-eval');
  const warnMsgCard = document.querySelector('.warn-msg-card');
  const closeWrnMsg = document.querySelector('.close-wrn-msg');
  let rating

  for (let i = 1; i <= 5; i++) {
    const button = document.createElement('button');
    button.innerText = i;
    button.classList.add(`grades`);
    ratingButtons.appendChild(button);
  }

  ratingButtons.addEventListener('click', (event) => {
    if (event.target.className === 'grades') {
      rating = parseInt(event.target.innerText);
      return rating;
    }
  });

  submitButton.addEventListener('click', (event) => {
    if (!rating) {
      warnMsgCard.style.display = 'flex';
      ratingCard.style.display = 'none';
      return;
    }
    ratingCard.style.display = 'none';
    thanksCard.style.display = 'flex';
    let showEvalText = `You selected ${rating} here out of 5`;
    showEval.innerText = showEvalText;
  });

  closeWrnMsg.addEventListener('click', (event) => {
    warnMsgCard.style.display = 'none';
    ratingCard.style.display = 'flex';
  });
});
