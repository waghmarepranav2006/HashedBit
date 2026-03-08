function swapTheme() {
    const appDiv = document.getElementById('app');
    const swapBtn = document.getElementById('swap');

    if (appDiv.className === 'day') {
        appDiv.className = 'night';
        swapBtn.className = 'button_night';
    } else {
        appDiv.className = 'day';
        swapBtn.className = 'button_day';
    }
}