let grocery = document.getElementsByClassName("grocery")[0];
let btn = document.getElementById("btn");
let input = document.getElementById("userInput");
let items = document.getElementById("items");

btn.addEventListener("click", () => {
    items.innerHTML = "";
})

input.addEventListener("keydown", (event) => {
    if (event.key == "Enter")
        addItem();
})

function addItem() {
    var h2 = document.createElement("h2");
    h2.innerHTML = "- " + input.value;

    h2.addEventListener("click",
        () => {
            h2.style.textDecoration = "line-through";
        })
    items.insertAdjacentElement("beforeend",
        h2);
    input.value = "";
}