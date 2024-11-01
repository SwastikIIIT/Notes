const createButton=document.querySelector(".btn");
const noteBox=document.querySelector(".textarea");


createButton.addEventListener("click",(e)=>{
    let input=document.createElement("p");
    input.setAttribute("contenteditable","true");
    input.innerHTML="<img src=\"images/delete.png\" class=\"delbtn\"></img>";
    noteBox.append(input);
})

noteBox.addEventListener("click",(e)=>{
    if(e.target.tagName==="IMG")
    {
      e.target.parentElement.remove();
      savedata();
    }
    else if(e.target.tagName==="P")
    {
        let OurNotesSoFar=document.querySelectorAll("p");
        OurNotesSoFar.forEach((it)=>{
            it.onkeyup=savedata;
        })
    }
})

function savedata(){
    localStorage.setItem("data",noteBox.innerHTML);
}
function getdata(){
    noteBox.innerHTML=localStorage.getItem("data");
}
// document.getElementsByTagName("p").forEach((itr)=>{
//     localStorage.removeItem("note");
// });

document.addEventListener("keydown",(e)=>{
    if(e.key=="Enter")
    {
        document.execCommand("insertLineBreak");
        e.preventDefault();
    }
})

getdata();