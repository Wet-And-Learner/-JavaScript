var score=0

const incount=document.querySelector('.sub1')
const decount=document.querySelector('.sub2')

incount.addEventListener('click',inClickEvent)
decount.addEventListener('click',deClickEvent)

function inClickEvent(){
    score++
    document.getElementById('count').textContent='Count :' +score
}

function deClickEvent(){
    score--
    document.getElementById('count').textContent='Count :' +score
}

