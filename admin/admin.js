// Accesing All The elements From Html
let baseurl=`https://648977ba5fa58521caafa573.mockapi.io`
let TotalProductCount=document.getElementById("totaltrip")

// Getting Number of Products
fetch(`${baseurl}/tours`)
    .then(res=>res.json())
    .then(data=>{
       TotalProductCount.innerText=data.length
})
