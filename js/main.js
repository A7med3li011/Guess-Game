

let guessBody = document.querySelector(".guessBody")

let numberOfTries = 6
let numberOfLetter = 6
let numberHints = 2
let ArrOfWords = ["delete","update","insert","remove","happy","sad","egypt","school","play"]
let randomNumber = Math.floor(Math.random()*ArrOfWords.length)
let randomWord = ArrOfWords[randomNumber]

let numberOftry = 1
let btnagian = document.querySelector(".agian")
let play=0
let btnChecker = document.querySelector(".checker")
let btnHint = document.querySelector(".hint")
btnHint.innerHTML=`${numberHints} Hint`
function createinputs(){
    for(let i = 1;i<=numberOfTries;i++){

        let tryDiv = document.createElement("div")
        tryDiv.className = "tryDiv mb-3 fs-5"
        tryDiv.id = `tryDiv-${i}`
        tryDiv.innerHTML = `Try ${i}`
        guessBody.appendChild(tryDiv)
        tryDiv.setAttribute("tryNumber",i)
    
        for(let j = 1;j<=randomWord.length;j++){
    
            let input = document.createElement("input")
            input.id = `Try-${i}-input-${j}`
            input.className = `mb-3`
            input.type = "text"
            input.maxLength = "1"
            tryDiv.appendChild(input)
        }     
    }
    // end loopssssssssssssssss
    disabledInput(numberOftry)
    focusToInput()








   
   
}



function disabledInput(number){
    let trydivs = document.querySelectorAll(".tryDiv")
    trydivs.forEach((div)=>{
        if(div.getAttribute("tryNumber") !=number)div.classList.add("disabled-div")
          
        if(div.getAttribute("tryNumber") ==number){
            
            div.classList.remove("disabled-div")
           let avilableinp = Array.from (div.children)
           avilableinp.forEach((inp)=>inp.disabled=false)
    }           
            
     
   })

   let disabledDivs =Array.from(document.querySelectorAll(".disabled-div"))
   disabledDivs.forEach((disAbledDiv)=>{
   Array.from (disAbledDiv.children).forEach((inp)=>inp.disabled = true)

   })

}


function focusToInput(){
    
    let enabledInputs = Array.from(document.querySelectorAll("input:not([disabled])"))
    
    
    enabledInputs.forEach((inp,index)=>{
        inp.addEventListener("input",(e)=>{
                
                currentvalue = enabledInputs.indexOf(e.target)+1
                    if(currentvalue <= enabledInputs.length-1 && currentvalue >= 0) {
                        enabledInputs[currentvalue].focus()
                    }
                   
                
                        


        })
        inp.addEventListener("keydown",function(e){
       
        
                        if(index <enabledInputs.length-1 && index >= 0){
            
                            if(e.key ==="ArrowRight"){
                                enabledInputs[index+1].focus()
                                
                            }
                        }
            
            
                        if(index > 0){
                            if(e.key ==="ArrowLeft"){
                                enabledInputs[index-1].focus()
                                
                            }
                        }
                    
                })

        

    })



}

btnChecker.addEventListener("click",handelCheck)
    

