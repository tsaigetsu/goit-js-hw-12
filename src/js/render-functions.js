
export function imgCreated(image) {
    return `<li class="img-item">
    <a class="img-link" href="${image.largeImageURL}">
    <img class="image" src ="${image.webformatURL}" alt ="${image.tags}">
    </a>
    <div class="img-info">
    <p class="info"><b>Likes</b>${image.likes}</p>
    <p class="info"><b>Views</b>${image.views}</p>
    <p class="info"><b>Comments</b>${image.comments}</p>
    <p class="info"><b>Downloads</b>${image.downloads}</p>
    </div>
    </li>`
};

 export function imgTemplate(arr) {
    return arr.map(imgCreated).join("");
};