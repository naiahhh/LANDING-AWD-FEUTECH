const button = document.querySelector('button');
const element = document.querySelector('.resume');

button.addEventListener('click', () => {
    const colors = ['darkgreen', 'blue', 'red', 'orange', '#FFD700', '#DB7093']; 
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    if (element.style.backgroundColor === randomColor) {
        element.style.color = '';
        element.style.backgroundColor = '';
        element.style.boxShadow = '';
        document.querySelector('hr').style.borderColor = '';
        document.querySelector('body').style.backgroundColor = '';
        button.style.backgroundColor = ''; 
    } else {
        element.style.color = 'white';
        element.style.backgroundColor = randomColor;
        element.style.boxShadow = `0 0 100px ${randomColor}`;
        document.querySelector('hr').style.borderColor = 'white';
        document.querySelector('body').style.backgroundColor = '#252526';
        button.style.backgroundColor = randomColor; 
    }
    element.style.transition = 'all 0.3s ease-in-out';
    document.querySelector('hr').style.transition = 'border-color 0.3s ease-in-out';
    document.querySelector('body').style.transition = 'background-color 0.3s ease-in-out';
});

