import Navbar from '../components/nav.js';

document.getElementById('navbar').innerHTML = Navbar()


const display = (data) => {

    data.map((product) => {
        let img = document.createElement("img");
        img.src = product.image
        let title = document.createElement("h3");
        title.innerHTML = product.title
        let price = document.createElement("h4");
        price.innerHTML = product.price
        // let description = document.createElement("p");
        // description.innerHTML = product.description
        let category = document.createElement("p");
        category.innerHTML = product.category
        let rating = document.createElement("span");
        rating.innerHTML = product.rating.rate
        if (product.rating.rate > 4) {
            rating.style.color = "green"
        }
        else if (product.rating.rate <= 4 && product.rating.rate >= 3) {
            rating.style.color = "#666666"
        }
        else {
            rating.style.color = "red"
        }
        let btn = document.createElement("button");
        btn.innerHTML = "Buy Now"
        let div = document.createElement("div");
        div.append(img, title, price, category, rating, btn)
        document.getElementById("box2").append(div);
    });
}

// fetch("http://localhost:3000/product")
//     .then((response) => response.json())
//     .then((response) => display(response));

// const product = response 

// // sorting by price 
// const handlelth = () => {
//     let sorting = product.sort((a, b) => a.price - b.price);
//     display(sorting);
// }
// document.getElementById("lth").addEventListener("click", handlelth);


fetch("http://localhost:3000/product")
    .then((response) => response.json())
    .then((response) => {
        const products = response; 

        // sorting by price 
        const handlelth = () => {
            let sorting = products.sort((a, b) => a.price - b.price);
            display(sorting);
        };

        document.getElementById("lth").addEventListener("click", handlelth);

        display(products); 
    });