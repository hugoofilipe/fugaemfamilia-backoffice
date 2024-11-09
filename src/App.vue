<template>
  <div id="app">
    <div class="menu">
            <button @click="toggleLanguage">{{ language }}</button>
            <router-link to="/" class="menu-link"><h1>Reservas</h1></router-link>
            <router-link to="/form" class="menu-link"><h1>Formulário</h1></router-link>
            <router-link to="/ads" class="menu-link"><h1>Anúncios</h1></router-link>
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

</style>
