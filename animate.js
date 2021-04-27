window.addEventListener("load", () => {
    let h1 = document.getElementById("h1");
    let cm = document.getElementById("cm");

    setTimeout(() => {
        h1.classList = "animate__animated animate__zoomInDown h1"
        cm.classList = "animate__animated animate__flipInX ph"
    }, 500)
})