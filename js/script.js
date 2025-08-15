// // // const btn = document.getElementById("changeMe");
// // console.log(document.getElementById("changeMe")); 
// // // console.log(btn); 

// const { createElement } = require("react");

// // // const element =  document.querySelector("#")
// // // const element =  document.querySelector("");
// // // const element =  document.querySelector(".")
// // let parag = document.querySelector("#first")
// // let parag2 = document.querySelector("#second")
// // // parag.innerText = "HOllllllla"
// // // parag.textContent = "HOllllllla"
// // // parag.innerHTML = "<strong>Bold message</strong>";

// // // parag.style.color = "red";
// // // parag.style.backgroundColor = "yellow";



// // const btn = document.querySelector("#changeMe")
// // btn.addEventListener("click", function(){
// //     const newDiv = document.createElement("div"); //<div></div>
// //     newDiv.textContent = "I’m new here!";//<div>"I’m new here!"</div>
// //     document.body.appendChild(newDiv);
// //     parag2.style.display = "none"
// //     document.body.removeChild(parag)

// //     const link =document.createElement("a");//<a></a>
// //     link.getAttribute("href");//<a href></a>
// //     link.setAttribute("href", "https://example.com");//<a href="https://example.com"></a>
// //     document.body.appendChild(link)

// // })
function clicked(){
    let element = document.createElement('li');
    let listItem = document.querySelector("#todoList").value;
    element.innerText = listItem;
    document.querySelector("#todoList").value = "";
    let ol = document.querySelector("#randoms")
    element.classList.add("listBox")
    ol.appendChild(element)
    // document.querySelector("#removed").classList.toggle("listBox")
}
// function areaChange(){
//     let value = document.getElementById("textarea1").value;
//     console.log(value); // Logs the text inside the input
// }

// // document.querySelector("#notBtn").addEventListener("click", function(e){
// //     e.preventDefault()
// //     console.log("prevented the default")
// // })


//Event delegation 

document.querySelector("#randoms").addEventListener("click", function(e){
    console.log(e.target.getAttribute('id') + " is clicked")
    const target = e.target;
    if (target.matches('li')){
            target.style.backgroundColor = "yellow"
    }else{
            target.style.backgroundColor = "orange"
    }
})


window.addEventListener("click", function () {
        let ol = document.querySelector("#first");
        ol.style.color="red"
})
