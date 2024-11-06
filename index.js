document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const successMessage = document.getElementById("successMessage");
  
    // Показать форму
    document.getElementById("open-form-button").onclick = () => {
      form.style.display = "block";
    };
  
    // Скрыть форму
    document.getElementById("close-form").onclick = () => {
      form.style.display = "none";
    };
  
    // Всплывающее сообщение об успехе
    document.getElementById("contactForm").onsubmit = (e) => {
      e.preventDefault();
      successMessage.style.display = "block";
      setTimeout(() => (successMessage.style.display = "none"), 3000);
    };
  });
  