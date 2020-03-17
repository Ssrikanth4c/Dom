//capsLock ON
var caps= document.getElementById('caps')
caps.addEventListener('click', capsLock)
var flag = 0, count=0

function capsLock() {
    //default -- black color means "OFF" mode
    if(flag){
        caps.style.border = '2px solid black'
        flag=0
        keyboard.addEventListener('click', keyboardInput)
        
        //capsLock "OFF"
        console.log("capslock Off")
        //convert  alphabets to small case
        return false
    }else if(!flag) { //!0 ture
        caps.style.border = '2px solid green'
        flag = 1
        //capslock "ON"
        console.log("capslock On")
        return true
        
    } 
    console.log(count)
    count++
}


//concatenate input from k/b
var keyboard= document.querySelector('.keyboard')
var inputConcatenation=''

function keyboardInput(){
    inputConcatenation+=String(event.target.textContent)
    // console.log(inputConcatenation)
    
    // display concatenated input on input box
    var inputBox= document.querySelector('.inputBox')
    inputBox.textContent=''
    inputBox.textContent=inputConcatenation
    // clearInput()
}

//deleate last ele
var del = document.getElementById('del')
del.addEventListener('click', removeLastCh)
function removeLastCh(){
    var delLastele= inputConcatenation
    console.log(inputConcatenation+" len "+ delLastele.length)
}




// clear Input
var clear= document.querySelector('.inputBox')
clear.addEventListener('click', clearInput)
function clearInput(){
    clear.innerHTML=''
    inputConcatenation=''
}