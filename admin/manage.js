// Accessing all the elements from HTML
let tbody=document.getElementById("tripDetails");
let Delete="https://www.google.com/imgres?imgurl=https%3A%2F%2Ft4.ftcdn.net%2Fjpg%2F03%2F46%2F38%2F39%2F360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg&imgrefurl=https%3A%2F%2Fstock.adobe.com%2Fsearch%2Fimages%3Fk%3Ddelete&tbnid=7CJRL_9ckA7TXM&vet=12ahUKEwiOrrLm-9b8AhUZgGMGHVPHCuEQMygsegUIARDEAg..i&docid=BhP2LzDdiYNIYM&w=360&h=360&q=delete%20%20image&hl=en&ved=2ahUKEwiOrrLm-9b8AhUZgGMGHVPHCuEQMygsegUIARDEAg"
let baseurl="https://648977ba5fa58521caafa573.mockapi.io"



// Fetching Data From API

fetch("https://648977ba5fa58521caafa573.mockapi.io/tours")
.then((res)=>{
    return res.json();
})
.then((actData)=>{
    Trips(actData)
})
.catch((error)=>{
    console.log(error)
})



// Creating Dom

function Trips(Data){

    // Creating elements For Each trips

    Data.forEach(function(item,name){
        let div=document.createElement("tr");
        let ID=document.createElement("td");
        ID.innerText=item.id;
        let Destination=document.createElement("td");
        Destination.innerText=item.destination;
        let Name=document.createElement("td");
        Name.innerText=item.title;
        let duration=document.createElement("td");
        duration.innerText=item.duration;
        let Price=document.createElement("td");
        Price.innerText=`Rs `+item.price;
        let Imagetd=document.createElement("td");
        let Image=document.createElement("li");
        Image.className="bx bxs-trash";


        // Deleting function onclicking
        Imagetd.addEventListener("click",()=>{

            console.log(item.id);

            fetch(`${baseurl}/tours/${item.id}`,{
                method:'DELETE',
                headers:{
                    'Content-Type':'application/json'
                }
        
            })
            .then((res)=>{
                return res.json
            })
            .then((data)=>{
               alert("Trips Deleted Succesfully")
            })
            .catch((error)=>{
                console.log(error)
            })
        })


        // Appending Created Elements
        Imagetd.append(Image);
        div.append(ID,Destination,Name,duration,Price,Imagetd);
        tbody.append(div);

    })

    
}

