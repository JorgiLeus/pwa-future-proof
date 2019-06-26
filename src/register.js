const register = (swUrl, config) => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/pokedex-serviceworker.js')
                .then(console.log("Succes"))
                .catch(console.log("Failure"));
        });
    }
}

export default register;