// function switcherINput
function handelCheck(){
   
    let correctCounter = 0
    let arrayForCheck = []
    let avilableinput = document.querySelectorAll("input:not([disabled])")

    avilableinput.forEach((inp)=>arrayForCheck.push(inp.value.toLowerCase()))
   for(let i = 0 ; i<arrayForCheck.length ; i++){

    if(arrayForCheck[i] === ""  ){
        document.querySelector( `#Try-${numberOftry}-input-${i+1}`).classList.add("wrongLetter")
    }

    if(arrayForCheck[i] === randomWord[i]){
        document.querySelector( `#Try-${numberOftry}-input-${i+1}`).classList.add("correctLetter")
        correctCounter++

    }else if(arrayForCheck[i] !== randomWord[i] &&randomWord.includes(arrayForCheck[i])){
        document.querySelector( `#Try-${numberOftry}-input-${i+1}`).classList.add("Semi-correctLetter")

    }else{

        document.querySelector( `#Try-${numberOftry}-input-${i+1}`).classList.add("wrongLetter")

    }

   }

//    console.log(correctCounter)

   if(correctCounter == randomWord.length){
        document.querySelector(".message").classList.remove("d-none")
        document.querySelector(".status").innerHTML="  winner"
        document.querySelector(".word").innerHTML=randomWord

        document.querySelectorAll("input").forEach((inp)=>inp.disabled=true)
        document.querySelectorAll(".tryDiv").forEach((div)=>div.classList.add("disabled-div"))
        btnChecker.classList.add("disabled")
        btnHint.classList.add("disabled")

   }else{
    play++
    

    if(play == 6){
        document.querySelector(".message").classList.remove("d-none")
        document.querySelector(".status").innerHTML=" loser"
        document.querySelector(".word").innerHTML=randomWord

        document.querySelectorAll("input").forEach((inp)=>inp.disabled=true)
        document.querySelectorAll(".tryDiv").forEach((div)=>div.classList.add("disabled-div"))
        btnChecker.classList.add("disabled")
        btnHint.classList.add("disabled")

    }else{

        
        numberOftry++
        disabledInput(numberOftry)
        focusToInput()
        console.log(play)
    }
 
   }


   
    
}


btnHint.addEventListener("click",handelHint)

function handelHint(){

    if(numberHints  > 0){
        numberHints--
        btnHint.innerHTML=`${numberHints} Hint`

    let enabledInputs = Array.from(document.querySelectorAll("input:not([disabled])"))

    let arravilableInput=[]

         arravilableInput = enabledInputs.filter((inp,indx)=>{
        return inp.value == ""
    })

    if(arravilableInput.length){

    
   let randomNumber = Math.floor(Math.random()*arravilableInput.length)
   
   let randomindex = arravilableInput[randomNumber]
   
   
   let eleChossen = enabledInputs.indexOf(randomindex)
   


   let letterToHint = randomWord[eleChossen]
   
   enabledInputs[eleChossen].value = letterToHint

}
    
    }
}

btnagian.addEventListener("click",()=>{
    location.reload()
})

window.onload = ()=>{
    createinputs()
}


























































































































































































































































// let numberOfTries = 6;
// let numberOfLetters = 6;
// let gameBody = document.querySelector(".gameBody")
// let btnChecker = document.querySelector(".checker")
// let hintNumber = 2

// let hintBtn = document.querySelector(".hint")

// let wordsList = ["create", "update", "delete", "master", "branch", "mainly", "school", "insert"]

// let randomWord = wordsList[Math.floor(Math.random() * wordsList.length)]
// let success = false


// let currentTry = 1


// document.querySelector(".hint span").innerHTML = hintNumber

// hintBtn.addEventListener("click", getHint)

// function generateInputs() {
//     for (let i = 1; i <= numberOfTries; i++) {

//         let TryDiv = document.createElement("div");
//         let span = document.createElement("span");
//         span.innerHTML = `Try ${i}`
//         TryDiv.appendChild(span)
//         TryDiv.className = `TryDiv${i} mb-3 d-flex align-items-center`        // divText = document.createTextNode(`Try ${i}`)
//         // TryDiv.appendChild(divText)
//         gameBody.appendChild(TryDiv)

//         if (i !== 1) TryDiv.classList.add("disabled-input")



//         for (let j = 1; j <= numberOfLetters; j++) {
//             let input = document.createElement("input")
//             input.id = `input-${i}-letter-${j}`
//             input.type = "text"
//             input.maxLength = "1"
//             input.className = "input-guess"
//             TryDiv.appendChild(input)
//         }
//         // document.querySelector(".gameBody").children[0].children[1].foucs()
//     }


//     gameBody.children[0].children[0].focus()
//     let alldisabledInputs = document.querySelectorAll(".disabled-input input")

//     alldisabledInputs.forEach(inp => {
//         inp.disabled = true
//     })

//     let allInputs = document.querySelectorAll("input:not([disabled])")



//     ab()

