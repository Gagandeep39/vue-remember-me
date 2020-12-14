<template>
  <base-card>
    <base-button
      @click="setSelectedTab('stored-resource')"
      :mode="storedResButtonMode"
      >View</base-button
    >
    <base-button
      @click="setSelectedTab('add-resource')"
      :mode="addResButtonMode"
      >Add</base-button
    >
  </base-card>
  <component :is="selectedTab"></component>
</template>
<script>
import AddResource from './AddResource';
import StoredResource from './StoredResource';

export default {
  components: {
    StoredResource,
    AddResource
  },
  data() {
    return {
      // Resource name
      selectedTab: 'stored-resource',
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
  methods: {
    setSelectedTab(tab) {
      console.log(tab);
      this.selectedTab = tab;
    }
  },
  provide() {
    return {
      storedResources: this.storedResources
    };
  },
  computed: {
    storedResButtonMode() {
      return this.selectedTab === 'stored-resource' ? null : 'flat';
    },
    addResButtonMode() {
      return this.selectedTab === 'add-resource' ? null : 'flat';
    }
  }
};
</script>
<style scoped></style>
