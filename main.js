let msg=document.getElementById('msg')
let btn=document.getElementById('sub')
let text=document.getElementById('finalmsg')

const show=()=>{
    text.innerHTML=msg.value
    return text
}