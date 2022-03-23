let cpf = '705.484.450-52'

function verificar(cpf) {
    // Dados
    let limpo = cpf.replace(/\D+/g,'');
    let soma1 = 0 // Soma para conseguir o primeiro número
    let soma2 = 0 // Soma para conseguir o segundo número
    let num1  // Primeiro número verificador
    let num2  // Segundo número verificador
    // Primeiro número do CPF
    for (let i = 0; i < 9; i++) {
        soma1 += parseInt(limpo[i]) * (10 - i);
    };
    num1 = 11 - (soma1 % 11);
    if (num1 > 9){
        num1 = 0
    };
    // Segundo número do CPF
    for (let i = 0; i < 10; i++) {
        soma2 += parseInt(limpo[i]) * (11 - i);
    };
    num2 = 11 - (soma2 % 11);
    if (num2 > 9){
        num2 = 0
    };
    if (num1 == parseInt(limpo[9]) && num2 == parseInt(limpo[10])) {
        console.log('CPF valido');
    }
    else {
        console.log ('CPF invalido');
    };
};

verificar('070.987.720-03');