<template>
    <div class="container">
      <header class="title">
        <div class="svg-container">
          <svg viewBox="0 0 800 400" class="svg">
            <path
              id="curve"
              fill="#50c6d8"
              d="M 800 300 Q 400 350 0 300 L 0 0 L 800 0 L 800 300 Z"
            />
          </svg>
        </div>
        <h1>Acompanhamento de pacientes</h1>
      </header>
  
      <main class="opcoes">
        <section class="escolhas">
          <li><button class="option-button" @click="goToDashboard">Acompanhar exames</button></li>
          <li><button class="option-button">Solicitar exames</button></li>
          <li><button class="option-button">Acompanhar paciente</button></li>
        </section>
      </main>
  
      <footer>
        <small>© 2025 Sistema de Acompanhamento | <a href="#">Política de Privacidade</a></small>
      </footer>
    </div>
  </template>
  
  
  <script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function goToDashboard() {
  router.push('/dashboard')
}
</script>

<style lang="scss">
html, body {
  height: 100%;
  margin: 0;
}
</style>

<style scoped lang="scss">
@import 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700';

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.container {
  font-family: 'Ubuntu', sans-serif;
  color: #333;
  text-align: center;
  min-height: 100vh;
  position: relative;
}

.title {
  position: relative;
  height: 100vh; // ocupa toda a tela
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  overflow: hidden;
  padding-top: 200px;

  h1 {
    animation: fadeIn 1s ease-out;
    position: relative;
    z-index: 1;
    font-size: 2.5rem;
    font-weight: 800;
    text-shadow: 0 2px 5px rgba(0,0,0,0.4);
  }
  .escolhas li {
  opacity: 0;
  animation: fadeInUp 1s ease-out forwards;
  animation-delay: 0.3s;
}

  .svg-container {
    position: absolute;
    inset: 0;
    z-index: 0;

    .svg {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

.opcoes {
  background: linear-gradient(to bottom, #ffffff 0%, #dddee1 100%);
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 1vh 1vh;
  position: relative;

}

.escolhas {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-width: 400px;
  margin: 0 auto;
}

.option-button {
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: #fff;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #0a77a1;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  }
}

footer {
  background: #dddee1;
  padding: 3vh 0;
  text-align: center;
}

small {
  opacity: 0.7;
  font-weight: 400;

  color: #0a77a1;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;

    &:hover {
      color: #005f6b;
    }
  }



@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>