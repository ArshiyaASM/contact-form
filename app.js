const section1_input = document.querySelectorAll(".section1 > div > input");
const section2_input = document.querySelector(".section2 > input");
const section3_input = document.querySelectorAll(".radio");
const section4_input = document.querySelector(".section4 > textarea");
const section5_input = document.querySelector("#question");
const submit = document.querySelector("#submit")
const error = document.querySelectorAll(".error")
const popup_box = document.querySelector(".popup")


let check = false;
let check1 = false;
let check2 = false;
let check3 = false;
let check4 = false;
let check5 = false;


section1_input.forEach(item =>{
item.addEventListener("blur" , ()=> {
    new Promise((resolve, reject)=>{
        if(item.value.length == 0){
            reject(item);
        }else {
            resolve(item);
        }
        }).then((item)=>{
            return new Promise((resolve, reject)=>{
                for(let element of item.value){
                    const letter_checker = isNaN(element);
                    if(!letter_checker){
                        reject(item)
                        return
                    }
                }
                resolve(item)
            })
        }).then((item)=>{
            check = true;
            item.style.border = "1px solid gray";
            item.nextElementSibling.style.visibility = "hidden";
        }).catch((item)=>{
            check = false;
            item.style.border = "1px solid red";
            item.nextElementSibling.style.visibility = "visible";
        })
    })
}) 


function Section1(){
    section1_input.forEach(item => {
        return new Promise((resolve, reject)=>{
            if(item.value.length == 0){
                reject(item);
            }else {
                resolve(item);
            }
            }).then((item)=>{
                return new Promise((resolve, reject)=>{
                    for(let element of item.value){
                        const letter_checker = isNaN(element);
                        if(!letter_checker){
                            reject(item)
                            return
                        }
                    }
                    resolve(item)
                })
            }).then((item)=>{
                check = true;
                item.style.border = "1px solid gray";
                item.nextElementSibling.style.visibility = "hidden";
            }).catch((item)=>{
                check = false;
                item.style.border = "1px solid red";
                item.nextElementSibling.style.visibility = "visible";
            })
    })
}


function section2() {
    section2_input.addEventListener("blur" , () =>{
        return new Promise((resolve, reject)=>{
            if(section2_input.value.length == 0){
                reject(section2_input);
            }else {
                resolve(section2_input);
            }
        }).then((item)=>{
            return new Promise((resolve, reject)=>{
                for(let element of item.value){
                    if(element == "@"){
                        resolve(item)
                        return
                    }
                }
                reject(item)
            })
        }).then((item)=>{
            check1 = true;
            item.style.border = "1px solid gray";
            item.nextElementSibling.style.visibility = "hidden";
        }).catch((item)=>{
            check1 = false;
            item.style.border = "1px solid red";
            item.nextElementSibling.style.visibility = "visible";
        })
    })
}


function Section2(){
    return new Promise((resolve, reject)=>{
        if(section2_input.value.length == 0){
            reject(section2_input);
        }else {
            resolve(section2_input);
        }
    }).then((item)=>{
        return new Promise((resolve, reject)=>{
            for(let element of item.value){
                if(element == "@"){
                    resolve(item)
                    return
                }
            }
            reject(item)
        })
    }).then((item)=>{
        check1 = true;
        item.style.border = "1px solid gray";
        item.nextElementSibling.style.visibility = "hidden";
    }).catch((item)=>{
        check1 = false;
        item.style.border = "1px solid red";
        item.nextElementSibling.style.visibility = "visible";
    })
}



function Radio_btn_checker(){
    return new Promise((resolve, reject)=>{
        if(section3_input[0].checked == false && section3_input[1].checked == false){
            reject();
        }else {
            resolve();
        }
    }).then(()=>{
        document.querySelector("#radio_button_error").style.visibility = "hidden";
        check2 = true;
    }).catch(()=>{
        document.querySelector("#radio_button_error").style.visibility = "visible";
        check2 = false;
    })
}

section3_input.forEach(item =>{
    item.addEventListener("click", async ()=>{
        await Radio_btn_checker();
    })
})



section4_input.addEventListener("blur" , e =>{
    new Promise((resolve, reject)=>{
        if(section4_input.value.length == 0){
            reject(section4_input);
        }else {
            resolve(section4_input);
        }
    }).then((item)=>{
        check3 = true;
        item.style.border = "1px solid gray";
        item.nextElementSibling.style.visibility = "hidden";
    }).catch((item)=>{
        check3 = false;
        item.style.border = "1px solid red";
        item.nextElementSibling.style.visibility = "visible";
    })
})


function Checkbox() {
    return new Promise((resolve, reject)=>{
        if(section5_input.checked == false){
            reject(section5_input);
        }else {
            resolve(section5_input);
        }
    }).then(()=>{
        document.querySelector("#checkbox_button_error").style.visibility = "hidden";
        check4 = true;
    }).catch(()=>{
        document.querySelector("#checkbox_button_error").style.visibility = "visible";
        check4 = false;
    })
}


section5_input.addEventListener("click", async ()=>{
    await Checkbox()
})






submit.addEventListener("click", async (eventObj)=>{
    await Radio_btn_checker();
    await Checkbox();
    await Section1();
    await Section2();

    if(check && check1 && check2 && check3 && check4){
        localStorage.setItem("check5" , "true");
    }

    else {
        eventObj.preventDefault()
    }

    
})



if(localStorage.getItem("check5") == "true"){
    localStorage.removeItem("check5");
    popup_box.style.display = "inline-block"    
    setTimeout(()=>{
        popup_box.style.display = "none"
    } , 3000)
}




