//desabilitando envios de formulários se houver campos vazios
(() => {
    'use strict'
  
    // Buscando todos os formulários aos quais aplicamos estilos de validação Bootstrap personalizados
    const forms = document.querySelectorAll('.needs-validation')
  
    // loop que impede o envio
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()

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
      window.location.href = "#"; // redirecionameto da pagina
    } else {
      swal("Pedido para criar um novo cadastro, cancelado");
    }
  });
}

// side-bar: criação de classes e sistema do menu

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".navigation");
    menuToggle.onclick = () => {
        navigation.classList.toggle("open");
}

const listItems = document.querySelectorAll(".list-item");
    listItems.forEach(item => {
        item.onclick = () => {
            listItems.forEach(item => item.classList.remove("active"));
            item.classList.add("active");
        }
    })