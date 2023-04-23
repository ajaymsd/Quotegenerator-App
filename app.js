var quote=document.getElementById("quote");
var author=document.getElementById("author");
var getquote=document.getElementById("get-quote");

getquote.addEventListener("click",function(){
    const API_URL="https://api.quotable.io/random";
    fetch(API_URL).then((response)=>response.json()).then((data)=>{
        console.log(data);
        console.log(data.content);
        console.log(data.author);
        quote.innerText='"'+data.content+'"';
        author.innerText=data.author;
    })
})