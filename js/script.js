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
// best sell
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
const swiper = new Swiper('.swiper', {
       direction: 'horizontal',
       loop: true,
     
       slidesPerView: 3,
     spaceBetween: 32,
     
       // Navigation arrows
       navigation: {
         nextEl: '.swiper-button-next',
         prevEl: '.swiper-button-prev',
       },
     
       // And if we need scrollbar
       scrollbar: {
         el: '.swiper-scrollbar',
       },
       breakpoints: {
           
           384:{
               slidesPerView: 1,
               spaceBetween: 32,
           },
           768:{
               slidesPerView: 2,
               spaceBetween: 32,
   
           },
           1024:{
               slidesPerView: 3,
               spaceBetween: 10,
   
           }
       }
     });
   //   swiper  ends
   
       