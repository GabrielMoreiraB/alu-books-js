async function buscaEndereco(cep){
    let mensagemErro = document.getElementById('erro');
    mensagemErro.innerHTML = "";
    try{
    var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var consultaCEPconvertida = await consultaCEP.json();
    if(consultaCEPconvertida.erro){
        throw Error("CEP inexistente!")
    }
    atribuiCampos(consultaCEPconvertida)
    console.log(consultaCEPconvertida);
    return consultaCEPconvertida;
    } catch(erro){
        mensagemErro.innerHTML = `<p> CEP Invalido. Tente novamente! </p>`;
        console.log(erro);
    }
}

var cep = document.getElementById('cep');
cep.addEventListener('focusout', () => buscaEndereco(cep.value));

function atribuiCampos(data) {
    const rua = document.querySelector('#endereco'); 
    const complemento = document.querySelector('#complemento');
    const bairro = document.querySelector('#bairro');
    const cidade = document.querySelector('#cidade'); 
    const estado = document.querySelector('#estado');

    rua.value = data.logradouro;
    complemento.value = data.complemento;
    bairro.value = data.bairro;
    cidade.value =data.localidade;
    estado.value = data.uf;
}
