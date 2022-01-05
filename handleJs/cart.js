function handleTotal(){
    var price = document.querySelectorAll(".cart-table-body[disable='false'] .product-Price-amount bdi")
    var quantity= document.querySelectorAll(".cart-table-body[disable='false'] .product-quantity input[type='text']")
    var total= document.querySelectorAll(".cart-table-body[disable='false']  .product-subtotal .woocommerce-Price-amount bdi")
    var showTotal= document.querySelectorAll(".shop_table .woocommerce-Price-amount bdi")
    const Length =price.length
    var Total=0;
    for(var i=0;i<Length;i++){
        var a = price[i].textContent
        console.log(Number(a))
        console.log(Number(quantity[i].value))
        temp =Number(a)*Number(quantity[i].value)
        total[i].innerText=`${temp}`
        Total+=temp
    }
    console.log(Total)
    for(var j=0;j<showTotal.length;j++){
        showTotal[j].innerText=`${Total}`
    }
}

function deleteItem(){
    var modifyButton = document.querySelector("button[type='submit']")
    var deleteProducts =document.querySelectorAll(".remove_cart_product")
    console.log(deleteProducts)
    for(var i=0;i<deleteProducts.length;i++){
        deleteProducts[i].onclick=function(e){
            pennat=true
            console.log("a")
            e.preventDefault()
            this.closest('.cart-table-body').setAttribute("disable","true")
            this.closest('.cart-table-body').style.display="none"
            modifyCart(true)
            modifyButton.classList.add("modify")
             handleTotal()
        }
    }
}
function handleQuantity (){
    // var numberinput = document.querySelector("#quantity_id")
    var modifyButton = document.querySelector("button[type='submit']")
    var numberinputPrev = document.querySelectorAll(".cart-table-body[disable='false'] .input_Capacity-Prev")
    console.log(numberinputPrev.length)
    var numberinputnext = document.querySelectorAll(".cart-table-body[disable='false']  .input_Capacity_next")
    console.log(numberinputnext.length)
    let Length = numberinputPrev.length
    for(var i=0;i<Length;i++){
        numberinputPrev[i].onclick= function(e) {
            if(this.parentElement.querySelector("input[type='text']").value>=1){
                this.parentElement.querySelector("input[type='text']").value--;
            }
            modifyCart(true)
            modifyButton.classList.add("modify")
            handleTotal()
        }
        numberinputnext[i].onclick = function(e) {
            modifyCart(true)
            modifyButton.classList.add("modify")
            this.parentElement.querySelector("input[type='text']").value++;
            handleTotal()
        }
    }
}
function modifyCart(temp){
        var modifyButton = document.querySelector("button[type='submit']")
        var cartNotify =document.querySelector(".cart-noitify")
        modifyButton.onclick=function(e){
                console.log(temp)
                e.preventDefault();
                if(temp){
                    showSuccesToast()
                   cartNotify.style.display="block"
                   cartNotify.innerText="cập nhật thành công"
                }
                setTimeout(() => {
                this.classList.remove('modify');
                temp=false;
                cartNotify.style.display="none"
                }, 3000);
         }
    }
handleTotal();
deleteItem()
handleQuantity()
modifyCart(false);


var firstname= "1000.0000.0000\n"
console.log(firstname.replace(/\n/g,''))