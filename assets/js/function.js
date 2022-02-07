// Ce document contient toutes les fonctions qui seront appelées par le script principal

//******************************************************************************************************************//
// ---------------------------Fonctions propres au panier et la gestion des articles -------------------------------//
//******************************************************************************************************************//

//------------------Fonction De supression d'un article


function RemoveItem(product_Id) {}




//--Fin supression d'un article

//------------------Fonction De retrait d'un article (quantité -1)
// verifier qu'en retirant un article on ne tombe pas à 0. si c'est le cas, supprimer l'item

function RemoveQuantityItem(product_Id) {}



//--Fin retrait d'un article (quantité -1)

//------------------Fonction de supression de tout les articles

function removeAllItem() {
    localStorage.clear();
};


//--Fin supression de tout les articles


// ---------------------------fonction qui trouve l'index dans le JSON


//------------------Fonction augmenter la quantité d'un article


function addItem(product_Id) {


    return `
        <div class="card cardModal">
        <div class="container-fluid">
            <div class="row">
                <div class="col-3 colCardImg">
                    <img class="imgCardBasket" src="${document.querySelector('img[data-productID=' + product_Id + ']').src}">
                </div>
                <div class="col-6 colCardText">
                    <div class="card-body cardBodyModal">
                        <h5 class="card-title cardTitleModal">${document.querySelector('h5[data-productID=' + product_Id + ']').innerText}</h5>
                        <p class="priceModal">${document.querySelector('span[data-productID=' + product_Id + ']').innerText} €</p>
                    </div>
                </div>
                <div class="col-3">
                    <div class="row">
                        <div class="col">
                            <div class="button inputField">
                                <div class="decrementBtn quantityModifier" data-productId="test"><span>-</span></div>
                                    <input readonly type="number" step="1" max="" value="1" name="quantityItem" class="quantityInput" data-productId="test">
                                <div class="incrementBtn quantityModifier" data-productId="test"><span>+</span></div>
                            </div>
                        </div>
                    </div>
                    <div class="row rowPriceQte">
                        <div class="col colPriceQte">
                            <p class="priceQteModal">9.99€</p>
                        </div>
                        <div class="col colBinCard">
                            <button class="btn remove-product"><img src="./assets/img/poubelle.png" alt="delete"></button>
                        </div>
                    </div>
                </div>
            </div>                 
        </div>
        </div>
        `
}
//--Fin augmentation de la quantité

//------------------Fonction calculer la somme pour chaque article


function sumItems(product_Id, quantity_Id) {}


//--Fin Somme d'un article

//------------------Fonction calculer la somme du panier


function sumItemsTotal() {}

//--Fin Somme du panier

//------------------Fonction Mise à jour du localStorage


function updateLocalStorage() {
    localStorage.setItem('visitor', JSON.stringify(productsBasket));
}
//--Fin mise à jour du localStorage

//------------------Fonction Appel du localStorage


function getLocalStorage() {
    let productsBasket = localStorage.getItem('visitor') ? JSON.parse(localStorage.getItem('visitor')) : [];
}

//--Fin appel du localStorage



//******************************************************************************************************************//
// -------------------------------------------Fonctions propres à la main ------------------------------------------//
//******************************************************************************************************************//

function refreshButton(arrayName) {
    arrayName.forEach(element => {

        document.querySelector('.decrementBtn[data-productId=' + element.id + ']').addEventListener('click', (event) => {
            decrementValueItem(event.currentTarget.dataset.productid);
            console.log("test bouton -")
        })

        document.querySelector('.incrementBtn[data-productId=' + element.id + ']').addEventListener('click', (event) => {
            incrementValueItem(event.currentTarget.dataset.productid);
            console.log("test bouton +")
        })

        document.querySelector('button[data-productId=' + element.id + ']').addEventListener('click', (event) => {
            addToBasket(event.currentTarget.dataset.productid);
            document.querySelector('.offcanvas-body').innerHTML += addItem(element.id)
            // updateLocalStorage()

        })
    })
}



