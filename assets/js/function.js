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

function removeAllItem() {}


//--Fin supression de tout les articles

//------------------Fonction augmenter la quantité d'un article


function addItem(product_Id) {
    return  `
    <div class="card">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-2">
            <img class="image" src="${document.querySelector('img[data-productID=' + product_Id + ']').src}">
        </div>

        <div class="col-3 d-flex align-items-center">
            <div class="card-body">
                <h5 class="card-title">${document.querySelector('h5[data-productID=' + product_Id + ']').innerText}</h5>
                <span class="price">${document.querySelector('span[data-productID=' + product_Id + ']').innerText}</span>
            </div>
        </div>

        <div class="col-2 d-flex align-items-center">
            <button class="btn remove-product"><img src="./assets/img/poubelle.png" alt="delete"></button>
        </div>

                </div>                 
            </div>
        </div>` 
}


//--Fin augmentation de la quantité

//------------------Fonction calculer la somme pour chaque article


function sumItems(product_Id, quantity_Id) {


}


//--Fin Somme d'un article

//------------------Fonction calculer la somme du panier


function sumItemsTotal() {}

//--Fin Somme du panier

//------------------Fonction Mise à jour du localStorage


function updateLocalStorage() {}


//--Fin mise à jour du localStorage

//------------------Fonction Appel du localStorage


function getLocalStorage() {
    // check basket(ls)
    // get array of id an quantity
    // get array item 
    // -> get first 3 letters, get aray that starts with them 
    // -> get numbers, go to index of that number
    // for item get price and *quantity then =+ to Sum
    // return sum

    // var str = 'aze011';                        //element id
    // var tab = str.substring(0, 3);             //first3 letters are for the array
    // var ind = parseInt(str.substring(3), 10);  //converts last 3 digits in a number that doesn't start with 0
    
}



//--Fin appel du localStorage



//******************************************************************************************************************//
// -------------------------------------------Fonctions propres à la main ------------------------------------------//
//******************************************************************************************************************//

//------------------Fonction Fetch Initial et stockage dans une variable


function fetchAndSaveIt() {}

//--Fin Fetch Initial et stockage dans une variable

//------------------Fonction Creation des cards


function createCards(arrayItem) {


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

let productIndex;

function findIndex(dataProductId) {
    productsBasket.filter((obj, index) => {
        productIndex = indexObj = obj.product_Id === dataProductId ? index : null;
        return productIndex;
    });
}
//fonction qui trouve si l'index existe dans le localstorage

//------------------Fonction ajout au panier
// Avant d'ajouer au panier, il faut déja vérifier si l'item est déjà présent dans le panier, si c'est le cas, ajouter +1 dans product_quantity,
// sinon ajouter le product_item dans la variable du localstorage Basket.

function addToBasket(dataProductId) {
    findIndex(dataProductId);
    if (productIndex == null) {
        productsBasket.push({
            'product_Id': dataProductId,
            'productQuantity': document.querySelector('input[data-productID=' + dataProductId + ']').value
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

function openBasketModal(basketBtn) {
    return ``
}



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
// Fin fonction achat rapide --