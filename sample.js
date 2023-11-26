
const test = document.getElementById("list") 

test.addEventListener(
    "mouseover",
    (event) => {
      document.getElementById("list").classList.add("myStyle");
    }, 
  test.addEventListener("mouseout",(event) => {
    document.getElementById("list").classList.remove("myStyle")
  })
)




function changecolor(){
    let x = document.getElementById('bubble')
 if (x.style.backgroundColor = "red"){
   document.getElementById('bubble').style.backgroundColor = "green"}
 }


function submitClick(event){
  let warn = "You are not authorized to perform this action"
  document.getElementById("output").innerHTML += warn
  event.preventDefault()
}

// Nu inteleg exact de ce nu functioneaza exercitiul 4

eventTarget.addEventListener("keydown", (event) => {
  if (event.keyCode === 13){
   const text = document.createElement("p")
   text.innerText = "This document has been created automatically"
   document.body.appendChild("text")
  }
})

