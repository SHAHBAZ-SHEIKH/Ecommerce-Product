

// let storeApi = ()=>{
//     return new Promise((resolve,reject)=>{
//         fetch('https://fakestoreapi.com/products')
//         .then((res)=>res.json())
//         .then((res)=>resolve(res))
//         .catch((err)=>{
//             reject(err)
//         })
//     })
// }

// let getData = async function(){
//     let resultData = await storeApi()
//     console.log(resultData)
// }

// getData()


let productDiv = document.querySelector(".product")
let categoryListDiv = document.querySelector(".categoryList")
let allCats = []
let displayProduct = async (allCheckCat=[])=>{
    
    productDiv.innerHTML = ''
    let product = await fetch('https://fakestoreapi.com/products')
    let finalProduct = await product.json()
    console.log(finalProduct)

   

    finalProduct.forEach(element =>{
        if(!allCats.includes(element.category)){
            categoryListDiv.innerHTML += `<label for="">
                    <input type="checkbox" onclick=categoryFilter() value="${element.category}">${element.category}
                </label>`

            allCats.push(element.category)
        
                

        }
        if(allCheckCat.length==0){
            allCheckCat = allCats
        }


        if(allCheckCat.includes(element.category)){
            productDiv.innerHTML += `<div class="productItem">
                <img src="${element.image}" alt="">
                <h4>${element.category}</h4>
                <p>Price Rs: ${element.price} | Rating: ${element.rating.rate}</p>
                <h3>${element.title}</h3>

            </div>`

        }
        




        
    })
}

displayProduct()

let categoryFilter = ()=>{
    let checkInput = document.querySelectorAll("input[type='checkbox']")
    let checkData = [];
     checkInput.forEach((e)=>{
        if(e.checked){
            checkData.push(e.value)
        }


     })

     console.log(checkData)

     displayProduct(checkData)
}