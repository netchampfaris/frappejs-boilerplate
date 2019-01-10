<template>
  <div id="app">
    <desk :sidebarConfig="sidebarConfig">
      <router-view />
    </desk>
  </div>
</template>

<script>
import frappe from 'frappejs';
import Desk from 'frappejs/ui/components/Desk';
import sidebarConfig from './sidebarConfig';

export default {
  name: 'App',
  data() {
    return {
      sidebarConfig,
      showDatabaseSelector: false,
      showDesk: false,
      showSetupWizard: false
    }
  },
  components: {
    Desk
  }
}
</script>
<style lang="scss">
@import "styles/index.scss";
</style>