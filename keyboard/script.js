//capsLock ON
var caps= document.getElementById('caps')
caps.addEventListener('click', capsLock)

var flag = 0, count=0
function capsLock() {
    //default -- black color means "OFF" mode
    if(flag){
        caps.style.color = 'black'
        flag=0
        //capsLock "OFF"
        console.log("capslock Off")
        //convert  alphabets to small case
        return false
    }else if(!flag) { //!0 ture
        caps.style.color = 'green'
        flag = 1
        //capslock "ON"
        console.log("capslock On")
        return true

    } 
// console.log(count)
count++
}

// shift ON:
var shift= document.getElementById('shift')
shift.addEventListener('click', shiftToNum)
var shiftFlag=false
function shiftToNum(){
    //shift OFF
    if(shiftFlag){
        shift.style.color='black'
        shiftFlag=false
        console.log(' shift-false')
    }else if(!shiftFlag){
        shift.style.color='green'
        shiftFlag=true
        console.log(' shift-true')
    }
}



function getNum(num){
    var numObj={
        1:'!',
        2:'@',
        3:'#',
        4: '$',
        5:'%',
        6:'^',
        7:'&',
        8:'*',
        9:'(',
        0:')'
    }
    // shiftFlag=false;
    console.log('sd')
    if(shiftFlag){
        concat+=num
    }else{
        console.log(numObj[num]+'-'+ shiftFlag)

    }
}

console.log('default shift'+ shiftFlag)
var numSendToConcat


var concat='', inputConcatenation=''
//concatenate input from k/b
var keyboard= document.querySelector('.keyboard')
keyboard.addEventListener('click', keyboardInput)

alpha=document.querySelector('.alphabetKeys')
var inputBox= document.querySelector('.inputBox')

function keyboardInput(){
    if(flag || shiftFlag){
        // console.log('on')
        alpha.addEventListener('click',alphaRowOne)
        function alphaRowOne(){
            // concat=''
            concat+= event.target.textContent
            console.log(concat.length)
            inputBox.textContent=concat
        }

        // 
    }else if(!flag || !shiftFlag){
        concat+=event.target.textContent.toLowerCase()
        inputBox.textContent=concat
        // console.log('off')
    }     
    
}
//deleate last ele
var del = document.getElementById('del')
del.addEventListener('click', removeLastCh)
function removeLastCh(){
    var delLastele= inputConcatenation
    console.log(inputConcatenation+" len "+ delLastele.length)
}

//passwd
var passwd= document.getElementById('passwd')
passwd.addEventListener('click',password)
var passwdFlag=true
var tobeProtect= document.querySelector('.inputBox') 
input= concat
function password(){
    if(passwdFlag){
        // ON
        var pswd=''
        console.log(concat)
        if(concat.length){
            
            for(var i=0; i<concat.length-1; i++){
                pswd+='*'
            }
            tobeProtect.textContent= pswd+concat[concat.length-1]
            passwd.style.color='green'
            passwdFlag=false
        }
    }else if(!passwdFlag){
        // Off
        console.log(concat)
        tobeProtect.textContent=concat;
        passwd.style.color='black'
        passwdFlag=true
    }

}
// hide the abused words
var obsceneWords=['ass','sex','bbw','butt','fuck','handjob','nipple','nude','nudity','octopussy']
var clean= document.getElementById('clean')
clean.addEventListener('click', hideAbusedWord)
var cleanFlag=false;
hideAbused=document.querySelector('.inputBox')

function hideAbusedWord(){
    var abuseInput=hideAbused.textContent
    
    if(!cleanFlag){

        clean.style.color='green'
        // no abused word
        if(obsceneWords.indexOf(abuseInput)==-1){
            hideAbused.textContent= abuseInput
            
        }else{
            // replace char with * exclude first and last char
            var hide=''
            for(var i=1; i< abuseInput.length-1; i++){
                hide+='*'
            }
            hideAbused.textContent=abuseInput[0]+hide+abuseInput[abuseInput.length-1]
            console.log('clean green else\n'+ hide)
        }
        // console.log("cleanFlag green")
        cleanFlag=true

    }else if(cleanFlag){
        console.log('clean black')
        clean.style.color='black'
        cleanFlag=false
        hideAbused.textContent=concat
    }
}

// reverse mode
var reverse= document.getElementById('rev')
reverse.addEventListener('click',reverseMode)
var reverseInput= document.querySelector('.inputBox')
var reverseFlag=true
function reverseMode(){
    var input= reverseInput.textContent
    console.log(input)
    if(reverseFlag){
        reverse.style.color='green'
        input=input.split('').reverse().join('')
        console.log(input)  
        reverseInput.textContent=input      
        reverseFlag=false
    }else if(!reverseFlag){
        reverse.style.color='black'
        reverseInput.textContent=concat
        reverseFlag=true
    }
}

// clear Input
var clear= document.querySelector('.inputBox')
clear.addEventListener('click', clearInput)
function clearInput(){
    clear.innerHTML=''
    inputConcatenation=''
    concat=''
}
