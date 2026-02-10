function myFunction() {
    var icon = document.getElementById('myLinks');
    if (icon.className === 'mobile-view') {
        icon.className += 'responsive';
    } else {
        icon.className = 'mobile-view';
    }
}