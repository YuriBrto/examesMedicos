<!-- src/views/ExamDetails.vue -->
<template>
    <div>
      <h2>Detalhes do Exame</h2>
      <p>ID: {{ id }}</p>
      <p>Aqui você pode buscar mais detalhes pela API futuramente.</p>
      <router-link to="/">Voltar</router-link>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  
  const route = useRoute()
  const id = route.params.id
  </script>
  