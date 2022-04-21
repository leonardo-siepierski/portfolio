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
    description: 'Uma aplicação simples em React, com uma página que lista todos os países de uma API com GraphQL e outra que faz a busca de um país específico através do código internacional',
    image: '/images/graphql-search.png',
    tags: ['GraphQL', 'React', 'Apollo Client'],
    source: 'https://github.com/leonardo-siepierski/graphql-country-search',
    visit: 'https://graphql-country-search.herokuapp.com/',
    id: 1,
  }
];

export const TimeLineData = [
  { year: 2016, text: 'Meu primeiro contato com programação (C++)', },
  { year: 2020, text: 'Comecei a aprender HTML e CSS por vídeos no YouTube', },
  { year: 2021, text: 'Iniciei meus estudos na Trybe (Fundamentos e Front-end)' },
  { year: 2022, text: 'Iniciei o módulo de Back-end' }
];