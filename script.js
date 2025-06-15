let p = document.getElementById('text-to-type');
let timer = document.querySelector('.timer');
let timeleft = 60;
let count;
function run() {
    clearInterval(count);
    timeleft = 60;
    timer.textContent = `Time: ${timeleft}s`;
    count = setInterval(() => {
        timeleft--;
        timer.textContent = `Time: ${timeleft}s`;
        if (timeleft <= 0) {
            clearInterval(count);
            timer.textContent = "Time's up!";
            const textarea = document.getElementById('user');
            textarea.disabled = true;
            const spans = document.querySelectorAll('#text-to-type span');
            const userTyped = textarea.value;
            let correctChars = 0;
            for (let i = 0; i < userTyped.length && i < spans.length; i++) {
                if (userTyped[i] === spans[i].textContent) {
                    correctChars++;
                }
            }
            const wpm = Math.round(correctChars / 5); // Time is 1 minute
            alert(`Time's up!\nCorrect Characters: ${correctChars}\nWPM: ${wpm}`);
        }
    }, 1000);
    const textarea = document.getElementById('user');
    textarea.disabled = false;
    textarea.value = '';
    textarea.focus();
}
const spans = document.querySelectorAll('#text-to-type span');
const userinput = document.getElementById('user');
userinput.addEventListener('input', () => {
    const value = userinput.value;
    for (let i = 0; i < spans.length; i++) {
        if (value[i] == null) {
            spans[i].classList.remove('correct', 'incorrect');
        } else if (value[i] === spans[i].textContent) {
            spans[i].classList.add('correct');
            spans[i].classList.remove('incorrect');
        } else {
            spans[i].classList.remove('correct');
            spans[i].classList.add('incorrect');
        }
    }
})