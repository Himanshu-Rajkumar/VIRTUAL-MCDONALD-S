let imageProcess = document.getElementById("imageProcess")


let Images = {
    Pizza: "Pizza.jpg",
    Salad: "Salad.jpeg",
    Pasta: "Pasta.jpeg",
    Pancakes: "Pancakes.jpg",
    Samosa: "Samosa.jpeg",
    Sushi: "Sushi.webp",
    tacos: "tacos.jpg",
};


function getRandomSeconds() {
    return Math.floor(Math.random() * (5 - 2 + 1) + 2) * 1000;
}

function Orderfood() {
    let ContainerItems = Array.from(document.querySelectorAll('input:checked')).map(item => item.value);

    if (ContainerItems.length === 0) {
        alert("Please Select at least one Food item");
        return;
    }
    document.getElementById("imageProcess").innerText = " Ordered Food is processing..."
    let promise = new Promise(function (resolve) {
        setTimeout(() => {
            resolve()
        }, getRandomSeconds());
    })
    promise.then(() => {
        let randomId = getRandomId()
        displayFoodItems(randomId, ContainerItems)
    })
    const orderPromise = new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, getRandomSeconds());
    });

    orderPromise.then(() => {
        const randomId = getRandomId();
        displayFoodItems(randomId, ContainerItems);
    });
}

function getRandomId() {
    return Math.floor(Math.random() * (5 - 2 + 1) + 2) * 1000
}

function displayFoodItems(randomId, items) {
    let imageProcess = document.getElementById("imageProcess")
    let imagesHTML = items.map(item => `<img src="${Images[item]}" alt="${item}">`).join('');
    imageProcess.innerHTML = `
        <div style="text-align: right; margin-top: 10px;">Order ID: ${randomId} </div>
        <div style= margin-top: 10px;"> Your Ordered Food (${items.join(',')})is Ready!!</div>
        <div >  ${imagesHTML} </div>
   `

}
