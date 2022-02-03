
// Initialisation  et récupération de la variable du panier. sauvegardé dans le localstorage
let productsBasket = localStorage.getItem('visitor') ? JSON.parse(localStorage.getItem('visitor')) :  [];

localStorage.setItem('visitor', JSON.stringify(productsBasket));

