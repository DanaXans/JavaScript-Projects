fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(json=>{
        console.log(json)
        let wrapper=document.getElementById('wrapper')

        let {carts}=json;
        for (const cart of carts) {
            let cart_wrapper=document.createElement('div');
            let p=document.createElement('p');
            p.innerText= `title: ${cart.discountedTotal},
            id: ${cart.id},
            total: ${cart.total},
            products: ${cart.totalProducts},
            quantity: ${cart.totalQuantity},
            user id: ${cart.userId}`;

            let ol = document.createElement('ol');
            for (const product of cart.products) {
            let li = document.createElement('li');
            li.innerText= `id: ${product.id},
            title: ${product.title},
            price: ${product.price},
            quantity: ${product.quantity},
            percentage: ${product.discountPercentage},
            discounted total: ${product.discountedTotal},
            total:${product.total}`;

            let img = document.createElement('img');
            img.src=product.thumbnail;
            ol.append(li,img);
            }
            cart_wrapper.append(p,ol);
            wrapper.appendChild(cart_wrapper);
        }
    });