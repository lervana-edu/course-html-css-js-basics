function renderHeader(id, imagePath, alt) {
    const elementToReplace = document.getElementById(id)
    const newElement = document.createElement("header");
    newElement.className = "header"

    newElement.innerHTML = `
    <div>
        <img id="logo" src="${imagePath}" alt="${alt}"/>
        <h1>VetMed</h1>
    </div>
    <nav>
        <a href="/">Main page</a>
        <a href="/">Prices</a>
        <a href="/">Employee schedule</a>
        <a href="/">Book a visit</a>
    </nav>
    `

    elementToReplace.parentNode.replaceChild(newElement, elementToReplace);
}
