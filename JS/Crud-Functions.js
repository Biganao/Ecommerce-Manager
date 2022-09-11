//Crud-Functions 

// delete de cadastro

function del() {
    swal({
      title: "Tem Certeza?",
      text: "Uma vez deletado, voce não podera recuperar este cadastro",
      icon: "warning",
      buttons: ["Cancelar", "Confirmar"],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        swal("Cadastro removido com sucesso", {
          icon: "success",
        });
        window.location.href = "#" // redirecionameto da pagina
      } else {
        swal("Pedido de deletar cadastro, cancelado");
      }
    });
    }
    
    // edit de cadastro
    
    function edit() {
    swal({
      title: "Tem Certeza?",
      text: " Voce realmente deseja editar esse cadastro?",
      icon: "warning",
      buttons: ["Cancelar", "Confirmar"],
      dangerMode: true,
    })
    .then((Confirm) => {
      if (Confirm) {
        window.location.href = "#"; // redirecionameto da pagina
      } else {
        swal("Pedido de editar cadastro, cancelado");
      }
    });
    }
    
    // criar novo cadastro 
    
    function crea() {
    swal({
      title: "Tem Certeza?",
      text: " Voce realmente deseja criar um novo cadastro",
      icon: "warning",
      buttons: ["Cancelar", "Confirmar"],
      dangerMode: true,
    })
    .then((Confirm) => {
      if (Confirm) {
        window.location.href = "Create-pedidos.html"; // redirecionameto da pagina
      } else {
        swal("Pedido para criar um novo cadastro, cancelado");
      }
    });
    }