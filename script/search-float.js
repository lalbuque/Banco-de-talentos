/* 
Esse scriptJS contém toda lógica de gerência 
para o botão de pesquisa flutuante 
*/
/* útima modificação: 29/03/2018 */
/* Carrega o botão MORE+ do form */
let btnM = document.querySelector('.btnm-float-search');
/* Carrega o botão CONFIG+ do form */
let btnC = document.querySelector('.btnc-float-search');
/* Carrega o container de pesquisa simples */
let bCS = document.querySelector('.basic-config-search');
/* Carrega o container de pesquisa avançada */
let aCS = document.querySelector('.avanced-config-search');
/* Carrega o campo de pesquisa */
let field = document.querySelector('.input-float-search');

/* Status */
/* Guarda se o Basic Container Search está aberto ou fechado */
let sBCS = false;
/* Guarda se o Avanced Container Search está aberto ou fechado */
let sACS = false;

/* Função para abri ou fechar o container simples */
function simpleSearchHinge() {
    if (sBCS) {
        if (sACS) { avancedSearchHinge() } /* Verifica de o conteiner avançado está aberto, se necessário fecha-o */
        field.blur(); /* Tira o foco do campo */
        bCS.classList.remove('bcsOn'); /* Esconde o container */
        sBCS = false; /* Salva o estado */
        btnM.innerHTML = '+'
        btnM.classList.remove('btnMOn');
    } else {
        field.focus(); /* Aplica foco ao campo */
        field.select(); /* Marca conteudo do campo */
        bCS.classList.add('bcsOn'); /* Exibe o container */
        sBCS = true; /* Salva o estado */
        btnM.innerHTML = 'x';
        btnM.classList.add('btnMOn');
    }
    console.log('Search Float Clicado BCS. ' + sBCS);
}

/* Função para abrir ou fechar o container avançado */
function avancedSearchHinge() {
    if (sACS) {
        aCS.classList.remove('acsOn');
        sACS = false;
        btnC.classList.remove('btnCOn');
    } else {
        aCS.classList.add('acsOn');
        sACS = true;
        btnC.classList.add('btnCOn');
    }
    console.log('Search Float Clicado ACS. ' + sACS);
}

/* Adiciona ouvidores ao evento click */
btnM.addEventListener('click', simpleSearchHinge);
btnC.addEventListener('click', avancedSearchHinge);