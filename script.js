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
})