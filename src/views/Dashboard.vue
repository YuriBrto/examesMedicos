<template>
    <div class="dashboard-container">
      <h1 class="title">Exames do Paciente</h1>
      <div class="exam-cards">
        <ExamCard
          v-for="exam in exams"
          :key="exam.id"
          :exam="exam"
        />
      </div>
  
      <!-- SVG onde as ondas serão desenhadas -->
      <svg id="svg"></svg>
  
      <a class="the-most" target="_blank" href="https://codepen.io/2017/popular/pens/9/">
        <img src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/themost-2017.png" alt="Logo CodePen" />
      </a>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import ExamCard from '../components/ExamCard.vue'
  // Dados de exemplo para exames
  const exams = [
    { id: 1, nome: 'Hemograma', status: 'Em aberto' },
    { id: 2, nome: 'Raio-X', status: 'Finalizado' },
    { id: 3, nome: 'Urina', status: 'Encaminhado' }
  ];
  console.log(exams);
  
  </script>
  
  <style scoped lang="scss">
  /* Reset */
  *, *:before, *:after {
    box-sizing: border-box;
  }
  
  /* Layout da página */
  .dashboard-container {
    margin: auto;
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    overflow: auto;
    background: linear-gradient(315deg, rgba(101, 0, 94, 1) 3%, rgba(60, 132, 206, 1) 38%, rgba(48, 238, 226, 1) 68%, rgba(255, 25, 25, 1) 98%);
    animation: gradient 15s ease infinite;
    background-size: 400% 400%;
    background-attachment: fixed;
    position: relative;
    min-height: 100vh;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 100%;
    }
    100% {
      background-position: 0% 0%;
    }
  }
  
  /* Título */
  
.title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  margin: 2.5rem;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    display: block;
    width: 60px;
    height: 4px;
    margin: 12px auto 0;
    background: rgba(255, 255, 255, 0.7);
    border-radius: 2px;
    animation: underline-glow 2s infinite alternate;
  }
}

@keyframes underline-glow {
  0% {
    background: rgba(255, 255, 255, 0.5);
    width: 60px;
  }
  100% {
    background: rgba(255, 255, 255, 1);
    width: 100px;
  }
}

  /* Cards dos exames */
.exam-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
  width: 100%;
  z-index: 1;
}
  /* Ondas de fundo */
  .wave {
    background: rgb(255 255 255 / 25%);
    border-radius: 1000% 1000% 0 0;
    position: fixed;
    width: 200%;
    height: 12em;
    animation: wave 10s -3s linear infinite;
    transform: translate3d(0, 0, 0);
    opacity: 0.8;
    bottom: 0;
    left: 0;
    z-index: -1;
  }
  
  .wave:nth-of-type(2) {
    bottom: -1.25em;
    animation: wave 18s linear reverse infinite;
    opacity: 0.8;
  }
  
  .wave:nth-of-type(3) {
    bottom: -2.5em;
    animation: wave 20s -1s reverse infinite;
    opacity: 0.9;
  }
  
  @keyframes wave {
    2% {
      transform: translateX(1);
    }
    25% {
      transform: translateX(-25%);
    }
    50% {
      transform: translateX(-50%);
    }
    75% {
      transform: translateX(-25%);
    }
    100% {
      transform: translateX(1);
    }
  }
  
  /* Estilos para o link da imagem */
  .the-most {
    position: fixed;
    z-index: 1;
    bottom: 0;
    left: 0;
    width: 50vw;
    max-width: 100px;
    padding: 10px;
    
    img {
      max-width: 100%;
    }
  }
  </style>
  