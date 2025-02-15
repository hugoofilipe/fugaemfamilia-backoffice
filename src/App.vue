<template>
  <div id="app">
    <div class="horizontal-header">
      <!-- on the right -->
      <div class="nav-links">
        <router-link to="/"><h1>Reservas</h1></router-link>
        <router-link to="/calendar"><h1>Calendário</h1></router-link>
        <router-link to="/form"><h1>Formulário</h1></router-link>
        <router-link to="/ads"><h1>Anúncios</h1></router-link>
      </div>
      <!-- on the left -->
      <div class="lang-button">
        <button class="button-lang" @click="toggleLanguage">{{ language }}</button>
      </div>  
    </div>
    <router-view/>
  </div>
</template>

<script>
import { ref, provide } from 'vue';

export default {
  name: 'App',
  setup() {
    const language = ref('pt');

    const toggleLanguage = () => {
      language.value = language.value === 'pt' ? 'en' : 'pt';
    };

    provide('language', language);

    return {
      language,
      toggleLanguage,
    };
  },
}
</script>

<style>
h1 {
    text-align: center;
    color: #333;
}

.menu {
    display: flex;
    justify-content: space-around;
    background-color: #f1f1f1;
    padding: 10px;
}

.button-lang {
    background-color: gray;
    border: none;
    cursor: pointer;
    font-size: 20px;
    font-weight: bold;
    color: white;
    padding: 20px 10px;
    border-radius: 5px;
}

.horizontal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #f1f1f1;
    padding: 10px;
}

.nav-links {
    display: flex;
    gap: 20px;
}

.lang-button {
    display: flex;
    align-items: center;
}
</style>
