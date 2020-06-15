let userNum = document.querySelector('#userNum');
const correct = document.querySelector('#correct');
const wrong = document.querySelector('#wrong');
let count = 1;
let correctAnswer = Math.round(Math.random() * 4);
console.log(correctAnswer)

userNum.addEventListener('click', () => {
    userNum.value = '';
});

userNum.addEventListener('change', () => {
    console.log(correctAnswer)
    let value = parseInt(userNum.value);

    if (value === correctAnswer) {

        wrong.classList.remove('shown');
        correct.classList.add('shown');
        correct.innerHTML = `you won! it took you only ${count} tries <br/> The game will restart in 4 secound`;
        count = 1;
        setTimeout(() => { location.reload() }, 5000);
    } else {
        correct.classList.remove('shown');
        wrong.classList.add('shown');
        count += 1;
        userNum.value = '';
    }
    console.log(count);

});