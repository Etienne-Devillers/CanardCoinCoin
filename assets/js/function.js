// Ce document contient toutes les fonctions qui seront appelées par le script principal

//******************************************************************************************************************//
// ---------------------------Fonctions propres au panier et la gestion des articles -------------------------------//
//******************************************************************************************************************//

//------------------Fonction De supression d'un article


function RemoveItem(product_Id) {}



//--Fin supression d'un article

//------------------Fonction De retrait d'un article (quantité -1)
// verifier qu'en retirant un article on ne tombe pas à 0. si c'est le cas, supprimer l'item

function RemoveQuantityItem(product_Id){}



//--Fin retrait d'un article (quantité -1)

//------------------Fonction de supression de tout les articles

function removeAllItem(){}


//--Fin supression de tout les articles

//------------------Fonction augmenter la quantité d'un article


function addItem(product_Id){}


//--Fin augmentation de la quantité

//------------------Fonction calculer la somme pour chaque article


function sumItems(product_Id, quantity_Id){}


//--Fin Somme d'un article

//------------------Fonction calculer la somme du panier


function sumItemsTotal(){}

//--Fin Somme du panier

//------------------Fonction Mise à jour du localStorage


function updateLocalStorage(){}


//--Fin mise à jour du localStorage

//------------------Fonction Appel du localStorage


function getLocalStorage(){}



//--Fin appel du localStorage



//******************************************************************************************************************//
// -------------------------------------------Fonctions propres à la main ------------------------------------------//
//******************************************************************************************************************//

//------------------Fonction Fetch Initial et stockage dans une variable


function fetchAndSaveIt(){}  

//--Fin Fetch Initial et stockage dans une variable

//------------------Fonction Creation des cards


function createCards(arrayItem) {


    return `
        <div class="col">
            <div class="card overflow-hidden">
                
                    <img class="class="card-img-top image" src=" ${arrayItem.picture}" alt="${arrayItem.description}">
                    <div class="testss">
                        <div class="test"></div>
                        <div class="test"></div>
                    </div>
                    
                
                <div class="card-body">
                    <h5>${arrayItem.title}</h5>
                    <p>${arrayItem.description}</p>
                </div>
                <div>
                    <span>${arrayItem.price}</span>
                </div>
            </div>
        </div>
        `


};



//--Fin Creation des cards




//------------------Fonction changement d'affichage en fonction de la catégorie 


function changeDisplay(userChoice) {}



//--Fin changement d'affichage en fonction de la catégorie 

//------------------Fonction ajout au panier
// Avant d'ajouer au panier, il faut déja vérifier si l'item est déjà présent dans le panier, si c'est le cas, ajouter +1 dans product_quantity,
// sinon ajouter le product_item dans la variable du localstorage Basket.

// function addToBasket(card.btn)



//--Fin ajout au panier

//------------------Fonction Zoom sur image
// Ouvre une modal avec l'image en plus gros

function modalZoomImg(zoomBtn) {}



//--Fin Zoom sur image

//------------------Fonction ouvrir le panier
//Ouvre la modal du panier

function openBasketModal(basketBtn){}



//--Fin ouvrir le panier
// Fonction qui modifie le nombre d'objets pour un achat rapide ++

function incrementValueItem(){}


// Fin fonction achat rapide++
// Fonction qui modifie le nombre d'objets pour un achat rapide --



function decrementValueItem(){}


// Fin fonction achat rapide --