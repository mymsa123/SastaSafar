// Accesing All The elements From Html
let baseurl=
let TotalProductCount=document.getElementById("totalProducts")

// Getting Number of Products
fetch(`${baseurl}/tours`)
    .then(res=>res.json())
    .then(data=>{
       TotalProductCount.innerText=data.length
})
