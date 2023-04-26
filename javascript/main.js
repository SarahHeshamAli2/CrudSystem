
// var user={
//     name:"ahmed",
//     age:30,
//     email:"ahmed@gmail.com",
//     wife:{
//         name:"sarah",
//         age:25,
//         email:"Sarah@gmail.com"
//     },
//     son:{
//         name:"ali",
//         age:5
//     },

//     sayWelcome:function(x) {
//         console.log("Say Hello "+x);
//     }
// }


// console.log(user.wife.age);
// user.sayWelcome("Sarah")





// var friends=["Ali","Ibrahim","Omar","Youssef"] 

// for(i=0;i<friends.length;i++) {
//     console.log(friends[i]);
// }


// var users=[
//     { name:"sarah" , age:20 , email:"sarah@gmail.com"},
//     { name:"ahmed" , age:25 , email:"ahmed@gmail.com"},
//     { name:"enas" , age:28 , email:"enas@gmail.com"},
//     { name:"ali" , age:40 , email:"ali@gmail.com"},
//     { name:"omar" , age:45 , email:"omar@gmail.com"},
// ]

// var cartona=``
// for (i=0 ; i<users.length;i++) {

//     cartona+=` 
//     <tr>
//     <td>${users[i].name}</td>
//     <td>${users[i].age}</td>
//     <td>${users[i].email}</td>
// </tr>`
// }



// document.getElementById('demo').innerHTML=cartona








// var productNameInput = document.getElementById("productName")
// var productCategoryInput = document.getElementById("productCategory")
// var productPriceInput = document.getElementById("productPrice")
// var ProductDescriptionInput = document.getElementById("ProductDescription")


// var ProductContainer=[]

// ProductContainer=JSON.parse(localStorage.getItem("product"))
// displayProduct()

// function addProduct() {

//     var ProductObj ={
//             name:productNameInput.value ,
//             category:productCategoryInput.value,
//             Price:productPriceInput.value,
//             description:ProductDescriptionInput.value,
//     }
//     ProductContainer.push(ProductObj)
//     localStorage.setItem("product" , JSON.stringify(ProductContainer))
//     displayProduct()
//     }



// function displayProduct() {
//     var cartona =``;
// for(var i=0; i<ProductContainer.length;i++) {

//     cartona+= `
//     <tr>
//     <td>${i}</td>
//     <td>${ProductContainer[i].name}</td>
//     <td>${ProductContainer[i].category}</td>
//     <td>${ProductContainer[i].Price}</td>
//     <td>${ProductContainer[i].description}</td>
//     <td> <button class="btn btn-danger" onclick="deleteProduct(${i})" >Delete</button></td>
//     <td> <button class="btn btn-success" >Update</button></td>

//  </tr>
//     `
// }

// document.getElementById("demo").innerHTML=cartona
// }


// function deleteProduct(index) {
//     ProductContainer.splice(index,1)
//     localStorage.setItem("product" , JSON.stringify(ProductContainer))
//     displayProduct()
// }


var productName=document.getElementById("productName");
var productCategory=document.getElementById("productCategory");
var productPrice=document.getElementById("productPrice");
var ProductDescription=document.getElementById("ProductDescription");
var allProducts=[];
var id=''
var button="add"

if(localStorage.getItem("products") != null) {

    allProducts = JSON.parse(localStorage.getItem("products"));
    displayProduct();
}



function addProduct() {


    var product={
        name:productName.value,
        catgeory:productCategory.value,
        price:productPrice.value,
        desc:ProductDescription.value,

    } 

    if(button==="add") {
        allProducts.push(product)


    } 
    else {
        allProducts[id]=product;
        button="add"
        document.getElementById("addProd").innerHTML="Add Product"


    }
      localStorage.setItem("products",JSON.stringify(allProducts))
     clearProdcut()
     displayProduct(allProducts)
 

  
}

function clearProdcut() {
    productName.value=""
    productCategory.value=""
    productPrice.value=""
    ProductDescription.value=""
}

function displayProduct(){

    var cartona=""



    for(var i=0 ; i<allProducts.length;i++){

        cartona+=`        <tr>
        <td>${i}</td>
        <td>${allProducts[i].name}</td>
        <td>${allProducts[i].catgeory}</td>
        <td>${allProducts[i].price}</td>
        <td>${allProducts[i].desc}</td>
        <td><button class="btn btn-danger" onclick=" deleteProduct(${i})">Delete</button></td>
        <td><button class="btn btn-warning" onclick='updateProducts(${i})')">Update</button></td>

       
    </tr>`

    }

    document.getElementById("demo").innerHTML=cartona
    temp=i

}


