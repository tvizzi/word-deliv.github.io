document.addEventListener("DOMContentLoaded", () => {
  // Логика для отправки формы
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(form.action, {
      method: form.method,
      body: formData
    })
    .then(response => {
      return response.json().then(data => {
        if (response.ok && data.status === "success") {
          console.log("Форма успешно отправлена, скрываем форму и отображаем сообщение");
          const successMessage = document.getElementById("successMessage");
          const formContainer = document.getElementById("contact-form");

          
          formContainer.style.display = "none";

          
          successMessage.style.display = "block";
          setTimeout(() => {
            successMessage.style.display = "none"; 
            window.location.href = "/"; 
          }, 3000); 
        } else {
          console.error("Ошибка ответа:", data);
          alert("Ошибка отправки формы: " + (data.message || "Неизвестная ошибка"));
        }
      });
    })
    .catch(error => {
      console.error("Ошибка:", error);
      alert("Ошибка отправки формы.");
    });
  });

  
  const formContainer = document.getElementById("contact-form");
  const openFormButton = document.getElementById("open-form-button");
  const closeFormButton = document.getElementById("close-form");

  openFormButton.addEventListener("click", () => {
    formContainer.style.display = "block";
  });

  closeFormButton.addEventListener("click", () => {
    formContainer.style.display = "none";
  });

  window.addEventListener("click", (event) => {
    if (event.target === formContainer) {
      formContainer.style.display = "none";
    }
  });

  
  const burgerMenu = document.getElementById("burger-menu");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("sidebar-overlay");
  const burgerMenuInside = document.querySelector('.burger-menu-inside');

  burgerMenu.addEventListener("click", () => {
    burgerMenu.classList.toggle("active");
    sidebar.classList.toggle("active");
    overlay.classList.toggle("active");
  });

  overlay.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    sidebar.classList.remove("active");
    overlay.classList.remove("active");
  });

  
  burgerMenuInside.addEventListener('click', () => {
    burgerMenu.classList.remove('active');
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
  });

  
  const sidebarLogo = document.querySelector(".sidebar-logo");
  sidebarLogo.addEventListener("click", () => {
    window.location.href = "/";
  });

  
  const menuItems = document.querySelectorAll(".sidebar-menu .menu-item");

  menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
      switch (index) {
        case 0:
          window.location.href = "/about.html";
          break;
        case 1:
          window.location.href = "/services.html";
          break;
        case 2:
          window.location.href = "/documents.html";
          break;
        case 3:
          window.location.href = "/partnership.html";
          break;
        case 4:
          window.location.href = "/contacts.html";
          break;
        case 5:
          window.location.href = "/reviews.html";
          break;
        default:
          break;
      }
    });
  });
});