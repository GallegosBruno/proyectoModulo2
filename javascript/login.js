
const admin = {
    correo: "admin@admin.com",
    password: "12345678",
  };
  

  
  const logIn = (event) => {
    event.preventDefault();
  
 
    let correo = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
  
   
    if (correo === admin.correo) {
      if (password === admin.password) {
        
        localStorage.setItem("user", JSON.stringify(correo));
  
    
        location.replace("./admin.html");
      }
    } else {
      alert("El correo o la contraseña es incoreecta!");
    }
  };
  
  

  document.getElementById("formulario").addEventListener("submit", logIn);