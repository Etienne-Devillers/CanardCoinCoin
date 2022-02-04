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


function addItem(product_Id) {}


//--Fin augmentation de la quantité

//------------------Fonction calculer la somme pour chaque article


function sumItems(product_Id, quantity_Id) {}


//--Fin Somme d'un article

//------------------Fonction calculer la somme du panier


function sumItemsTotal() {}

//--Fin Somme du panier

//------------------Fonction Mise à jour du localStorage


function updateLocalStorage() {}


//--Fin mise à jour du localStorage

//------------------Fonction Appel du localStorage


function getLocalStorage() {}



//--Fin appel du localStorage



//******************************************************************************************************************//
// -------------------------------------------Fonctions propres à la main ------------------------------------------//
//******************************************************************************************************************//

//------------------Fonction Fetch Initial et stockage dans une variable


function fetchAndSaveIt() {}

//--Fin Fetch Initial et stockage dans une variable

//------------------Fonction Creation des cards


function createCards() {}



//--Fin Creation des cards



// ---------------------------fonction qui trouve si l'index existe dans le localstorage

let productIndex ;
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