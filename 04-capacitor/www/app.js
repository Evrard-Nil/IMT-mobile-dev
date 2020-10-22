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
        let header = document.createElement("ion-card-header");
        let title = document.createElement("ion-card-title");
        let content = document.createElement("ion-card-content");

        img.src = BLOG_IMAGES_URL + article.image;
        title.innerHTML = article.title;
        content.innerHTML = article.brief;

        header.appendChild(title);
        card.appendChild(img);
        card.appendChild(header);
        card.appendChild(content);
        card.href = BLOG_POST_URL + article.id;
        list.appendChild(card);
    });
}

/**
 * takePicture opens the camera, takes a picture and then opens the new article modal
 * 
 */
async function takePicture() {
    const image = await capacitorExports.Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: capacitorExports.CameraResultType.Uri
    });

    let imageUrl = image.webPath;
    let newImage = document.createElement("img");
    newImage.src = imageUrl;

    presentModal(imageUrl);
}

customElements.define('modal-page', class extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <ion-header>
            <ion-toolbar>
            <ion-title>Création d'un article</ion-title>
            <ion-buttons slot="primary">
                <ion-button onClick="dismissModal()">
                <ion-icon slot="icon-only" name="close"></ion-icon>
                </ion-button>
            </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-item>
                <ion-label position="stacked">Titre</ion-label>
                <ion-input id="modaltitle"></ion-input>
            </ion-item>
            <ion-item>
                <ion-label position="stacked">Description</ion-label>
                <ion-input id="modaldescription"></ion-input>
            </ion-item>
            <ion-button expand="block" onClick="newArticle()">Enregistrer</ion-button>
        </ion-content>`;
    }
});

/**
 * presentModal displays the modal
 * 
 * @param {string} imageUrl 
 */
function presentModal(imageUrl) {
    // create the modal with the `modal-page` component
    const modalElement = document.createElement('ion-modal');
    modalElement.component = 'modal-page';
    modalElement.cssClass = 'my-custom-class';
    modalElement.componentProps = {
        'image': imageUrl
    };

    // present the modal
    document.body.appendChild(modalElement);
    return modalElement.present();
}

/**
 * dismissModal closes the modal without saving anything
 */
async function dismissModal() {
    let modal = document.querySelector('ion-modal');
    await modal.dismiss({
        'dismissed': true
    });
}

/**
 * newArticle creates a new article on the app
 * 
 */
async function newArticle() {
    let title = await document.getElementById('modaltitle').getInputElement();
    let description = await document.getElementById('modaldescription').getInputElement();

    let json = {
        'title': title.value,
        'brief': description.value,
        'image': document.querySelector('ion-modal').componentProps.image
    }

    console.log(json);
}