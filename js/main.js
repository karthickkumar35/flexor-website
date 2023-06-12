// const navLinks = document.querySelectorAll('.nav-item')
//           const menuToggle = document.getElementById('navbarNav')
//           const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle : false})
//           navLinks.forEach((l) => {
//               l.addEventListener('click', () => {bsCollapse.toggle()})
//           })

          const hamburger = document.querySelector(".hamburger");
          const navMenu = document.querySelector(".nav-menu");
  
          hamburger.addEventListener("click", () => {
              hamburger.classList.toggle("active");
              navMenu.classList.toggle("active");
          })
  
          document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click" , () => {
              hamburger.classList.remove("active");
              navMenu.classList.remove("active");
          }))          