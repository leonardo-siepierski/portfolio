export const projects = [
  {
    title: 'Webchat',
    stack: 'Front-end',
    description: `Construí um protótipo de aplicativo de chat utilizando React para a estrutura da aplicação, Chat Engine para as funcionalidades e Axios para a requisição. O deploy da aplicação foi feito através do Heroku.`,
    image: '/images/webchat.png',
    tags: ['React', 'Chat Engine', 'Axios', 'Heroku'],
    source: 'https://github.com/leonardo-siepierski/chat-app',
    visit: 'https://chat-application-0422.herokuapp.com/',
    id: 0,
  },
  {
    title: 'GraphQL Search',
    stack: 'Back-end',
    description: 'Uma aplicação simples em React, com uma página que lista todos os países de uma API com GraphQL e outra que faz a busca de um país específico através do código internacional (Brasil = BR, por exemplo)',
    image: '/images/graphql-search.png',
    tags: ['GraphQL', 'React', 'Apollo Client'],
    source: 'https://github.com/leonardo-siepierski/graphql-country-search',
    visit: 'https://graphql-country-search.herokuapp.com/',
    id: 1,
  },
  {
    title: 'Collor Palette',
    stack: 'Front-end',
    description: 'Um dos meus primeiros projetos na Trybe. Consiste em uma página HTML com estilização CSS e um quadro com 25 quadrados em branco e quatro cores selecionáveis. É possível pintar cada quadro com as cores disponíveis.',
    image: '/images/pixels.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    source: 'https://github.com/leonardo-siepierski/color-palette',
    visit: 'https://vercel.com/leonardo-siepierski/color-palette',
    id: 1,
  },
  {
    title: 'Shopping Cart',
    stack: 'Front-end',
    description: 'Um dos meus primeiros projetos na Trybe. Consiste em uma página com uma requisição à API do Mercado Livre. É possível adicionar e remover produtos, e o carrinho fica salvo mesmo depois de recarregar a página.',
    image: '/images/cart.png',
    tags: ['HTML', 'CSS', 'Javascript'],
    source: 'https://github.com/leonardo-siepierski/graphql-country-search',
    visit: 'https://vercel.com/leonardo-siepierski/shopping-cart-leonardo',
    id: 1,
  }
];

export const TimeLineData = [
  { year: 2016, text: 'Meu primeiro contato com programação (C++)', },
  { year: 2020, text: 'Comecei a aprender HTML e CSS por vídeos no YouTube', },
  { year: 2021, text: 'Iniciei meus estudos na Trybe (Fundamentos e Front-end)' },
  { year: 2022, text: 'Iniciei o módulo de Back-end' }
];