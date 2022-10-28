# SASS

## 1. DEFINIÇÃO

- Pre-processador de CSS (escrevemos código em SASS e ele é compilado para CSS)

## 2. DIFERENCIAIS DO SASS

- Reutilizar elementos por meio de variáveis (variáveis de cor, tamanhos, etc.)
- Possibilidade de criar funções
- Podemos utilizar "nesting", não necessitando escrever _div span_ e _div p_ separados!
- Escrevemos menos código!

## 3. INSERIR SASS NO HTML

- Arquivos SASS têm a extensão ".scss"
- O HTML não entende o arquivo ".scss", necessitando compilá-lo primeiramente em CSS
- Devemos instalar o SASS globalmente na máquina por meio do comando _npm install -g sass_
- Após isso, devemos dar o seguinte comando: _sass src/scss/style.scss:src/css/style.css --watch_
- O comando acima compila o arquivo "style.scss" em "style.css" dentro da pasta "src"
- Outra alternativa: _sass . --watch_, que monitora e compila todos os arquivos SASS do projeto.
