function changeBackground() {
    var select = document.getElementById("bg-select");
    var selectedValue = select.options[select.selectedIndex].value;
    if (selectedValue === "light-blue") {
        document.body.style.backgroundImage = "url('/images/lightblue.png')";
    } else if (selectedValue === "light-gold") {
        document.body.style.backgroundImage = "url('/images/lightgold.png')";
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