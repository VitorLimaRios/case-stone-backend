## Case-Stone Backend

Aplicação server-side desenvolvido para a Stone como parte do processo seletivo para um trabalho como desenvolvedor Full Stack.

## Como usar

Faça o clone do projeto:
- `git clone https://github.com/VitorLimaRios/case-stone-backend.git`.

Após clonar o projeto faça a instalação das dependencias através do npm:
- `npm install`.

Crie um arquivo .env na pasta raiz do projeto com as seguintes variáveis:
- `PORT` _(caminho para seu banco de dados)_;
- `MYSQL_HOST` _(nome do servidor host)_;
- `MYSQL_USER` _(nome do seu usuário MYSQL)_;
- `MYSQL_PASSWORD` _(senha do seu usuário MYSQL)_;
- `MYSQL_DB_NAME` _(nome do seu banco de dados)_;
- `JWT_SECRET_KEY` _(senha JWT que desejar)_;

No seu MYSQL execute o arquivo create_tables.sql presente na raiz do diretório, apenas alterando o nome do seu banco de dados.

Para iniciar o servidor você pode executar o seguinte comando:
- `npm start`.

Ou caso queira usar o nodemon para não precisar resetar o servidor manualmente após cada modificação:
- `npm run dev`.
