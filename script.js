let noButtonClicks = 0;

document.getElementById('noButton').addEventListener('click', function() {
    noButtonClicks++;
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');

    if (noButtonClicks < 3) {
        const currentSize = window.getComputedStyle(yesButton).fontSize;
        const newSize = parseFloat(currentSize) * 1.2;
        yesButton.style.fontSize = `${newSize}px`;
    } else {
        noButton.style.display = 'none';
        const newYesButton = document.createElement('button');
        newYesButton.id = 'yesButton2';
        newYesButton.textContent = 'TAK';
        newYesButton.style.backgroundColor = '#e91e63';
        newYesButton.style.color = 'white';
        newYesButton.style.padding = '10px 20px';
        newYesButton.style.fontSize = '1.2em';
        newYesButton.style.border = 'none';
        newYesButton.style.borderRadius = '5px';
        newYesButton.style.cursor = 'pointer';
        newYesButton.style.transition = 'all 0.3s ease';
        newYesButton.addEventListener('mouseover', function() {
            newYesButton.style.transform = 'scale(1.1)';
        });
        newYesButton.addEventListener('mouseout', function() {
            newYesButton.style.transform = 'scale(1)';
        });
        document.querySelector('.buttons').appendChild(newYesButton);
    }
});