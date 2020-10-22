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
    let list = document.getElementById("ionicList");
    json.forEach(article => {
        let card = document.createElement("ion-card");
        let img = document.createElement("img");
        let h = document.createElement("ion-card-header");
        let t = document.createElement("ion-card-title");
        let c = document.createElement("ion-card-content");

        img.src = BLOG_IMAGES_URL + article.image;
        t.innerHTML = article.title;
        c.innerHTML = article.brief;

        h.appendChild(t);
        card.appendChild(img);
        card.appendChild(h);
        card.appendChild(c);
        card.href = BLOG_POST_URL + article.id;
        list.appendChild(card);
    });
}