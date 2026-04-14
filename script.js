document.addEventListener('DOMContentLoaded', () => {
    console.log(window.innerWidth);
    document.querySelectorAll(".social-btn").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const pressedBtn = event.currentTarget;

            document.querySelectorAll(".social-btn").forEach((button) => {
                button.style.border = "solid 0.1vw rgba(255, 255, 255, 0)";
            });

            pressedBtn.style.border = "solid 0.05vw rgba(255, 255, 255, 0.493)";
            
            switch (pressedBtn.id) {
                case "socialPhone":
                    document.getElementById("socialInput").placeholder = "+7 (000) 000-00-00";
                    break;
                case "socialTelegram":
                    document.getElementById("socialInput").placeholder = "Имя пользователя или телефон";
                    break;
                case "socialVk":
                    document.getElementById("socialInput").placeholder = "Имя пользователя, ID или ссылка";
                    break;
                case "socialMax":
                    document.getElementById("socialInput").placeholder = "ссылка";
                    break;
                default:
                    break;
            }
        });
    });

// FAQ блоки
document.querySelectorAll(".faq__item").forEach((item) => {
    const question = item.querySelector(".faq__question");
    const answer = item.querySelector(".faq__answer");
    const toggle = item.querySelector(".faq__toggle");
    
    question.addEventListener("click", () => {
        item.classList.toggle("open");
        
        if (item.classList.contains("open")) {
            answer.style.maxHeight = answer.scrollHeight + "px";
            if (toggle) toggle.style.transform = "rotate(45deg)";
        } else {
            answer.style.maxHeight = "0";
            if (toggle) toggle.style.transform = "rotate(0deg)";
        }
    });
});

    document.getElementById("callbackTrigger").addEventListener("click", () => {
        const modal = document.querySelector(".modal");
        const isHidden = window.getComputedStyle(modal).display === "none";
        
        if(isHidden){
            modal.style.display = "flex";
            document.getElementById("callbackTrigger").style.backgroundImage = "url(/assets/iconCrossCall.svg)";
        }
        else{
            modal.style.display = "none";
            document.getElementById("callbackTrigger").style.backgroundImage = "url(/assets/iconCall.png)";
        }
    });

    document.querySelector(".modal").addEventListener("click", (event) => {
        if (event.target === event.currentTarget) {
            document.querySelector(".modal").style.display = "none";
            document.getElementById("callbackTrigger").style.backgroundImage = "url(/assets/iconCall.png)";
        }
    });

    document.getElementById("contactCfo").addEventListener("click", (event) => {
        event.stopPropagation();
        const myText1 = "7 993 302 07 26"; 
        navigator.clipboard.writeText(myText1);
        document.getElementById("contactCfo").innerHTML = "скопированно в буфер обмена";
        setTimeout(() => {
            document.getElementById("contactCfo").innerHTML = "ЦФО +7 993 302 07 26";
        }, 3000);
    });

    document.getElementById("contactSzfo").addEventListener("click", (event) => {
        event.stopPropagation();
        const myText2 = "7 812 313 21 38"; 
        navigator.clipboard.writeText(myText2);
        document.getElementById("contactSzfo").innerHTML = "скопированно в буфер обмена";
        setTimeout(() => {
            document.getElementById("contactSzfo").innerHTML = "СЗФО +7 812 313 21 38";
        }, 3000);
    });
});