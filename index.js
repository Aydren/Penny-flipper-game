let maxNumber = 2

//HTML selected elements
let actionBtn = document.querySelector('.action-btn')
let objectImg = document.querySelector('.object-img')
let resultHeader = document.querySelector('.result-header')

/* console.log(actionBtn, objectImg, resultHeader) */

// html table cell element
let resultOneCount = document.querySelector('.result-one-cnt')
let resultOnePercent = document.querySelector('.result-one-percent')
let resultTwoCount = document.querySelector('.result-two-cnt')
let resultTwoPercent = document.querySelector('.result-two-percent')
/* console.log(resultOneCount, resultOnePercent, resultTwoCount, resultTwoPercent) */


//event listener for flip a button
actionBtn,addEventListener('click', function(){
    let randomNumber = Math.ceil(Math.random() * maxNumber)
    if(randomNumber === 1){
        console.log('it was one')
    } else {
        console.log('it was two')
    }
})
