const register = (swUrl, config) => {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/pokedex-serviceworker.js')
                .then(function (registration) {
                    console.log("Succes, scope: ", registration.scope)
                })
                .catch(function (err) {
                    console.log("Failure, err; ", err)
                });
        });
    }
}

export default register;