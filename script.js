function gerarTabuada() {
    //obtém o valor inserido pelo usuário
    const numero = document.getElementById('numero').value;
    const resultado = document.getElementById('resultado');

    // limpa o resultado anterior
    resultado.innerHTML ='';

    //verifica se o número é válido
    if (numero === '') {
        resultado.innerHTML = '<p> por favor, insira um número válido.</p>';
        return;
    }
/*Gera a tabuada usando um loop */
    for (let i=1;i <= 10; i++){
        //calcula o valor da multiplicação
        const multiplicacao = numero * i;

        //cria um novo paragrafo para ixibir o resultado
        const linha = document.createElement('p');
        const hr = document.createElement('hr');
        linha.textContent = `${numero} x ${i} = ${multiplicacao}`;

        // adiciona o paragrafo ao container de resultado
        resultado.appendChild(linha);
        resultado.appendChild(hr);

    }
}