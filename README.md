# Projeto Banco de Talentos
---------------------------------------------------------------------------------
## Diretórios:
<a href="image/">image:</a> Contém todas imagens;
<a href="script/">script:</a> Contém todos os scrips;
<a href="style/">style:</a> Contém todos os arquivos de estilo.

## Aquivos importantes:
<a href="script/search-float.js">search-float.js: </a>Contém toda a lógica do botão de pesquisar flutuante; 
<a href="style/default.css">default.css: </a>Tem a finalidade de minimizar a diferência de design nos navegadores. Conceito "cross-browser".
<a href="style/static.css">static.css: </a>Contei a estilização para os componentes que se repentem nas páginas (header e formulário de pesquisa).

## Observações:
1) Cada arquivo HTML tem o seu JS ou CSS com mesmo nome correspondente nos respectivos diretórios;
2) Caso tenham de utilizar alguma biblioteca ou qualquer outro material que não deve ser comitado, adicione seu caminho dentro do arquivo <a href=".gitignore">.gitignore</a>
----------------------------------------------------------------------------------
## Comandos úteis:
git clone <endereço>: Clona um repositório remoto para local;
git status: Exibe arquivos/diretórios adicionados em verde e não adicionados/modificados em vermelho;
git add <nome> ou . :Adiciona um arquivos de especificado <nome> ou . para adicionar todos ao estágio "pré-commit";
git commit -m "<menssagem>": Registra todos os arquivos adicionados em "git add..." como um ponto na "Linha do tempo";
git pull: Pega todos as atualizações do repositório remoto (Certifique-se de ter comitado o seu trabalho antes); 
git push -u origin: Empurra o trabalho do seu repositório para o repositório central;

### Comandos PENAS para Git bash ou terminas Linux em MAC
touch <nome-arquivo>: Cria um arquivo ou mais arquivos. Ex: "touch file1 fil2";
mkdir <nome-diretório>: Make Directory, Cria um ou mais diretórios. Ex: "mkdir dir1 dir2"
rm -rf <file or dir>: Remove um ou mais arquivos ou diretórios.
cd <directory>: Change Directory, Altera a localização do terminal para dentro de uma pasta especifica. Ex: "cd meuProjeto"
OBSERVAÇÃO: Pressionar TAB auxiliar para completar nome extenso de arquivos existentes.