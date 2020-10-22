const BLOG_API_URL = "https://devfest-nantes-2018-api.cleverapps.io/blog";
const BLOG_POST_URL = "https://devfest2018.gdgnantes.com/blog/posts/";
const BLOG_IMAGES_URL = "https://devfest2018.gdgnantes.com/";

fetch(BLOG_API_URL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        appendData(data);
    })
    .catch(function (err) {
        console.log(err);
    })


function appendData(json) {
    let mainContainer = document.getElementById("ionicList");
    json.forEach(article => {
        let card = document.createElement("ion-card");
        let img = document.createElement("img");
        let cardHeader = document.createElement("ion-card-header");
        let cardTitle = document.createElement("ion-card-title");
        let cardContent = document.createElement("ion-card-content");

        img.src = BLOG_IMAGES_URL + article.image;
        cardTitle.innerHTML = article.title;
        cardContent.innerHTML = article.brief;

        cardHeader.appendChild(cardTitle);
        card.appendChild(img);
        card.appendChild(cardHeader);
        card.appendChild(cardContent);
        card.href = BLOG_POST_URL + article.id;
        mainContainer.appendChild(card);
    });
}