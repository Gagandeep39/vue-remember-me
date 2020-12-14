<template>
  <the-header title="Remember Me"></the-header>
  <stored-resource :storedResources="storedResources"></stored-resource>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import StoredResource from './components/StoredResource.vue';

export default {
  name: 'App',
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'Official VueJS documentation',
          link: 'https://vuejs.org'
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Starting point for learning anything',
          link: 'https://vuejs.org'
        }
      ]
    };
  },
  components: {
    StoredResource,
    TheHeader
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
