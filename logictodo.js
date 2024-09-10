let btn=document.querySelector("button");
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
btn.addEventListener("click",function(){
let item=document.createElement("li");
item.innerText=inp.value;

let dlt=document.createElement("button");
dlt.innerText="delete";
dlt.classList.add("delete");
item.appendChild(dlt);
ul.appendChild(item);
inp.value="";
});

ul.addEventListener("click",function(event){
if(event.target.nodeName=="BUTTON"){
    let item=event.target.parentElement;
    item.remove();
    console.log("deleted");
}
});

