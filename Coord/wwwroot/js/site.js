$('.telefone').mask('(00) 0000-0000');
$('.celular').mask('(00) 00000-0000');
$('.cep').mask('00000000');
$('.placa').mask('SSS SSSS', {
    'translation': {
        S: { pattern: /[A-Za-z0-9]/ },
    }
});