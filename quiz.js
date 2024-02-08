// array of  correct answers, form and display result

const correctAnswers = ['B', 'A', 'B', 'B', 'B', 'B', 'A', 'A', 'A', 'A']
const form = document.querySelector('form')
const displayResult = document.querySelector('.result')
const span = document.querySelector('span');
const resetGame =document.querySelector('button')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    scrollTo(0, 0)
    let score = 0;

    // array of selected answers
    const userAnswers = [form.Q1.value, form.Q2.value, form.Q3.value, form.Q4.value, form.Q5.value, form.Q6.value, form.Q7.value, form.Q8.value, form.Q9.value, form.Q10.value,]


    // iterating over the userAnswers 

    userAnswers.forEach((answer, index) => {
        if (answer === correctAnswers[index]) {
            score += 10;
        }
    })
    console.log(score);
    displayResult.classList.remove('d-none')
    // span.textContent=score

    resetGame.addEventListener('click', (e)=>{
        form.reset()
        displayResult.classList.add('d-none')
    })

    let animatedScore = 0;

    const timer = setInterval(() => {
        span.textContent =`${animatedScore}%`
        if (animatedScore === score) {
            clearInterval(timer)
        } else {

            animatedScore += 1

        }
    }, 10);

})
