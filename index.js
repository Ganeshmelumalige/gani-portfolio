document.querySelector('.hamberger').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
})

// let submit=document.getElementById('sub')

// submit.onclick=()=>{alert('your info is receved by Ganesh')}

let search=document.getElementById('sea')
let input=document.getElementById('input')
let btn=document.getElementById('bttn')

btn.onclick=()=>{
    document.getElementById('myAnchor').href=`/${input.value}.html`
}

input.addEventListener('keydown',function(e){
    if(e.key=='Enter'){
        e.preventDefault()
        document.getElementById('bttn').click() 
    }
})