//------------------Fonction Fetch Initial et stockage dans une variable


function fetchAndSaveIt() {}

//--Fin Fetch Initial et stockage dans une variable

//------------------Fonction Creation des cards


let createCards = (arrayItem) => {

    return `
        <div class="col">
            <div class="card overflow-hidden">
                
                    <img class="class="card-img-top image"  src=" ${arrayItem.picture}" alt="${arrayItem.description}" data-productId="${arrayItem.id}">
                    
                    
                
                <div class="card-body">
                    <div class="buyEl">

                        <div class="button inputField ">
                                <div class="decrementBtn quantityModifier" data-productId="${arrayItem.id}"><span>-</span></div>
                                <input readonly type="number" step="1" max="" value="1" name="quantityItem" class="quantityInput" data-productId="${arrayItem.id}">
                                <div class="incrementBtn quantityModifier" data-productId="${arrayItem.id}"><span>+</span></div>
                        </div>
                        
                        <div class="button">
                            <button class="buyBtn" data-productId="${arrayItem.id}">Ajouter</button>
                        </div>

                    </div>
                    <h5 data-productId="${arrayItem.id}" >${arrayItem.title}</h5>
                    <p>${arrayItem.description}</p>
                </div>

                <div class="card-footer">
                    <span data-productId="${arrayItem.id}" >${arrayItem.price}</span><span> €</span>
                </div>
            </div>
        </div>
        `


};



//--Fin Creation des cards




//------------------Fonction changement d'affichage en fonction de la catégorie 


function changeDisplay(userChoice) {}



//--Fin changement d'affichage en fonction de la catégorie 

// ---------------------------fonction qui trouve si l'index existe dans le localstorage


let productIndex = null;
function findIndex(dataProductId) {
    productsBasket.forEach((element, index) => {
        if (dataProductId == element.product_Id) {
            productIndex = index
        }
    })
};


//fonction qui trouve si l'index existe dans le localstorage

//------------------Fonction ajout au panier
// Avant d'ajouer au panier, il faut déja vérifier si l'item est déjà présent dans le panier, si c'est le cas, ajouter +1 dans product_quantity,
// sinon ajouter le product_item dans la variable du localstorage Basket.

function addToBasket(dataProductId) {
    findIndex(dataProductId);
    console.log(productIndex)
    if (productIndex == null) {
        productsBasket.push({
            'product_Id': dataProductId,
            'productQuantity': document.querySelector('input[data-productID=' + dataProductId + ']').value,
            'productPrice': document.querySelector('span[data-productID=' + dataProductId + ']').innerText,
            'product_img': document.querySelector('img[data-productID=' + dataProductId + ']').src,
            'product-title': document.querySelector('h5[data-productID=' + dataProductId + ']').innerText
        })
    } else {
        productsBasket[productIndex].productQuantity = parseInt(productsBasket[productIndex].productQuantity) + parseInt(document.querySelector('input[data-productID=' + dataProductId + ']').value);

    }
    console.log(productsBasket)
}
//--Fin ajout au panier

//------------------Fonction Zoom sur image
// Ouvre une modal avec l'image en plus gros

function modalZoomImg(zoomBtn) {


}
//--Fin Zoom sur image

//------------------Fonction ouvrir le panier
//Ouvre la modal du panier

function openBasketModal(basketBtn) {}



//--Fin ouvrir le panier
// Fonction qui modifie le nombre d'objets pour un achat rapide ++

function incrementValueItem(dataProductId) {

    document.querySelector('input[data-productID=' + dataProductId + ']').value++

}
// Fin fonction achat rapide++
// Fonction qui modifie le nombre d'objets pour un achat rapide --



function decrementValueItem(dataProductId) {
    document.querySelector('input[data-productID=' + dataProductId + ']').value == 1 ? alert('vous ne pouvez pas ajouter aucun objet au panier') : document.querySelector('input[data-productID=' + dataProductId + ']').value--;

}

// Fin fonction achat rapide 