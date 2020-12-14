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
  <keep-alive>
    <component :is="selectedTab"></component>
  </keep-alive>
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
      this.selectedTab = tab;
    },
    addResource(title, description, link) {
      const newResource = {
        id: new Date().toISOString(),
        title,
        description,
        link
      };
      this.storedResources.unshift(newResource);
      this.selectedTab = 'stored-resource';
    },
    deleteResource(id) {
      const index = this.storedResources.findIndex(res => res.id === id);
      this.storedResources.splice(index, 1);
    }
  },
  provide() {
    return {
      storedResources: this.storedResources,
      addResource: this.addResource,
      deleteResource: this.deleteResource
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
