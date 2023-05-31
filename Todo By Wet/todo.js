const text=document.getElementById('textbox')

const btn=document.querySelector('.add')

btn.addEventListener('click',textAdd)

function textAdd(){
    let count=0
    const uol=document.querySelector('.main')
    const additem =document.createElement('li')
    const content=text.value
    const list=document.getElementsByTagName('li')
    const check=/^\s*$/
   
    for (let i = 0; i < list.length; i++) {
        if (list[i].textContent.toLowerCase().trim() === content.toLowerCase().trim()) {
          count++
          break
        }
    }
    if(check.test(content)){
        alert("Please enter some input")
    }
    else if(count===0){
    additem.innerText=content
    uol.appendChild(additem)
    text.value=null
}
    else{
        alert("The Item cannot be added into the To-Do List")
    }
}
