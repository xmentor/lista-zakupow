(function (d) {
    'use strict';

    function ProductDesc(name, how_much, weight) {
        this.name = name;
        this.how_much = how_much;
        this.weight = weight;
    }
    
    ProductDesc.prototype.addProduct = function () {
        var list = d.getElementById("products"),
            newElement = d.createElement("li");
        
        list.appendChild(newElement);
        newElement.classList.add("product");
        
        newElement.innerHTML += `<p class='nameProduct'>${this.name}</p>
                                    <div class='product-moreinfo'>
                                        <div class='product-info'>Ilość: ${this.how_much} szt.</div>
                                        <div class='product-info'>Waga: ${this.weight} g</div>
                                    </div>`;
    };
    
    ProductDesc.prototype.searchProduct = function () {
        var products = d.querySelectorAll(".nameProduct"),
            len = products.length,
            result = true;
        
        if (len < 1) {
            result = false;
        } else {
            for (var i = 0; i < len; i++) {
                if (products[i].innerHTML.toLowerCase() === this.name.toLowerCase()) {
                    result = true;
                    break;
                } else {
                    result = false;
                }
            }
        }
        return result;
    };
    
    d.getElementById("btn-add").addEventListener("click", function () {
        var nameProduct = d.getElementById("product-name").value,
            how_muchProduct = d.getElementById("product-how_much").value,
            weightProduct = d.getElementById("product-weight").value,
            product = new ProductDesc(nameProduct, how_muchProduct, weightProduct);

        if (nameProduct !== "") {
            if (product.searchProduct()) {
                window.alert("Taki produkt widnieje już na Twojej liście!");
            } else {
                product.addProduct();
            }
        } else {
            window.alert("Nie podano nazwy produktu!");
        }
    }, false);
    
    d.getElementById("products").addEventListener("click", function (event) {
        var t = event.target;
        if (t.className === "nameProduct") {
            t.parentNode.parentNode.removeChild(t.parentNode);
        }
    }, false);
    
}(document));

    /*
    function searchProduct(nameProduct) {
        var products = d.querySelectorAll(".nameProduct"),
            len = products.length,
            result = false;
        
        if (len < 1) {
            result = true;
        } else {
            for (var i = 0; i < len; ++i) {
                if (products[i].innerHTML === nameProduct) {  
                    result = false;
                    return;
                } else {
                    result = true;
                }
            }
        }
        return result;
    }
    */