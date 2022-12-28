

const stars= document.querySelectorAll(".logostar");

stars.forEach((star)=>{
    star.addEventListener("click",()=>{
        var source= star.getAttribute("src");
        if(source==="Images/star.svg")
            star.setAttribute("src","Images/star-minus.svg");
        else{
            star.setAttribute("src","Images/star.svg");
        }

    })
})