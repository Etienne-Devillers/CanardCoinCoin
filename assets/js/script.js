
// Initialisation  et récupération de la variable du panier. sauvegardé dans le localstorage
let productsBasket = localStorage.getItem('visitor') ? JSON.parse(localStorage.getItem('visitor')) :  [];

localStorage.setItem('visitor', JSON.stringify(productsBasket));


fetch("assets/js/ducks.json")

    .then(function (resp) {
        return resp.json();
    })
    .then(function (datas) {
console.log(datas);
test.src = datas.goods[0].animals[0].picture
    });
