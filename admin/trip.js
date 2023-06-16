// Accessing all the elements from HTML
let tbody=document.getElementById("tripDetails");



// Fetching Data From API

fetch("https://648977ba5fa58521caafa573.mockapi.io/tours")
.then((res)=>{
    return res.json();
})
.then((actData)=>{
    console.log(actData);
    Trips(actData)
})
.catch((error)=>{
    console.log(error)
})



// Creating Dom

function Trips(Data){

    // Creating elements For Each Products

    Data.forEach(function(item,name){
        let div=document.createElement("tr");
        let ID=document.createElement("td");
        ID.innerText=item.id;
        let Destination=document.createElement("td");
        Destination.innerText=item.destination;
        let Name=document.createElement("td");
        Name.innerText=item.title;
        let  Duration=document.createElement("td");
        Duration.innerText=item.duration;
        let Price=document.createElement("td");
        Price.innerText=item.price;
        let Imagetd=document.createElement("td");
        let Image=document.createElement("img");
        Image.setAttribute("src",item.image[2]);


        // Appending Created Elements
        Imagetd.append(Image);
        div.append(ID,Destination,Name,Duration,Price,Imagetd);
        tbody.append(div);

    })

    
}

