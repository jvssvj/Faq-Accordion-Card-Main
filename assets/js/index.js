const questions = document.querySelectorAll('.div_questions');

questions.forEach((question, index) => {
  const questionText = question.querySelector('p');
  const arrowIcon = question.querySelector('.question_flex img');
  const title = question.querySelector('h1, h2, h3, h4, h5');

  if(index === 1) {
    questionText.style.display = 'block';
    arrowIcon.classList.toggle('rotate');
    title.classList.toggle('bold')
  }

  question.addEventListener('click', () => {
    questions.forEach(q => {
      const p = q.querySelector('p');
      const arrow = q.querySelector('.question_flex img');
      const title = q.querySelector('h1, h2, h3, h4, h5');

      if (p !== questionText && p.style.display === 'block') {
        p.style.display = 'none';
        arrow.classList.remove('rotate');
        title.classList.remove('bold');
      }
    });

    if (questionText.style.display === 'none' || questionText.style.display === '') {
      questionText.style.display = 'block';
      arrowIcon.classList.add('rotate');
      const title = question.querySelector('h1, h2, h3, h4, h5');
      title.classList.add('bold');
    } else {
      questionText.style.display = 'none';
      arrowIcon.classList.remove('rotate');
      const title = question.querySelector('h1, h2, h3, h4, h5');
      title.classList.remove('bold');
    }
  });
});
