<template>

    <div>
    <notifications></notifications>
    <router-view :key="$route.fullPath"></router-view>
  </div>

</template>

<script>

import {mapActions, mapGetters} from "vuex";

  export default {

    computed: {
      ...mapGetters("auth", ["user"])
    },


    methods: {
      disableRTL() {
        if (!this.$rtl.isRTL) {
          this.$rtl.disableRTL();
        }
      },
      toggleNavOpen() {
        let root = document.getElementsByTagName('html')[0];
        root.classList.toggle('nav-open');
      },

      ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),

      logout() {
        this.sendLogoutRequest();
        this.$router.push("/");
      }
    },
    mounted() {
      this.$watch('$route', this.disableRTL, { immediate: true });
      this.$watch('$sidebar.showSidebar', this.toggleNavOpen)

      if (localStorage.getItem("authToken")) {
        this.getUserData();
      }
    },


  };
</script>

<style lang="scss">


</style>
