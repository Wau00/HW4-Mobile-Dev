function changeBackground() {
    var select = document.getElementById("bg-select");
    var selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "light-blue") {
        document.body.style.backgroundImage = "url('https://user-images.githubusercontent.com/99919050/236060952-5ac4496e-9c14-4bba-9abb-93830a08d27a.png')";
    } else if (selectedValue === "light-gold") {
        document.body.style.backgroundImage = "url('https://user-images.githubusercontent.com/99919050/236060958-d2177a46-625e-4588-9d65-b01af82a8968.png')";
    }
}


if (navigator.serviceWorker) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./service-worker.js')
            .then(registration => console.log('SW registered'))
            .catch(err => console.log(`SW not registered - Error: ${err}`))
    })
} else {
    console.log('Service Worker is not supported in this browser.')
}