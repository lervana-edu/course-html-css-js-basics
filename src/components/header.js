function renderHeader(id, imagePath, alt) {
    return renderElement({
        placeholderId: id,
        elementClassName:'header',
        content: `
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
    });
}
