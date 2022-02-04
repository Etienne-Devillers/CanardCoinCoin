
// Initialisation  et récupération de la variable du panier. sauvegardé dans le localstorage
let productsBasket = localStorage.getItem('visitor') ? JSON.parse(localStorage.getItem('visitor')) :  [];
localStorage.setItem('visitor', JSON.stringify(productsBasket));



fetch("assets/js/ducks.json")

    .then(function (resp) {
        return resp.json();
    })
    .then(function (datas) {

var ducksDataBase = datas
// return ducksDataBase
console.log(ducksDataBase);

ducksDataBase.animals.forEach(element => {
    firstRow.innerHTML += createCards(element)
    
    
});










    });
