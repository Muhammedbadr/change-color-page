let btn = document.getElementById("btn")
let box = document.getElementById("box")
let body = document.querySelector("body")
var colors =["red","green","orange","orchid", "red","green","orange","orchid"]
var i = 0
// btn.onclick = function(){
//     box.style.backgroundColor = colors[i]
//     btn.style.border = `2px solid ${colors[i]}`
//     i++

//     if(i == 7)
//     {
//         i = 0
//     }
// }

btn.addEventListener("click" , function(){ 
    body.style.backgroundColor = colors[i]
    i++
    

    if(i == 7)
    {
        i = 0
    }
})