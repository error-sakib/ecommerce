const shop = document.getElementById('shop')

let basket = JSON.parse(localStorage.getItem('data')) || []

let generateShop = () => {
  shop.innerHTML = shopItemsData.map((x) => {
        
      let {id,name,price,img} = x 

    return `
          <div class='shop_item'  id=prodcut-id-${id}>
               <img src= '${img}' alt='' />
               <div class='product_info' >
                      <h5>${name}</h5>
                      <p  class='price'> <span>$</span> ${price} </p>
               </div>
           </div>  
    `

   }).join('')
}

generateShop()
const bestSalle = document.getElementById('bestSell')

let dibba = JSON.parse(localStorage.getItem('data')) || []

let generateSale = () => {
  bestSell.innerHTML = bestSale.map((y) => {
        
      let {id,name,price,img} = y 

    return `
          <div class='sale_item'  id=prodcut-id-${id}>
               <img src= '${img}' alt='' />
               <div class='product_info' >
                      <h5>${name}</h5>
                      <p  class='price'> <span>$</span> ${price} </p>
               </div>
           </div>  
    `

   }).join('')
}

generateSale()

// slide section in review
const cement = document.getElementById('customer')
let jar = JSON.parse(localStorage.getItem('data')) || []
let generateCmnt = () => {
       cement.innerHTML = commentData.map((z) => {
             
           let {id,name,comment} = z 
     
         return `
               <div class='cmnet'  id=cstmr-id-${id}>
                    <div class='cmnt_info' >
                           <h5>${name}</h5>
                           <p  class='price'> ${comment} </p>
                    </div>
                </div>  
         `
     
        }).join('')
     }
     
     generateCmnt()
const slide = document.querySelectorAll('.cmnt_info');
var counter = 0;
slide.forEach(
       (slide,index) => {
              slide.style.left = '${index * 100}%'
       }
)
const slideDiv = () => {
       slide.forEach(
              (slide) => {
                     slide.style.transform = 'translateX(-${counter * 100}%)'
              }
       )
}
const goPre = () => {
       counter--
       alert('prev')
       console.log('iii')
       slideDiv()

}
const goNxt = () => {
       counter++
       alert('next')
       slideDiv()

}