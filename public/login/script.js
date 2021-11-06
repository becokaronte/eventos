$(document).ready(() => {
    $("#login-button").on("click", function () {
      let user = $("#user").val();
      let password = $("#password").val();
      if (user && password) {
        $.ajax({
          url: "/login",
          type: "POST",
          data: { username: user, password: password },
          success: function (data) {
            if (data === "/") {
              $("#msg-err").html(`
                <p>Usuário ou senha inválida. Por favor, tente novamente.</p>`
              );
              return true;
            }
              window.location.replace(`${data}`);    
          }
        });
      } else {
        $("#msg-err").html(`
        <p>Usuário ou senha inválida. Por favor, tente novamente.</p>`
        );
      }
    })
  }); 
  