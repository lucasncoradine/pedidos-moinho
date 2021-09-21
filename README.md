# Pedidos - Moinho Restaurante
## Tecnologias
- [React](https://pt-br.reactjs.org/)
- [NextJS](https://nextjs.org/)
- [Styled Components](https://styled-components.com/)
- [Airtable](https://www.airtable.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## Sumário
1. [Alias](#alias)
2. [Configurando o projeto](#configurando-o-projeto)
3. [Rodando o projeto](#rodando-o-projeto)


## Alias
No projeto, existem os seguintes *aliases* configurados, cada um deles referentes as suas pastas.
- `@components`
- `@styles`
- `@utils`
- `@contexts`
- `@services`
- `@models`

## Configurando o projeto
Para rodar o projeto é necessário fazer algumas configurações.

1. Renomeie o arquivo `.env.example` para `.env.local`
2. Abra o arquivo e adicione os dados necessários para o funcionamento do BOT do Telegram. 

3. Por fim, adicione os dados necessários para o funcionamento da base do Airtable.

> Para mais informações sobre BOT's do Telegram https://core.telegram.org/bots

> Para mais informações sobre a API do Airtable acesse https://airtable.com/api.

## Rodando o Projeto
Para executar a aplicação siga os seguintes passos: 

1. Instale as dependências executando o comando: 
```bash
npm install
```

2. Após instaladas, você pode executar o projeto a partir do comando:
```bash
npm run dev
```

3. O projeto irá executar e você poderá acessá-lo através do link: http://localhost:3000

