// Accesing All The elements From Html

let Id=document.getElementById("id");
let Name=document.getElementById("name");
let Destination=document.getElementById("destination");
let Desc=document.getElementById("description");
let Price=document.getElementById("price");
let Duration=document.getElementById("duration");
let Image=document.getElementById("imageurl");
let AddButton=document.getElementById("Add");
let UpdateButton=document.getElementById("Update");
let GetButton=document.getElementById("Get");
let baseurl="https://648977ba5fa58521caafa573.mockapi.io";
let Idvalue=Id.value;
let TotaltripsCount=document.getElementById("totaltrips");
let updateimage=document.getElementById("updateImage");

let showdesti=document.getElementById("h3destination");
let showname=document.getElementById("h3name");
let showprice=document.getElementById("h3price");
let showdesc=document.getElementById("desc");


// Getting Number of Trips
fetch(`${baseurl}/tours`)
    .then(res=>res.json())
    .then(data=>{
       TotaltripsCount.innerText=data.length
    })


// adding the Trips to API

AddButton.addEventListener("click",()=>{
    let obj={
        destination:Destination.value,
        description:Desc.value,
        price:"Rs"+Price.value,
        image:[Image.value],
        name:Name.value,
        id:Id.value,
        Size:[8,8.5,9,10,10.5,11,13],
        color:["Black"],
        duration:Duration.value
    };
    console.log(obj)
   
    fetch(`${baseurl}/tours`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)
    })
    .then((res)=>{
        return res.json
    })
    .then((data)=>{
        
        alert("Trip Added Succesfully")
    })
})


// Getting the Trips from API

GetButton.addEventListener("click",()=>{
    let obj={
        id:Id.value
    };
    
    fetch(`${baseurl}/tours/${obj.id}`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        Destination.value=data.destination;
        Name.value=data.title;
        Desc.value=data.description;
        Price.value="Rs"+data.price;
        Duration.value=data.duration;
        Image.value=data.image;
        updateimage.src=data.image;

        showdesti.innerText=data.destination;
        showname.innerText=data.title;
        showdesc.innerText=data.description;
        showprice.innerText=data.price;

    })


})



// Updating The Trips From API

UpdateButton.addEventListener("click",()=>{
    let obj={
        destination:Destination.value,
        description:Desc.value,
        price:"Rs"+Price.value,
        image:Image.value,
        name:Name.value,
        id:Id.value,
        Size:[8,8.5,9,10,10.5,11,13],
        color:["Black"],
        duration:Duration.value
    };
    console.log(obj)
   
    fetch(`${baseurl}/tours/${obj.id}`,{
        method:'PATCH',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(obj)

    })
    .then((res)=>{
        return res.json
    })
    .then((data)=>{
       alert("Trip Updated Succesfully")
    })
    .catch((error)=>{
        console.log(error)
    })


})

