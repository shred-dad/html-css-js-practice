let saveEl = document.querySelector("#save-el")
let countEl = document.querySelector("#count-el")
let errorEl = document.querySelector("#error")
let count = 0

function increment() {
    count++
    countEl.textContent = count
    errorEl.textContent = ""
    console.log(count)
}

function decrement() {
    count--
    countEl.textContent = count
    errorEl.textContent = ""
    console.log(count)
}

function save() {
    let countStr = count

    if (count < 5) {
        errorEl.textContent = "Cannot save less than 5, please continue"
        countStr = ""
        saveEl.textContent += countStr
    } else {
        countEl.textContent = count
        errorEl.textContent = ""
        let last2 = saveEl.textContent.slice(saveEl.textContent.length - 2, saveEl.textContent.length)
        if (last2 != ": ") {
            countStr = " - " + count
        }
        console.log(countStr)
        saveEl.textContent += countStr
        // alert("this result: " + count)
        count = 0
        countEl.textContent = count
    }


}


