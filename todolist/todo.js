const inputEl = document.getElementById("input-el")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
let myNotes = []
let notesfromStorage = JSON.parse(localStorage.getItem("myNotes"))

function render(array) {
    let notes = ""
    for (let i = 0; i < array.length; i++) {
        notes +=`<li>${array[i]}</li>`
    }
ulEl.innerHTML = notes
}

if (notesfromStorage) {
    myNotes = notesfromStorage
    render(myNotes)
}

saveBtn.addEventListener("click", function () {
    myNotes.push(inputEl.value)
    localStorage.setItem("myNotes",JSON.stringify(myNotes))
    inputEl.value = ""
    render(myNotes)
})

deleteBtn.addEventListener("dblclick", function (params) {
    localStorage.clear()
    myNotes = []
    render(myNotes)
})

// const deleteNote = document.getElementById("delete")
// deleteNote.addEventListener("click", function () {
//     console.log(myNotes)
// })







