// Select the right button using querySelector
const btnRight = document.querySelector('.right-button');

// Add event listener to the button



document.addEventListener('DOMContentLoaded', () => {
    const btnLeft = document.querySelector('.left-button');
    if (btnLeft) { // Check if btnLeft is not null
        btnLeft.addEventListener('click', () => {
            window.location.href = 'leftBtn.html';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const buttonContainerLeft = document.querySelector('.styledbuttonleft');
    if (buttonContainerLeft) { // Check if the container exists before adding event listener
        buttonContainerLeft.addEventListener('click', () => {
            window.location.href = 'index.html';
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const btnright = document.querySelector('.right-button');
    if (btnright) { // Check if btnLeft is not null
        btnright.addEventListener('click', () => {
            window.location.href = 'ratting.html';
        });
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const quiz = document.querySelector('.btnPage2 button');
    if (quiz) { // Check if btnLeft is not null
        quiz.addEventListener('click', () => {
            window.location.href = 'quiz.html';
        });
    }
});