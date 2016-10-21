(function(d) {
    'use strict';

    class Product {
        constructor(name, howMuch, weight){
            this.name = name;
            this.howMuch = howMuch;
            this.weight = weight;
            this.deleteProduct();
        }
        addProduct() {
            const list = d.getElementById('products'),
                newElement = d.createElement('li');

            list.appendChild(newElement);

            newElement.classList.add('list__item');
            newElement.classList.add('product');
            newElement.innerHTML = `<p class='product__name'>${this.name}</p>
                                    <button class='product__remove'>x</button>
                                    <div class='product__info'>
                                        <div>Ilość: ${this.howMuch} szt.</div>
                                        <div>Waga: ${this.weight} g.</div>
                                    </div>`;
        }
        searchProduct() {
            const products = d.querySelectorAll('.product__name'),
                len = products.length;
            let result = true,
                i;

            if (len < 1) {
                result = false;
            } else {
                for (i = 0; i < len; i++) {
                    if (products[ i ].innerHTML.toLowerCase() === this.name.toLowerCase()) {
                        result = true;
                        break;
                    } else {
                        result = false;
                    }
                }
            }
            return result;
        }
        deleteProduct() {
            d.getElementById('products').addEventListener('click', (e) => {
                const t = e.target;
                if (t.className === 'product__remove') {
                    t.parentNode.remove();
                }
            }, false);
        }
    }
    d.getElementById('btn-add').addEventListener('click', () => {
        const nameProduct = d.getElementById('product-name').value,
            howMuchProduct = d.getElementById('product-how_much').value,
            weightProduct = d.getElementById('product-weight').value,
            product = new Product(nameProduct, howMuchProduct, weightProduct);

        if (nameProduct !== '') {
            if (product.searchProduct()) {
                window.alert('Taki produkt widnieje już na Twojej liście!');
            } else {
                product.addProduct();
            }
        } else {
            window.alert('Nie podano nazwy produktu!');
        }
    }, false);

}(document));