// }

// btnChecker.addEventListener("click", handelCheck)

// function handelCheck() {
//     let counter = 1
//     let checkerArray = []

//     for (let i = 1; i <= numberOfLetters; i++) {

//         let inputvalue = document.querySelector(`#input-${currentTry}-letter-${i}`).value
//         checkerArray.push(inputvalue)

//     }

//     for (let i = 1; i <= checkerArray.length; i++) {


//         if (checkerArray[i - 1] === randomWord[i - 1]) {
//             document.querySelector(`#input-${currentTry}-letter-${i}`).classList.add("correctLetter")
//             counter++

//         }

//         else if (checkerArray[i - 1] == "") {
//             document.querySelector(`#input-${currentTry}-letter-${i}`).classList.add("wrongLetter")
//             counter--
//         }

//         else if (checkerArray[i - 1] !== randomWord[i - 1] && randomWord.includes(checkerArray[i - 1])) {

//             document.querySelector(`#input-${currentTry}-letter-${i}`).classList.add("notPositionLetter")
//             counter--
//         }
//         else {
//             document.querySelector(`#input-${currentTry}-letter-${i}`).classList.add("wrongLetter")
//             counter--
//         }

//     }

//     if (counter == 7) {
//         document.querySelector(".message").classList.remove("d-none")
//         document.querySelector(".message").children[0].innerHTML = "you win"
//         document.querySelector(".spanword").innerHTML = randomWord
//         let allInputs = document.querySelectorAll("input")
//         btnChecker.classList.add("disabled")
//         allInputs.forEach((inp) => {
//             inp.classList.add("disabled-input")
//         })

//     } else {






//         document.querySelector(`.TryDiv${currentTry}`).classList.add("disabled-input")

//         let cuerenttryInputs = document.querySelectorAll(`.TryDiv${currentTry} input`)
//         cuerenttryInputs.forEach((inp) => { inp.disabled = true })
//         currentTry++
//         let el = document.querySelector(`.TryDiv${currentTry} `)
//         if (el) {
//             ab()
//             document.querySelector(`.TryDiv${currentTry}`).classList.remove("disabled-input")

//             let nextinputs = document.querySelectorAll(`.TryDiv${currentTry} input`)
//             nextinputs.forEach((inp) => { inp.disabled = false })

//         }

//         if (currentTry > 6) {
//             document.querySelector(".message").children[0].innerHTML = "you lose"
//             document.querySelector(".spanword").innerHTML = randomWord
//             document.querySelector(".message").classList.remove("d-none")
//             btnChecker.classList.add("disabled")
//         }





//     }






// }

// function ab() {
//     let allInputs = document.querySelectorAll(`.TryDiv${currentTry} input`)
//     allInputs[0].focus()

//     allInputs.forEach((input, index) => {
//         input.addEventListener("input", (e) => {
//             e.target.value = e.target.value.toLowerCase()

//             let currentinp = Array.from(allInputs)
//             if (currentinp[index + 1]) currentinp[index + 1].focus()

//         })
//     })
// }







// function getHint(){

//     if(hintNumber > 0){

//         hintNumber--
//         document.querySelector(".hint span").innerHTML = hintNumber
//     }
    
//     if(hintNumber==-0){
//         hintBtn.disabled = true
//         hintBtn.classList.add("disabled")
//     }

//     let enabledInputs = document.querySelectorAll("input:not([disabled])")
//     let emptyEnabledInputs = Array.from(enabledInputs).filter((inp)=>inp.value == "")
//     if(emptyEnabledInputs.length > 0){
//         let randomindex = Math.floor(Math.random() *emptyEnabledInputs.length)
//         let randomInput = emptyEnabledInputs[randomindex]
//         let indexToFill = Array.from(enabledInputs).indexOf(randomInput)
//         console.log(randomindex)
//         console.log(randomInput)
//         console.log(indexToFill)
//         if(indexToFill != -1){
//             randomInput.value = randomWord[indexToFill]
//         }
//     } 

// }







// window.onload = () => {
//     generateInputs()

// }
