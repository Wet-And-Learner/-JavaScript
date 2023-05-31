var inputtext =document.getElementById('textbox')

const btn1=document.querySelectorAll('.btn')

let input=''
let last,update

for(let i=0;i<btn1.length;i++){
    btn1[i].addEventListener('click',function(){
        input=btn1[i].innerText
        if(input=='='){
            compute()
        }
         else if(input=='AC'){
            if(inputtext.value.length==0){
                alert('Give me some input')
            }
            else{
                inputtext.value=''
            }
        }
        else if(input=='Del'){
           if(inputtext.value.length==0){
            alert('Give some input')
           }
           else{
            last=inputtext.value
            update=last.substring(0,last.length-1)
            inputtext.value=update
           }
        }
        else{
            inputtext.value+=input
        }
    })
}

function compute(){
    let enteredInput=inputtext.value
    let inputLength=enteredInput.length
    let result=0
    if(inputLength==1){
        alert('Give some input')
        inputtext.value=''
    }
    result=eval(enteredInput)
    alert(`The result is ${result}`)
    inputtext.value=''
    }