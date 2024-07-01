document.addEventListener('DOMContentLoaded', function() {
    const counterElement = document.getElementById('counter');
    let currentValue = 0;

    function updateCounter() {
        counterElement.textContent = currentValue;
    }

    document.getElementById('increaseBtn').addEventListener('click', function() {
        currentValue++;
        updateCounter();
    });

    document.getElementById('resetBtn').addEventListener('click', function() {
        currentValue = 0;
        updateCounter();
    });

    document.getElementById('decreaseBtn').addEventListener('click', function() {
         if (currentValue > 0){
            currentValue--
        };
        updateCounter();
    });
});
