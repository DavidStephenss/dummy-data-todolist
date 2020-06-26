// We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.
// let userID = null
let arrayOfTodos = [
    {
    "userId": 14,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  },
  {
    "userId": 20,
    "id": 2,
    "title": "delectus aut autem",
    "completed": false
  }]

  let fontColor = ""

  const fetchTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then( (response) => response.json())
    .then( (json) => arrayOfTodos = json)
  }
  
  const userNum = (num) => {
    x = parseInt (num)
    console.log(num)
  } 

  const logTodos = () => {
    console.log(arrayOfTodos)
  }

  let x=""

  const populateAllTodos = () => {
        populateTodos(arrayOfTodos)} 

  const populateTodos = (arr) => {
      let newElement = document.getElementById("todo-list")
    
      for (let i = 0; i < arr.length; i++){
        
        let newLi = document.createElement('Li')
        let newH1 = document.createElement('H1')
        let newH2 = document.createElement('H2')
        let newH3 = document.createElement('H3')
        let newH4 = document.createElement('H4')


        let userId = document.createTextNode(arr[i].userId)
        newH1.appendChild(userId)
        let id = document.createTextNode(arr[i].id)
        newH2.appendChild(id)
        let title = document.createTextNode(arr[i].title)
        newH3.appendChild(title)
        let completed = document.createTextNode(arr[i].completed)
        newH4.appendChild(completed)

        newElement.appendChild(newLi)
        newLi.appendChild(newH1)
        newLi.appendChild(newH2)
        newLi.appendChild(newH3)
        newLi.appendChild(newH4)

        if (arr[i].completed === false) {
          fontColor = 'green'
        } else {
          fontColor = 'red'
        }
      newH4.style.color=fontColor
  }
}

// fetch same data

//store in a variable

// add input to take in 1-10

//add buttons for clear, populate 


// const storeID = (value) => {
//   userID = value 
// }

const showUserID = () => {
let result = arrayOfTodos.filter(function(numID) {
  return numID.userId === x
  })
  populateTodos(result)
}

const showCompleted = () => {
 let arrayOfCompletedTodos = arrayOfTodos.filter(function(todo) {
  return todo.completed === true  
  })
  populateTodos(arrayOfCompletedTodos)
}

const showUncompleted = () => {
  let arrayOfUncompletedTodos = arrayOfTodos.filter(function(todo) {
   return todo.completed === false  
   })
   populateTodos(arrayOfUncompletedTodos)
 }


 const clearList = () => {
  const arrayOfTodos=document.getElementsByTagName("OL")
  for (i=0; i < arrayOfTodos.length; i++)
  arrayOfTodos[i].innerHTML=null
 }

 //VS code sucks. I did my best lol.//
 