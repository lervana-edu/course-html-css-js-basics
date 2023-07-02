function renderOfferItem({ title, description, img }) {
    return `
        <div class="offer-item">
            <div class="offer-item-image-wrapper">
                ${img}
            </div>
            <div class="offer-item-info">
                <h3>${title}</h3>
                <p>${description}</p>
            </div>
        </div>
    `
}