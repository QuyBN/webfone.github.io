var filteChoosed =document.querySelectorAll(".filter-item ul li")
var filtePrice =document.querySelector("a[data-type='price'] span")
var filteCapacity= document.querySelector("a[data-type='capacity'] span")

console.log(filtePrice)
Length = filteChoosed.length;
console.log(Length)

for (var i=0;i<Length;i++){
 
    filteChoosed[i].addEventListener("click",function(e ){
        var arrI =  this.parentElement.querySelectorAll('i')
        var LengthI = arrI.length
        for(var i=0;i<LengthI;i++){
            arrI[i].style.display="none";
        }
        if(e.target.classList.contains("price-item")){
            // show box price
            var filteE =document.querySelector("a[data-type='price']")
            filteE.style.display="inline"
            filtePrice.innerText= e.target.innerText
            // convert inertext for span element
            var arrCheck = this.querySelector("i");
                arrCheck.style.display="inline"
           
        }
        if(e.target.classList.contains("capacity-item")){
            var filteE =document.querySelector("a[data-type='capacity']")
            filteE.style.display="inline"
            var a = this.querySelector("i");
            a.style.display="inline"
            filteCapacity.innerText= e.target.innerText
        }
    })
}
