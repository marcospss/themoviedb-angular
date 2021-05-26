# The Movie DB Angular

### Pré-requisitos para executar do projeto:

#### Configuração da API TMDB
Primeiro, você precisa obter uma conta no [TMDB](https://www.themoviedb.org) e gerar sua [chave da API](https://www.themoviedb.org/faq/api).

Na raiz do projeto deve ser criado o arquivo .env com a informação abaixo:
```
API_KEY=API KEY TMDB
```
## Branches

### main
Aplicação com Angular na versão 11

### pwa
Aplicação com a implementação de PWA utilizando o pacote `@angular/service-worker`

### universal
Aplicação com a renderização do lado do servidor utilizando o pacote `@nguniversal/express-engine`
