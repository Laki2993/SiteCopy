document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll(".callBackFormBtn").forEach((btn) => {
      btn.addEventListener("click", (event) => {
        const pressedBtn = event.currentTarget;

        document.querySelectorAll(".callBackFormBtn").forEach((button) => {
          button.style.border = "solid 0.1vw rgba(255, 255, 255, 0)";
        });

        pressedBtn.style.border = "solid 0.05vw rgba(255, 255, 255, 0.493)";
        switch (pressedBtn.id) {
            case "BtnPhone":
                document.getElementById("inputType").placeholder = "(000) 000-00-00";
                break;
            case "BtnTelegram":
                document.getElementById("inputType").placeholder = "Имя пользователя или телефон";
                break;
            case "BtnVk":
                document.getElementById("inputType").placeholder = "Имя пользователя, ID или ссылка";
                break;
            case "BtnMax":
                document.getElementById("inputType").placeholder = "ссылка";
                break;
            default:
                break;
        }
      });
    });

document.querySelectorAll(".questionsContainerBlock").forEach((block) => {
    const startHeight = "3vw";
    
    block.addEventListener("click", (event) => {
        const pressedBlock = event.currentTarget;
        const cross = pressedBlock.querySelector(".cross");
        
        if(pressedBlock.offsetHeight < 100){
            if(pressedBlock.id === "question1" || pressedBlock.id === "question2" ){
                pressedBlock.style.height = "19vw";
            } else {
                pressedBlock.style.height = "12vw";
            }
            if(cross) cross.style.transform = "rotate(45deg)";
        } else { 
            pressedBlock.style.height = startHeight;
            if(cross) cross.style.transform = "rotate(0deg)";
        }
    });
});

document.getElementById("callForm").addEventListener("click", () => {
    const popUp = document.querySelector(".popUp");
    const isHidden = window.getComputedStyle(popUp).display === "none";
    
    if(isHidden){
        popUp.style.display = "flex";
        document.querySelector(".callForm").style.backgroundImage = "url(/assets/iconCrossCall.svg)";
    }
    else{
        popUp.style.display = "none";
        document.querySelector(".callForm").style.backgroundImage = "url(/assets/iconCall.png)";
    }
});

document.querySelector(".popUp").addEventListener("click", () => {
    document.querySelector(".popUp").style.display = "none";
    document.querySelector(".callForm").style.backgroundImage = "url(/assets/iconCall.png)";
});


document.getElementById("Num1").addEventListener("click", () => {
    const myText1 = "7 993 302 07 26"; 
    navigator.clipboard.writeText(myText1);
    document.getElementById("Num1").innerHTML = "скопированно в буфер обмена";
    setTimeout(() => {
        document.getElementById("Num1").innerHTML = "ЦФО +7 993 302 07 26";
    },3000);
});

document.getElementById("Num2").addEventListener("click", () => {
    const myText2 = "7 812 313 21 38"; 
    navigator.clipboard.writeText(myText2);
    document.getElementById("Num2").innerHTML = "скопированно в буфер обмена";
    setTimeout(() => {
        document.getElementById("Num2").innerHTML = "СЗФО +7 812 313 21 38";
    },3000);
});
})