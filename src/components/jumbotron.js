function renderJumbotron(id, imagePath, alt) {
    const elementToReplace = document.getElementById(id)
    const newElement = document.createElement("div");
    newElement.id = "jumbotron-container"

    newElement.innerHTML = `
        <img id="jumbotron" src="${imagePath}" alt="${alt}" />
        <div id="jumbotron-timer">Timer placeholder</div>
    `

    elementToReplace.parentNode.replaceChild(newElement, elementToReplace);
}
