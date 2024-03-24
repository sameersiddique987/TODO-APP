function renderTodo() {

    div.innerHTML= ""
    for (let i = 0; i < arr.length; i++) {
        div.innerHTML += ` <div class="container border p-4 rounded mt-2 d-flex justify-content-end  align-items-start  mt-3">
        <div><h1>${arr[i]}</h1></div>
        
        <div>
        <button onclick="deleteTodo(${i})"  type="button" class="btn btn-danger "><i class="fa-solid fa-trash"></i></button>
        
        <button onclick="editTodo(${i})" type="button" class="btn btn-warning "><i class="fa-regular fa-pen-to-square"></i></button>
        </div>
        
        
        
        
        </div>
        
        `
        
    }
}
let input = document.querySelector("#input")
let div = document.querySelector("#todos");
let arr = [];



function button() {
    
    
    arr.push(input.value)
    console.log(arr);
renderTodo()
   input.value =""
}

function deleteTodo(index) {
    // console.log("delete==>",index );
    arr.splice(index , 1 )
    console.log(arr);
    renderTodo()
}

function editTodo(index) {
const updatedVal = prompt("enter updated walue")
arr.splice(index , 1 , updatedVal)
renderTodo()
}








