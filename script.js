document.addEventListener('DOMContentLoaded', () => {
    console.log(window.innerWidth);

    document.querySelectorAll(".social-btn").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            const pressedBtn = event.currentTarget;

            document.querySelectorAll(".social-btn").forEach((button) => {
                button.style.border = "solid 0.1vw rgba(255, 255, 255, 0)";
            });

            pressedBtn.style.border = "solid 0.05vw rgba(255, 255, 255, 0.493)";

            const placeholders = {
                socialPhone: "+7 (000) 000-00-00",
                socialTelegram: "Имя пользователя или телефон",
                socialVk: "Имя пользователя, ID или ссылка",
                socialMax: "ссылка"
            };

            const input = document.getElementById("socialInput");
            if (input && placeholders[pressedBtn.id]) {
                input.placeholder = placeholders[pressedBtn.id];
            }
        });
    });

    document.querySelectorAll(".faq__item").forEach((item) => {
        const question = item.querySelector(".faq__question");
        const answer = item.querySelector(".faq__answer");
        const toggle = item.querySelector(".faq__toggle");

        question.addEventListener("click", () => {
            const isOpen = item.classList.contains("open");
            item.classList.toggle("open");

            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + "px";
                if (toggle) toggle.style.transform = "rotate(45deg)";
            } else {
                answer.style.maxHeight = "0";
                if (toggle) toggle.style.transform = "rotate(0deg)";
            }
        });
    });

    const modal = document.querySelector(".modal");
    const callbackTrigger = document.getElementById("callbackTrigger");

    if (callbackTrigger && modal) {
        callbackTrigger.addEventListener("click", () => {
            const isHidden = window.getComputedStyle(modal).display === "none";

            if (isHidden) {
                modal.style.display = "flex";
                callbackTrigger.style.backgroundImage = "url(/assets/iconCrossCall.svg)";
            } else {
                modal.style.display = "none";
                callbackTrigger.style.backgroundImage = "url(/assets/iconCall.png)";
            }
        });

        modal.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
                callbackTrigger.style.backgroundImage = "url(/assets/iconCall.png)";
            }
        });
    }

    const contacts = [
        { id: "contactCfo", text: "7 993 302 07 26", original: "ЦФО +7 993 302 07 26" },
        { id: "contactSzfo", text: "7 812 313 21 38", original: "СЗФО +7 812 313 21 38" }
    ];

    contacts.forEach((contact) => {
        const element = document.getElementById(contact.id);
        if (element) {
            element.addEventListener("click", (event) => {
                event.stopPropagation();
                navigator.clipboard.writeText(contact.text);
                element.innerHTML = "скопировано в буфер обмена";
                setTimeout(() => {
                    element.innerHTML = contact.original;
                }, 3000);
            });
        }
    });

    const phoneInput = document.getElementById("modal__input");

    if (phoneInput) {
        phoneInput.addEventListener("input", (e) => {
            let cleaned = e.target.value.replace(/\D/g, "").slice(0, 11);
            let match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/);

            if (match) {
                e.target.value = `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}-${match[5]}`;
            } else if (cleaned.length > 0) {
                let partial = `+${cleaned[0] || ""}`;
                if (cleaned.length > 1) partial += ` (${cleaned.substring(1, Math.min(4, cleaned.length))}`;
                if (cleaned.length > 4) partial += `) ${cleaned.substring(4, Math.min(7, cleaned.length))}`;
                if (cleaned.length > 7) partial += `-${cleaned.substring(7, Math.min(9, cleaned.length))}`;
                if (cleaned.length > 9) partial += `-${cleaned.substring(9, 11)}`;
                e.target.value = partial;
            } else {
                e.target.value = "";
            }
        });
    }
});