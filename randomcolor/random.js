const tb=document.getElementById('tab')

tb.addEventListener('click',function(){
    const randomcolours=['red','blue','green','black','orange','red','orangered','gray','grey']
    const len=randomcolours.length-1
    const rc= randomcolours[Math.floor(Math.random()*len)]
    tb.style.background=rc
})