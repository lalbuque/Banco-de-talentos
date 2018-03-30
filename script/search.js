document.addEventListener('DOMContentLoaded', () => {
    const query = location.search.slice(1); /* Captura parâmetros */
    const partes = query.split('&'); /* Quebra em chave=valor (array) */
    let data = {}; /* Declara um objeto */
    partes.forEach(function (parte) { /* Percorre a array */
        let chaveValor = parte.split('='); /* Quebra a string onde houver '=' */
        let chave = chaveValor[0]; /* Separa nome de chaves */
        let valor = chaveValor[1]; /* Separa valores de chaves */
        data[chave] = valor.replace('+', ' '); /* Atribui o valor a uma chave dentro do objeto */
    });

    /* console.log(data); */
    document.querySelector('#teste').innerHTML = data.search;
});