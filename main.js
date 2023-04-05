const form = document.getElementById("formulario");
const numeroA = document.getElementById("A");
const numeroB = document.getElementById("B");
const campoA = numeroA;
const campoB = numeroB;
let formEValido = false;

function validaCampo(campoA, campoB){
    return campoB > campoA;
}
form.addEventListener('submit', function(e){
    e.preventDefault();

    const valorDoInputA = parseFloat(numeroA.value);
    const valorDoInputB = parseFloat(numeroB.value);
    const mensagemSucesso = `Resultado correto o valor de B: ${campoB.value} é maior que o valor de A: ${campoA.value}. `;
    const mensagemErro = `Resultado inválido o valor de B: ${campoB.value} é menor que o valor de A: ${campoA.value}.`;

    formEValido = validaCampo(valorDoInputA, valorDoInputB);
    if (formEValido == true){
        const containerMensagemSucesso = document.querySelector('.message-sucess');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display = 'block';
        campoA.value = '';
        campoB.value = '';
    }else{
        if (!formEValido){
            const containerMensagemErro = document.querySelector('.message-error');
            containerMensagemErro.innerHTML = mensagemErro;
            containerMensagemErro.style.display = 'block';
        };
    };
});