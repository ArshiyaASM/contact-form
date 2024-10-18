const option = document.querySelectorAll(".option")


option.forEach((item) => {
    item.addEventListener("click" , e =>{
        item.firstElementChild.checked = true;
        
    })
});


