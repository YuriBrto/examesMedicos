<!-- src/components/ExamCard.vue -->
<template>
    <div class="exam-card">
      <h3>{{ exam.nome }}</h3>
      <p>Status: <span :class="statusClass">{{ exam.status }}</span></p>
      <router-link :to="`/exame/${exam.id}`" class="details-link">Ver detalhes</router-link>
    </div>
  </template>
  
  <script setup>
  defineProps({
    exam: Object
  })
  
  // Estilo condicional para status
  const statusClass = computed(() => {
    switch (exam.status.toLowerCase()) {
      case 'finalizado':
        return 'status-finalizado'
      case 'em aberto':
        return 'status-aberto'
      case 'encaminhado':
        return 'status-encaminhado'
      default:
        return ''
    }
  })
  </script>
  
  <style scoped lang="scss">
  .exam-card {
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border-radius: 1rem;
    padding: 1.5rem;
    color: #fff;
    width: 100%;
    max-width: 300px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  
    &:hover {
      transform: translateY(-8px);
      box-shadow: 0 12px 28px rgba(0, 0, 0, 0.3);
    }
  
    h3 {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
    }
  
    p {
      margin: 0.5rem 0;
      font-weight: 500;
    }
  
    .details-link {
      margin-top: 1rem;
      display: inline-block;
      color: #fff;
      background: rgba(255, 255, 255, 0.2);
      padding: 0.5rem 1rem;
      border-radius: 0.5rem;
      text-decoration: none;
      transition: background 0.3s;
  
      &:hover {
        background: rgba(255, 255, 255, 0.4);
      }
    }
  }
  
  /* Cores de status */
  .status-finalizado {
    color: #00e676;
  }
  
  .status-aberto {
    color: #ffea00;
  }
  
  .status-encaminhado {
    color: #29b6f6;
  }
  </style>
  