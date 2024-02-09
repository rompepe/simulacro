function iniciodesesion() {
  fetch("http://localhost:3000/users")
    .then((r) => r.json())
    .then((d) => {
      let resultado = d.filter(function (element) {
        return element.email == email.value;
      });
      if (resultado.length > 0) {
        if (resultado[0].password == password.value) {
            location.href = 'index.html'
        } else {
          console.log("usuario o contraseña invalidos¡");
        }
      } else {
        console.log("No hay coincidencia");
      }
    });
}


