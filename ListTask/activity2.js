let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let ipt = document.querySelector("input");


btn.addEventListener("click", function (e) {
    let item = document.createElement("li")
    item.innerText = ipt.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    ul.appendChild(item);
    item.appendChild(delBtn)

    console.log(ipt.value)
    ipt.value = "";


});

ul.addEventListener("click", function (event) {
    if (event.target.nodeName == "BUTTON") {
        let ListItem = event.target.parentElement;
        ListItem.remove();
        console.log("delete");

    } else {
        console.log("don't Delete")
    }

})









// let delBtns = document.querySelectorAll(".delete");
// for (delBtn of delBtns) {
//     delBtn.addEventListener("click", function () {
//         let per = this.parentElement;
//         per.remove();


//     })
// }