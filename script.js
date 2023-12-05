
  function validarFormulario() {
    var email = document.getElementById('inputEmail4').value;
    var endereco = document.getElementById('inputAddress').value;
    var cidade = document.getElementById('inputCity').value;
    var cep = document.getElementById('inputCEP').value;

    // Validar campos obrigatórios
    if (email === '' || endereco === '' || cidade === '' || cep === '') {
      alert('Por favor, preencha todos os campos.');
      return false; // Impede o envio do formulário se algum campo estiver vazio
    }

    // Validar radio buttons (Porte)
    var porteSelecionado = false;
    var radioButtons = document.getElementsByName('customRadioInline1');
    for (var i = 0; i < radioButtons.length; i++) {
      if (radioButtons[i].checked) {
        porteSelecionado = true;
        break;
      }
    }

    if (!porteSelecionado) {
      alert('Por favor, selecione o porte (Pequeno ou Grande).');
      return false;
    }

    // Validar checkboxes (Serviço)
    var servicoSelecionado = false;
    var checkboxes = document.querySelectorAll('.form-check-input');
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        servicoSelecionado = true;
        break;
      }
    }

    if (!servicoSelecionado) {
      alert('Por favor, selecione pelo menos um tipo de serviço (Banho e/ou Tosa).');
      return false;
    }

    // Adicione outras lógicas de validação conforme necessário

    alert('Formulário válido. Enviando...');
    
    return true; // Permite o envio do formulário se todos os campos estiverem preenchidos
  }

