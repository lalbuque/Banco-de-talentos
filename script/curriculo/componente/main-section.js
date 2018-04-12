
function rmById(id){
    document.getElementById(id).remove()
}
/* Section Main */
let bAL = document.querySelector('#btnaddotherlink');
let con = document.querySelector('.other-links');
let nLinkCount = 0;

bAL.addEventListener('click', () => {
    nLinkCount++;
    con.innerHTML += `<p id="linkcv${nLinkCount}">
    <input type="text" name="contact[link][${nLinkCount}][nome]" class="input-form-cv" placeholder="ex: Github">
    <input type="url" name="contact[link][${nLinkCount}][url]" class="input-form-cv" placeholder="https://www.github.com/myGithubProfile">
    <button type="button" class="button" onclick="rmById('linkcv${nLinkCount}')">Remover</button>
    </p>`
});
/* End Section Main */
/* Section Formation */
const conF = document.querySelector("#containerFormation");
const btnAF = document.querySelector("#btnAddFormation");
let nFCount = 0;

btnAF.addEventListener('click', () => {
    nFCount++;
    conF.innerHTML += `
    <li id="itemFormation${nFCount}" class="item-formation-cv">
    <div>
        <p>
            <input type="text" name="[${nFCount}][name]" required maxlength="20" class="input-form-cv" placeholder="Análise e Desenvolvimento de Sistemas">
        </p>
        <p>
            <input type="text" name="[${nFCount}][institute]" required maxlength="20" class="input-form-cv" placeholder="Nome da instituição">
        </p>
        <p>
            <input type="number" name="[${nFCount}][done][month]" required min="01" max="12" class="input-form-cv" placeholder="99">/
            <input type="number" name="[${nFCount}][done][year]" required min="1900" max="2018" class="input-form-cv" placeholder="9999">
        </p>
    </div>
    <div class="container-btn-rm-cv">
        <button type="button" class="button" onclick="rmById('itemFormation${nFCount}')">Remover</button>
    </div>
</li>
    `;
});
/* End Section Formation */
/* Section Exteriencia */
const conE = document.querySelector("#containerExperience");
const btnAE = document.querySelector("#btnAddExperience");
let nECount = 0;

btnAE.addEventListener('click', () => {
    nECount++;
    conE.innerHTML += `
    <li id="itemExperience${nECount}" class="item-Experiencia-cv">
    <div>
        <p>
            <input type="text" name="experience[${nECount}][name]" required maxlength="20" class="input-form-cv" placeholder="Fundação Instituto de Educação de Barueri">
        </p>
        <p>
            <input type="number" name="experience[${nECount}][date][b][month]" required min="01" max="12" class="input-form-cv" placeholder="99">/
            <input type="number" name="experience[${nECount}][date][b][year]" required min="1900" max="2018" class="input-form-cv" placeholder="9999">
            até
            <input type="number" name="experience[${nECount}][date][e][month]" required min="01" max="12" class="input-form-cv" placeholder="99">/
            <input type="number" name="experience[${nECount}][date][e][month]" required min="1900" max="2018" class="input-form-cv" placeholder="9999">
        </p>
        <p>
            <input type="text" name="experience[${nECount}][office]" required maxlength="20" class="input-form-cv" placeholder="Técnico de Manutenção">
        </p>
        <p>
            <textarea name="experience[${nECount}][summary]" cols="30" rows="10" placeholder="Uma breve descrição sobre suas atividades de resultados"></textarea>
        </p>
    </div>
    <div class="container-btn-rm-cv">
        <button type="button" class="button" onclick="rmById('itemExperience${nECount}')">Remover</button>
    </div>
    </li>
    `;
});
/* End Section Experience */
/* Section Curse */
const conC = document.querySelector("#containerCurse");
const btnAC = document.querySelector("#btnAddCurse");
let nCCount = 0;

btnAC.addEventListener('click', () => {
    nCCount++;
    conC.innerHTML += `
    <li id="itemFormation${nCCount}" class="item-formation-cv">
    <div>
        <p>
            <input type="text" name="[${nCCount}][name]" required maxlength="20" class="input-form-cv" placeholder="Análise e Desenvolvimento de Sistemas">
        </p>
        <p>
            <input type="text" name="[${nCCount}][institute]" required maxlength="20" class="input-form-cv" placeholder="Nome da instituição">
        </p>
        <p>
            <input type="number" name="[${nCCount}][done][month]" required min="01" max="12" class="input-form-cv" placeholder="99">/
            <input type="number" name="[${nCCount}][done][year]" required min="1900" max="2018" class="input-form-cv" placeholder="9999">
        </p>
    </div>
    <div class="container-btn-rm-cv">
        <button type="button" class="button" onclick="rmById('itemFormation${nCCount}')">Remover</button>
    </div>
</li>
    `;
});
/* End Section Curse */

window.addEventListener('submit', (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        /* document.getElementById("demo").innerHTML = xhr.responseText; */
    }
    xhr.open('POST', 'http://127.0.0.1:3000');
    xhr.send(formData);
    console.log('enviado');

})