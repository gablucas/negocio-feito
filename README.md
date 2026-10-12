# Negócio Feito x NFGateway
Esse é um projeto de estudo ambicioso com intuito de criar duas aplicações:

- **Marketplace** semelhante ao Mercado Livre
- **Gateway de Pagamento** para gerenciar o pagamento do marketplace

## Estrutura do projeto e tecnologias utilizadas
O Backend do Marketplace bem como do Gateway utilizam ASP.NET para API adotando o Clean Architeture para organização do projeto.

O Frontend utiliza React com Typescript, utilizado em ambas aplicações.

No banco de dados é utilizado o MySQL via docker, utilizando Dapper se comunicar com o mesmo.

## Rodando o projeto

### Banco de dados
O banco de dados pode ser instalado via docker, executando os comandos abaixo:
```
docker pull mysql
docker run --name MYDB -e MYSQL_ROOT_PASSWORD=root -e TZ=America/Sao_Paulo -p 3310:3306 -d mysql
```
Para criar toda a estrutura inicial do banco, basta executar o arquivo DB.sql encontrado na pasta raiz do projeto

*Obs: Na string de conexão está com a porta 3310 definida no comando acima 3310:3306*
