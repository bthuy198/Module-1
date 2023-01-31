function Product(id, name, img, price, category) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.price = price;
    this.category = category;
}

let products = [
    new Product(1, 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops', "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg", 109.95, "men's clothing"),
    new Product(2, "Mens Casual Premium Slim Fit T-Shirts ", "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg", 22.3, "men's clothing"),
    new Product(3, "Mens Cotton Jacket", "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg", 55.99, "men's clothing"),
    // new Product(4, "Mens Casual Slim Fit", "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg", 11.99, "men's clothing"),
    new Product(4, "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet", "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg", 695, "jewelery")
]

function showProducts() {
    let tbProduct = '';
    //for in
    // for (let i in products) {
    //     tbProduct += `
    //             <tr>
    //                 <td>${products[i].id}</td>
    //                 <td><img src='${products[i].img}' width='60px'></td>
    //                 <td>${products[i].name}</td>
    //                 <td>${products[i].price}</td>
    //                 <td>${products[i].category}</td>
    //             </tr>`
    // }

    //for of
    // for (let product of products) {
    //     tbProduct += `
    //             <tr>
    //                 <td>${product.id}</td>
    //                 <td><img src='${product.img}' width='60px'></td>
    //                 <td>${product.name}</td>
    //                 <td>${product.price}</td>
    //                 <td>${product.category}</td>
    //             </tr>`
    // }

    //for each
    // products.forEach(function (value) {
    //     tbProduct+= `<tr>
    //                     <td>${value.id}</td>
    //                     <td><img src='${value.img}' width='60px'></td>
    //                     <td>${value.name}</td>
    //                     <td>${value.price}</td>
    //                     <td>${value.category}</td>
    //                 </tr>`
    // })

    //sử dụng hàm map
    let htmls = products.map(function (product, index) {
        return `<tr>
                    <td>${product.id}</td>
                    <td><img src='${product.img}' width='60' height='65'></td>
                    <td>${product.name}</td>
                    <td>${product.price}</td>
                    <td>${product.category}</td>
                </tr>`
    })
    document.querySelector('.products').innerHTML = htmls.join('');
}
showProducts();