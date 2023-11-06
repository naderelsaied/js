
// var x = 1
// var btn1 = document.getElementById("btn1")
// var div1 = document.getElementById("div1")

// function code2(){
//      div1.innerHTML = x++
// }
// btn1.onmousemove = code2
// /////////////////////////////////////////////////////////////
// var input1 = document.getElementById("input1")
// function code1(){
//     console.log("")
// }  
// input1.onkeyup = code1
/////////////////////////////////////////////////////////////////
// for( x = 1 ; x<=100 ; x++){
//     console.log(x)
// }
//////////////////////////////////////////////////////////////////
// var x = 1
// do{
//     console.log(x)
//     x++
// }while (x<=50) {
    
// }   عمل 8 منتجات كل منتج بصورة هيكون مجود ظاهر السعر والاسم زرار مخفي يظهر مع الاختيار وظهور السعر ف الاتش تي ام الا
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 var allprodact = document.querySelectorAll(".parent .product")
 var contant = document.querySelector("#mycontact")
 var salary = document.querySelector("#mysalary")
 var btn1 = document.querySelector("#btn1")
 var total = 0

 allprodact.forEach(function(item){
    item.onclick = function(){ 
        total += +(item.getAttribute("price"))  
        contant.innerHTML += item.textContent +"&nbsp &nbsp"
        if(contant.innerHTML !=""){
            btn1.style.display = "block"
            btn1.style.color="#fff"
            btn1.style.width="180px"
            btn1.style.height="50px"
        }
    }
   
 })
      btn1.onclick = function(){
        // console.log(total)
        salary.innerHTML  += total
      }
          