// Initialisation  et récupération de la variable du panier. sauvegardé dans le localstorage
let productsBasket = localStorage.getItem('visitor') ? JSON.parse(localStorage.getItem('visitor')) : [];




fetch("assets/js/ducks.json")

    .then(function (resp) {
        return resp.json();
    })
    .then(function (datas) {

        var ducksDataBase = datas
        // return ducksDataBase
        //ForEach de création des cartes

        ducksDataBase.animals.forEach(element => {
            firstRow.innerHTML += createCards(element)
        });


        ducksDataBase.animals.forEach((element) => {

            document.querySelector('.decrementBtn[data-productId=' + element.id + ']').addEventListener('click', (event) => {
                decrementValueItem(event.currentTarget.dataset.productid) ;
                console.log("test bouton -")
            })

            document.querySelector('.incrementBtn[data-productId=' + element.id + ']').addEventListener('click', (event) => {
                incrementValueItem(event.currentTarget.dataset.productid) ;
                console.log("test bouton +")
            })

            document.querySelector('button[data-productId=' + element.id + ']').addEventListener('click', (event) => {
                addToBasket(event.currentTarget.dataset.productid);
                document.querySelector('.offcanvas-body').innerHTML += addItem(element.id)
                
            })
        })


    });