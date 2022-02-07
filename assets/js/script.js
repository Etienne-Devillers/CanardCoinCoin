// Initialisation  et récupération de la variable du panier. sauvegardé dans le localstorage
let productsBasket = localStorage.getItem('visitor') ? JSON.parse(localStorage.getItem('visitor')) : [];



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

let classics = document.getElementById('classics');
classics.addEventListener('click', () => {
    firstRow.innerHTML = '';
    ducksDataBase.classics.forEach(element => {
        firstRow.innerHTML += createCards(element);
    });
});
let fiction = document.getElementById('fiction');
fiction.addEventListener('click', () => {
    firstRow.innerHTML = '';
    ducksDataBase.fiction.forEach(element => {
        firstRow.innerHTML += createCards(element);
    });
});
let animals = document.getElementById('animals');
animals.addEventListener('click', () => {
    firstRow.innerHTML = '';
    ducksDataBase.animals.forEach(element => {
        firstRow.innerHTML += createCards(element);
    });
});
let celebrities = document.getElementById('celebrities');
celebrities.addEventListener('click', () => {
    firstRow.innerHTML = '';
    ducksDataBase.celebrities.forEach(element => {
        firstRow.innerHTML += createCards(element);
    });
});
let professions = document.getElementById('professions');
professions.addEventListener('click', () => {
    firstRow.innerHTML = '';
    ducksDataBase.professions.forEach(element => {
        firstRow.innerHTML += createCards(element);
    });
});
let sport = document.getElementById('sport');
sport.addEventListener('click', () => {
    firstRow.innerHTML = '';
    ducksDataBase.sport.forEach(element => {
        firstRow.innerHTML += createCards(element);
    });
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

    

