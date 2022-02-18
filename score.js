// exercise from udemy bootcamp which i did all myself using bootstrap
// instructor used bulma

const buttons = document.querySelectorAll('button');

let playerOne = 0;
let playerTwo = 0;
const score = document.querySelector('.score');
const scoreHTML = () => `<span class="p1">${playerOne}</span> to <span class="p2">${playerTwo}</span>`;
//querySelect p's doesnt work in eventListeners
//BECAUSE VARIABLE IS UPDATED AFTER EACH FUNCTION CALL AND QUERY SELECT OBJECT LOSES OBJECT POINTER?????
//this removes the necessity to reset the color when scoreHTML is called for new game

score.innerHTML = scoreHTML();

const selectMenu = document.createElement('select');
selectMenu.classList.add('btn-sm');
selectMenu.classList.add('btn-secondary');
selectMenu.classList.add('rounded');
for (i = 0; i <= 9; i++) {
    let option = document.createElement('option');
    option.innerText = i + 1
    selectMenu.append(option);
}

//updated this section after watching the instructor
const reset = () => {
    playerOne = 0;
    playerTwo = 0;
    score.innerHTML = scoreHTML();
    buttons[0].removeAttribute('disabled');
    buttons[1].removeAttribute('disabled');
}
selectMenu.addEventListener('change', reset)

const maxGame = document.querySelector('.maxGame');
maxGame.innerHTML = `Playing up to `;
maxGame.append(selectMenu);
buttons[0].addEventListener('click', () => {
    playerOne++
    score.innerHTML = scoreHTML();
    // this.setAttribute('disabled');
    if (playerOne >= selectMenu.value) {
        const p1 = document.querySelector('.p1');
        p1.classList.add('text-success');
        let inText = (p1.innerHTML + '<sup>winner</sup>');
        p1.innerHTML = inText;
        // p1.classList.add('text-success'); // doesnt work
        buttons[0].setAttribute('disabled', '');
        buttons[1].setAttribute('disabled', '');
        // better way >> buttons[0].disabled;
    }
})

buttons[1].addEventListener('click', function () {
    playerTwo++
    score.innerHTML = scoreHTML();
    if (playerTwo >= selectMenu.value) {
        const p2 = document.querySelector('.p2');
        p2.classList.add('text-success');
        let inText = (p2.innerHTML + '<sup>winner</sup>');
        p2.innerHTML = inText;
        buttons[0].setAttribute('disabled', '');
        buttons[1].setAttribute('disabled', '');
    }
})

buttons[2].addEventListener('click', function () {
    reset();
})

if (playerOne >= parseInt(selectMenu.value) || playerTwo >= parseInt(selectMenu.value)) {
    buttons[0].setAttribute('disabled', '')
    // buttons[0].setAttribute('disabled');
}