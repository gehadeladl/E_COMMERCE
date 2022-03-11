let products       = JSON.parse(localStorage.getItem('allProducts'))
let detalseProduct = localStorage.getItem('detalseProduct')
let cartDetDom     = document.getElementById('cartde')
let productDetalse = products.find((item) => item.id == detalseProduct)
let badge          = document.querySelector('.badge')

/*############################################################*/

badge.innerHTML = localStorage.getItem("number")

/*############################################################*/

cartDetDom.innerHTML = `
    <div class="col-md-5">
        <img src="${productDetalse.image}" alt="..."/>
    </div>
    <div class="col-md-7">
        <div>
            <h5>${productDetalse.title}</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit<br/> 
            Eum, delectus! Ab voluptate quasi provident</br> 
            voluptatum optio dolor. </p>
            <p>Size : ${productDetalse.size}  .</p>
            <p>Price : ${productDetalse.price} $ .</p>
        </div>
    </div>
`
