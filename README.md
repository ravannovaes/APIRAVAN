# turma003
Repositório central da turma 003.

A ideia é para colocarmos aqui todos os códigos comuns que formos utilizar.

Então sempre que eu ou vocês fizermos algum código que seja para a turma é para colocarmos eles aqui.

O projeto terá sempre o diretório mais novo como o primeiro aqui no README.md pra facilitar o acompanhamento.

## sessao02
Aqui **não precisa** instalar nada. Para ver os resultados da execução dos códigos basta executar, no terminal, `node <nomedoarquivo>` para que ele seja executado.

## sessao01
Aqui tem o código que o Wilker fez um servidor node. Então você **PRECISA** entrar dentro do diretório **sessao01** e digitar `npm install` para que sejam instalada as dependências.

Será dentro do diretório que você também irá executar o comando `npm run dev` para subir o servidor e poder acessar pelo navegador, pelo postman ou pelo insomnia.

Aqui, o arquivo `package.json` é o responsável por configurar algumas coisas do projeto.

Algumas delas é sobre o script de start em que colocamos para executar o servidor com o [nodemon](https://nodemon.io/) e está para que seja executado o arquivo arqexpress.js. Também temos o arquivo arqhttp.js que faz a mesma coisa só que com o módulo [HTTP](https://www.w3schools.com/nodejs/nodejs_http.asp) do NodeJS, enquanto o arqexpress.js utiliza a biblioteca [Express](https://expressjs.com/pt-br/).

Então se você quiser usar o HTTP você **precisa** alterar a linha `"start": "nodemon --legacy-watch arqexpress.js",` para `"start": "nodemon --legacy-watch arqhttp.js"`, no `package.json`.