/* tentativa de fazer sozinho, porem faltou utilizar focusout ao invez de click no addeventlist*/ 

const enviar = document.querySelector('#enviar');
const inputCEP = document.getElementById('cep');

inputCEP.addEventListener('focusout', event => {
    event.preventDefault();

    const inputCEP = document.getElementById('cep');
    const valorCEP=inputCEP.value;
    const url = `https://viacep.com.br/ws/${valorCEP}/json/`;

    fetch(url).then(resposta => resposta.json())
    .then(data => {
        console.log(fetch(url).then(resposta => resposta.json()).then(data => console.log(data)))
    if(data.erro){
        throw Error('Esse cep não existe!');
        
    }else
    atribuiCampos(data);
    })
    .catch(erro => console.log(erro)).finally(mensagem => console.log('Processamento concluido!'));
    
})

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







//console.log(consultaCep);
