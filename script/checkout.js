let chosenPackage = document.querySelector('.chosenPackage');
    let orderSummary = document.querySelector('#mainSection > h2');
    let finalCost = document.querySelector('#finalCost');
    let paymentDetails = document.querySelector('#paymentDetails');
    let chooseDate = document.querySelector('#chooseDate');

    let newBookingDate = new Date();

    const API = "https://trypot-nation-dkah.onrender.com/packages";

    let package_id = localStorage.getItem("package_id") || [];

    if (package_id.length === 0) {
        orderSummary.textContent = "No Package Selected";
        chosenPackage.innerHTML = null;
    } else {

        fetchPackageData();

        function finalizeBooking (){
            if(paymentDetails.textContent == ""){
                alert("Please select a payment method");
            }else if(chooseDate.value == ""){
                alert("Please select a date");
            }else{
                let package_name = document.querySelector('.packageInformation > h3');
                console.log({
                    package_name : package_name.textContent,
                    tourdate : chooseDate.value,
                    timestamp : String(newBookingDate),
                    bill : Number(finalCost.textContent)
                });
            }
        }

        function selectPayment(value) {
            if (value == "cash") {
                paymentDetails.textContent = "Note: You have to pay on Arrival";
            }else {
                paymentDetails.textContent = "Please use the cash option to pay";
            } 
        }

        async function fetchPackageData() {
            try {
                let res = await fetch(`${API}?id=${package_id}`);
                let data = await res.json();
                chosenPackage.innerHTML = null;
                data.forEach(element => {
                    chosenPackage.append(createPackageCard(element));
                });

            } catch (error) {
                console.log(error);
            }

        }

        function createPackageCard(element) {
            let div = document.createElement('div');
            div.className = "packageCard";
            div.style.wordWrap = "break-word";
            div.innerHTML = `<div class="imgHolder">
                        <img src="${element.image[0]}" width="100vw" class="packageImg" alt="">
                    </div>
                    <div class="packageInformation">
                        <p>${element.duration}</p>
                            <h3>${element.title}</h3>
                            <p>${element.destination}</p>
                        <div class="inputPersonCount">
                            <p>Total Member : </p>
                            <button class="addMember">+</button>
                            <input type="number" value="1" class="memberCount" min="1">
                            <button class="removeMember">-</button>
                        </div>
                    </div>
                    <div class="packagePrice">${element.price}</div>`;
            finalCost.textContent = element.price;
            let price = div.querySelector('.packagePrice');
            let memberCount = div.querySelector('.memberCount');
            let addMember = div.querySelector('.addMember');
            addMember.addEventListener('click', () => {
                memberCount.value++;
                price.textContent = Number(price.textContent) + element.price;
                finalCost.textContent = price.textContent;
            })
            let removeMember = div.querySelector('.removeMember');
            removeMember.addEventListener('click', () => {
                memberCount.value--;
                if(Number(memberCount.value) == 0){
                   emptyCart();
                }
                price.textContent = Number(price.textContent) - element.price;
                finalCost.textContent = price.textContent;
            })
            return div;
        }

        function emptyCart(){
            let packageCard = document.querySelector('.packageCard');
                    localStorage.removeItem('package_id');
                    packageCard.innerHTML = "";
                    window.location.reload();
        }
    }
