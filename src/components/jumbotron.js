function renderJumbotron(id, imagePath, alt) {
    return renderElement({
        placeholderId: id,
        elementId: "jumbotron-container",
        content: `
            <img id="jumbotron" src="${imagePath}" alt="${alt}" />
            <div id="jumbotron-timer">Timer placeholder</div>
        `
    });
}
