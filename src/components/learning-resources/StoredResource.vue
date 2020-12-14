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
import LearningResource from './LearningResource';

export default {
  // We can use 'stored-resources' also
  // In html me have to use camelCasse as '-' is not suppoerted
  inject: ['storedResources'],
  components: {
    LearningResource
  }
};
</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
  margin: auto;
  max-width: 40rem;
}
</style>
