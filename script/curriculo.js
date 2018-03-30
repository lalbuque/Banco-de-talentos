/* Função para controle de scroll */
function smoothScroll(e) {
    e.preventDefault(); /* Para a ação padrão */
    document.querySelector(e.target.hash).scrollIntoView({
        behavior: 'smooth' 
    });
    console.log('Scroll suave para '+e.target.hash);
}