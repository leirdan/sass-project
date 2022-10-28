## HERANÇA

A melhor maneira de fazer uma classe CSS herdar atributos de uma pai é usando **extend**. Quando o fazemos, o elemento herda todos os atributos da classe pai e exibe-os junto dos seus próprios, sem a necessidade de fazer aninhamento e tornar classes dependentes umas das outras.
Como fazer:

- Definir uma classe com alguns atributos base;
- Criar uma outra classe não-aninhada e inserir **@extend .classe-teste;** na primeira linha, para herdar todas as configurações da classe pai desejada.

## IMPORT

Uma excelente maneira de organizar o código CSS é criando pequenos arquivos SCSS e importando-os dentro de um arquivo principal. A sintaxe é feita dessa forma: **import "[caminho do arquivo].scss";**

## VARIÁVEIS

As variáveis funcionam como em qualquer outra linguagem de programação, podendo armazenar valores e serem chamadas em qualquer parte do código. A vantagem de usar variáveis é que, em caso de, por exemplo, precisarmos alterar a fonte padrão do site, nós não teremos que ir em cada parte do código e trocar, apenas ir no arquivo de variáveis e alterar lá o valor padrão.
A sintaxe de variável é **$nome-da-variavel: valor;**

## FUNÇÕES

O SASS já nos fornece uma certa gama de funções, como:

- _darken_: escurece o elemento em X%;
- _desaturate_: tira a saturação de um elemento em X%;
- _mix_: mistura duas cores;
- _grayscale_: deixa um elemento com cor acinzentada.

## MIXINS

Funcionam como funções e as declaramos da seguinte forma: **@mixin name($arg1, $arg2){ }**.
Além disso, as importamos com: **include mixin-name(arg1, arg2)**.

## CÓDIGOS VSCODE

- CTRL + ; -> comenta uma linha inteira