function deleteProduct(index) {

   allProducts.splice(index,1)
    localStorage.setItem("products",JSON.stringify(allProducts))
   
    if(window.confirm("are you sure to delete?")==true) {
        window.alert("Product deleted");
    } else {
    window.alert("Delete cancelled")
    }
        

    displayProduct()

}

function hideTable() {
    document.getElementById("tablee").style.visibility='hidden'
}
function showTable() {
    document.getElementById("tablee").style.visibility='visible'
}





function updateProducts(i) {

    productName.value=allProducts[i].name
    productCategory.value=allProducts[i].catgeory
    productPrice.value=allProducts[i].price
    ProductDescription.value=allProducts[i].desc
    id=i;
    document.getElementById("addProd").innerHTML="Update Your Product"
    button="update"


}

function searchProducts(term) {

    // var matchedTerm=[];
    
    var cartona=""



    for(var i=0 ; i<allProducts.length;i++)
    
    
    {
        if(allProducts[i].name.toLowerCase().includes(term.toLowerCase()) == true) {
        
            cartona+=`        <tr>
            <td>${i}</td>
            <td>${allProducts[i].name}</td>
            <td>${allProducts[i].catgeory}</td>
            <td>${allProducts[i].price}</td>
            <td>${allProducts[i].desc}</td>
            <td><button class="btn btn-danger" onclick=" deleteProduct(${i})">Delete</button></td>
            <td><button class="btn btn-warning" onclick='updateProducts(${i})')">Update</button></td>
    
           
        </tr>`  

           
        }
 }
    
    
       
 document.getElementById("demo").innerHTML=cartona


    }




//     // var regx = /^[A-Z][a-zA-Z]{5,10}$/
//     // console.log( regx.test("ibrahim"));

//     // var regx = /[1-7][0-9]|(80)/
//     // console.log(regx.test(81));

//     // var regx = /(tv|mobile|device)/
//     // console.log(regx.test("mobile"));




//     var regx = /(\w*){0,500}/

//     console.log(regx.test(0));


// var regx = /[A-Za-z0-9]{0,500}/





// var productName = document.getElementById("productName");
// var productCategory = document.getElementById("productCategory")
// var productPrice = document.getElementById("productPrice")
// var ProductDescription = document.getElementById("ProductDescription")
// var kobry= 0;

// var prodcutArray=[]
// prodcutArray= JSON.parse(localStorage.getItem("prodcutArray"))
// displayProduct(prodcutArray)





// function addProduct() {
//     if(document.getElementById("addProd").innerHTML == "Add") {

//         var product = {
//             name:productName.value,
//             category:productCategory.value,
//             price:productPrice.value,
//             desc:ProductDescription.value,
    
    
    
//         }
//         prodcutArray.push(product)
//         localStorage.setItem("prodcutArray" ,JSON.stringify(prodcutArray))
//         clearProdcut();
//         displayProduct(prodcutArray);


//     } else {

//         var updatedProduct = {
//             name:productName.value,
//             category:productCategory.value,
//             price:productPrice.value,
//             desc:ProductDescription.value,
    
    
    
//         }

//         prodcutArray.splice(kobry,1,updatedProduct)
//         displayProduct(prodcutArray)
//         clearProdcut()
//         document.getElementById("addProd").innerHTML="Add"

//     }

//     }





// function clearProdcut() {
//     productName.value=""
//     productCategory.value=""
//     productPrice.value=""
//     ProductDescription.value=""

// }


// function displayProduct(arry) {

//     var cartona=""
//     for(var i=0 ; i < arry.length ; i++) {

//         cartona += `
        
        
//         <tr>
//         <td>${i}</td>
//         <td>${arry[i].name}</td>
//         <td>${arry[i].category}</td>
//         <td>${arry[i].price}</td>
//         <td>${arry[i].desc}</td>
//         <td><button onclick="deleteProduct(${i})" class="btn btn-danger ">Delete</button></td>
//         <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
//     </tr>

        
//         `



//     }

//     document.getElementById("demo").innerHTML=cartona

// }

// function deleteProduct(index) {

// prodcutArray.splice(index,1)
// localStorage.setItem("prodcutArray" ,JSON.stringify(prodcutArray))

// displayProduct(prodcutArray);

// }

// //realtime search
// function search (term) {
// var searchedElements=[];

// for(i=0;i<prodcutArray.length;i++) {
//     if(prodcutArray[i].name.indexOf(term)==0 || prodcutArray[i].category.indexOf(term)==0) {
//     searchedElements.push(prodcutArray[i])
    
//     }

// }

// displayProduct(searchedElements)
// }


// function updateProduct(index) {

//     kobry=index
//     productName.value=prodcutArray[index].name
//     productCategory.value=prodcutArray[index].category
//     productPrice.value=prodcutArray[index].price
//     ProductDescription.value=prodcutArray[index].desc

//     document.getElementById("addProd").innerHTML="Edit Product"
    


// }