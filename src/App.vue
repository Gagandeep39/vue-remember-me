<template>
  <ul>
    <learning-resource
      v-for="(res, index) in storedResources"
      :key="index"
      :title="res.title"
      :description="res.description"
      :link="res.link"
    ></learning-resource>
  </ul>
</template>

<script>
import LearningResource from './components/LearningResource';

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
    LearningResource
  }
};
</script>

<style>
#app LearningResource {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
