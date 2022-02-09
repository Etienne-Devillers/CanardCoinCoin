// Initialisation  et récupération de la variable du panier. sauvegardé dans le localstorage
let productsBasket = localStorage.getItem('visitor') ? JSON.parse(localStorage.getItem('visitor')) : [];

if (productsBasket !== []) {
    productsBasket.forEach(element => {
        document.querySelector('.offcanvas-body').innerHTML += refreshBasketDisplay(element)
    })
}



fetch("assets/js/ducks.json")

    .then(function (resp) {
        return resp.json();
    })
    .then(function (datas) {

        var ducksDataBase = datas
        // return ducksDataBaseS
        console.log(ducksDataBase);


        ducksDataBase.animals.forEach(element => {
            firstRow.innerHTML += createCards(element)

        });
        refreshButton(ducksDataBase.animals);

        let classics = document.getElementById('classics');
        classics.addEventListener('click', () => {
            firstRow.innerHTML = '';
            ducksDataBase.classics.forEach(element => {
                firstRow.innerHTML += createCards(element);
            });
            refreshButton(ducksDataBase.classics);
        });

        let fiction = document.getElementById('fiction');
        fiction.addEventListener('click', () => {
            firstRow.innerHTML = '';
            ducksDataBase.fiction.forEach(element => {
                firstRow.innerHTML += createCards(element);
            });
            refreshButton(ducksDataBase.fiction);
        });

        let animals = document.getElementById('animals');
        animals.addEventListener('click', () => {
            firstRow.innerHTML = '';
            ducksDataBase.animals.forEach(element => {
                firstRow.innerHTML += createCards(element);
            });
            refreshButton(ducksDataBase.animals);
        });

        let celebrities = document.getElementById('celebrities');
        celebrities.addEventListener('click', () => {
            firstRow.innerHTML = '';
            ducksDataBase.celebrities.forEach(element => {
                firstRow.innerHTML += createCards(element);
            });
            refreshButton(ducksDataBase.celebrities);
        });

        let professions = document.getElementById('professions');
        professions.addEventListener('click', () => {
            firstRow.innerHTML = '';
            ducksDataBase.professions.forEach(element => {
                firstRow.innerHTML += createCards(element);
            });
            refreshButton(ducksDataBase.professions);

        });

        let sport = document.getElementById('sport');
        sport.addEventListener('click', () => {
            firstRow.innerHTML = '';
            ducksDataBase.sport.forEach(element => {
                firstRow.innerHTML += createCards(element);
            });
            refreshButton(ducksDataBase.sport);
        });

        let removeTotalProduct = document.querySelector('.removeTotalProduct');
        removeTotalProduct.addEventListener('click', () => {
            removeAllItem();
            document.querySelector('.offcanvas-title').innerHTML = `${productsBasket.length} articles`;
            sumItems()
            document.querySelector('.priceTotaModal').innerHTML = sumItemsTotal()
        });


        let removeProduct = document.querySelectorAll('.remove-product');
        console.log(removeProduct);

        modalBtn.addEventListener('click', () => {
            let prices = document.querySelectorAll('.priceQteModal')

            document.querySelector('.offcanvas-title').innerHTML = `${productsBasket.length} articles`;
            sumItems()
            document.querySelector('.priceTotaModal').innerHTML = sumItemsTotal()

            // afficher la quantité
            productsBasket.forEach(element => {
                document.querySelector(`.quantityInput[data-productid=${element.product_Id}]`).value = element.productQuantity


            console.log(element.productQuantity)
            console.log(document.querySelector(`.quantityInput[data-productid=${element.product_Id}]`).value)
            });

            

            removeProduct.forEach(element => {
                element.addEventListener('click', (event) => {
                    productIdRemove = event.currentTarget.dataset.removeid;
                    findIndex(productIdRemove);
                    productsBasket.splice(productIndex, 1);
                    localStorage.setItem('visitor', JSON.stringify(productsBasket));
                    document.querySelector('.offcanvas-body').innerHTML = '';

                    if (productsBasket !== []) {
                        productsBasket.forEach(element => {
                            document.querySelector('.offcanvas-body').innerHTML += refreshBasketDisplay(element)
                        });
                    };
                })
            })
        });
    })