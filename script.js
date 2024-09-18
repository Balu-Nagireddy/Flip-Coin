document.getElementById('flipButton').addEventListener('click', function() {
    const coin = document.getElementById('coin');
    const resultDisplay = document.getElementById('result');
    const historyList = document.getElementById('historyList');
    const flipSound = document.getElementById('flipSound');

    // Play flip sound
    flipSound.play();

    // Remove previous classes if any
    coin.className = '';
    // Add the flip animation class
    setTimeout(() => { coin.classList.add('flip'); }, 100);

    // Determine the result randomly
    let result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    
    // Set a timeout to match the end of the animation
    setTimeout(() => {
        if (result === 'Heads') {
            coin.innerHTML = '<div class="heads"><img src="heads.png" alt="Heads"></div>';
        } else {
            coin.innerHTML = '<div class="tails"><img src="tails.png" alt="Tails"></div>';
        }
        resultDisplay.textContent = 'Result: ' + result;
        
        // Add to history
        let newItem = document.createElement('li');
        newItem.textContent = 'Flip ' + (historyList.children.length + 1) + ': ' + result;
        historyList.appendChild(newItem);

    }, 2000); // This timeout duration should match the flip animation duration
});

document.getElementById('resetButton').addEventListener('click', function() {
    document.getElementById('historyList').innerHTML = '';
    document.getElementById('result').textContent = '';
    document.getElementById('coin').innerHTML = '<div class="heads"><img src="heads.png" alt="Heads"></div>'; // Reset to heads
});
