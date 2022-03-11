let cartitem = document.getElementById('carts');
let badge    = document.querySelector('.badge')
let noItems  = document.getElementById('noitems') 

/*############################################################*/

function cartUi(allItems = []){
    if(!JSON.parse(localStorage.getItem("addedItemLocal")) || JSON.parse(localStorage.getItem("addedItemLocal")).length === 0){
        noItems.style.display = "block"
    }
    let items    = JSON.parse(localStorage.getItem("addedItemLocal")) || allItems
    let itemsLop = items.map((item , index) => {
        return`
            <div class="col-lg-4">
                <div class="cart-item">
                    <img src="${item.image}" alt="image">
                    <div class="cart-item-desc">
                        <h5>${item.title}</h5>
                        <p>${item.desc}</p>
                        <h5>${item.price} $</h5>
                        <i class="fa-solid fa-heart"></i>
                        <button class="add-to-cart" onclick="removeCart(${index})"><i class="fas fa-trash"></i>Remove From Cart</button>
                    </div>
                </div>
            </div>
        `
    })
    cartitem.innerHTML = itemsLop.join("")
}
cartUi()

/*############################################################*/

function number2(){
    let number1 = localStorage.getItem("number")
    localStorage.setItem("number" , (number1 - 1))
    let number2 = localStorage.getItem("number")
    badge.innerHTML = number2
}
badge.innerHTML = localStorage.getItem("number")

/*############################################################*/

function removeCart(ind){
    let addedCart = localStorage.getItem("addedItemLocal")
    if(addedCart){
        let items    = JSON.parse(addedCart)
        let filtered = items.filter((item , index) => index !== ind)
        localStorage.setItem("addedItemLocal" , JSON.stringify(filtered))
        cartUi(filtered)
        number2()
    }
}