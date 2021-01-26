

<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
                <a class="navbar-brand" href="#pablo">{{routeName}}</a>
      </div>

    </div>
  </nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import Modal from '@/components/Modal';

export default {
  components: {
    CollapseTransition,
    Modal
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    isRTL() {
      return this.$rtl.isRTL;
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
<style>
</style>




<!--
<template>
  <nav class="navbar navbar-expand-lg navbar-absolute"
       :class="{'bg-white': showMenu, 'navbar-transparent': !showMenu}">
    <div class="container-fluid">
      <div class="navbar-wrapper">
        <div class="navbar-toggle d-inline" :class="{toggled: $sidebar.showSidebar}">
          <button type="button"
                  class="navbar-toggler"
                  aria-label="Navbar toggle button"
                  @click="toggleSidebar">
            <span class="navbar-toggler-bar bar1"></span>
            <span class="navbar-toggler-bar bar2"></span>
            <span class="navbar-toggler-bar bar3"></span>
          </button>
        </div>
        <a class="navbar-brand" href="#pablo">{{routeName}}</a>
      </div>
      <button class="navbar-toggler" type="button"
              @click="toggleMenu"
              data-toggle="collapse"
              data-target="#navigation"
              aria-controls="navigation-index"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
        <span class="navbar-toggler-bar navbar-kebab"></span>
      </button>

      <collapse-transition>
        <div class="collapse navbar-collapse show" v-show="showMenu">
          <ul class="navbar-nav" :class="$rtl.isRTL ? 'mr-auto' : 'ml-auto'">
            <div class="search-bar input-group" @click="searchModalVisible = true">
              &lt;!&ndash; <input type="text" class="form-control" placeholder="Search...">
              <div class="input-group-addon"><i class="tim-icons icon-zoom-split"></i></div> &ndash;&gt;
              <button class="btn btn-link" id="search-button" data-toggle="modal" data-target="#searchModal">
                <i class="tim-icons icon-zoom-split"></i>
              </button>
              &lt;!&ndash; You can choose types of search input &ndash;&gt;
            </div>
            <modal :show.sync="searchModalVisible"
                   class="modal-search"
                   id="searchModal"
                   :centered="false"
                   :show-close="true">
              <input slot="header" v-model="searchQuery" type="text" class="form-control" id="inlineFormInputGroup" placeholder="SEARCH">
            </modal>
            <base-dropdown tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a" class="nav-item">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="notification d-none d-lg-block d-xl-block"></div>
                <i class="tim-icons icon-sound-wave"></i>
                <p class="d-lg-none">
                  New Notifications
                </p>
              </a>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Mike John responded to your email</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">You have 5 more tasks</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Your friend Michael is in town</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Another notification</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Another one</a>
              </li>
            </base-dropdown>
            <base-dropdown tag="li"
                           :menu-on-right="!$rtl.isRTL"
                           title-tag="a"
                           class="nav-item"
                           menu-classes="dropdown-navbar">
              <a slot="title" href="#" class="dropdown-toggle nav-link" data-toggle="dropdown" aria-expanded="true">
                <div class="photo">
                  <img src="img/anime3.png">
                </div>
                <b class="caret d-none d-lg-block d-xl-block"></b>
                <p class="d-lg-none">
                  Log out
                </p>
              </a>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Profile</a>
              </li>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Settings</a>
              </li>
              <div class="dropdown-divider"></div>
              <li class="nav-link">
                <a href="#" class="nav-item dropdown-item">Log out</a>
              </li>
            </base-dropdown>
          </ul>
        </div>
      </collapse-transition>
    </div>
  </nav>
</template>
<script>
import { CollapseTransition } from 'vue2-transitions';
import Modal from '@/components/Modal';

export default {
  components: {
    CollapseTransition,
    Modal
  },
  computed: {
    routeName() {
      const { name } = this.$route;
      return this.capitalizeFirstLetter(name);
    },
    isRTL() {
      return this.$rtl.isRTL;
    }
  },
  data() {
    return {
      activeNotifications: false,
      showMenu: false,
      searchModalVisible: false,
      searchQuery: ''
    };
  },
  methods: {
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    }
  }
};
</script>
<style>
</style>












-->






















<!--<template>-->

<!--  <div id="app">-->
<!--    <header>-->
<!--      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">-->
<!--        <router-link class="navbar-brand" to="/"></router-link>-->
<!--        <button-->
<!--          class="navbar-toggler"-->
<!--          type="button"-->
<!--          data-toggle="collapse"-->
<!--          data-target="#navbarCollapse"-->
<!--          aria-controls="navbarCollapse"-->
<!--          aria-expanded="false"-->
<!--          aria-label="Toggle navigation"-->
<!--        >-->
<!--          <span class="navbar-toggler-icon"></span>-->
<!--        </button>-->
<!--        <div class="collapse navbar-collapse" id="navbarCollapse">-->
<!--          <ul class="navbar-nav mr-auto">-->
<!--            <li class="nav-item">-->
<!--              <router-link class="nav-link" to="/Home">Home</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item" v-show="!user">-->
<!--              <router-link class="nav-link" to="/login">Login</router-link>-->
<!--            </li>-->
<!--            <li class="nav-item" v-show="!user">-->
<!--              <router-link class="nav-link" to="/register"-->
<!--              >Register</router-link-->
<!--              >-->
<!--            </li>-->
<!--            <li class="nav-item" v-show="user">-->
<!--              <a class="nav-link" href="#" @click="logout">Logout</a>-->
<!--            </li>-->
<!--          </ul>-->
<!--        </div>-->
<!--      </nav>-->
<!--    </header>-->
<!--  </div>-->
<!--</template>-->
<!--<script>-->
<!--  import { CollapseTransition } from 'vue2-transitions';-->
<!--  import Modal from '@/components/Modal';-->
<!--  import {mapActions, mapGetters} from "vuex";-->

<!--  export default {-->
<!--    components: {-->
<!--      CollapseTransition,-->
<!--      Modal,-->

<!--    },-->

<!--    mounted() {-->
<!--      if (localStorage.getItem("authToken")) {-->
<!--        this.getUserData();-->
<!--      }-->
<!--    },-->

<!--    computed: {-->
<!--      routeName() {-->
<!--        const { name } = this.$route;-->
<!--        return this.capitalizeFirstLetter(name);-->
<!--      },-->
<!--      isRTL() {-->
<!--        return this.$rtl.isRTL;-->
<!--      },-->

<!--      currentUser() {-->
<!--        return this.$store.state.auth.user;-->
<!--      },-->
<!--      showAdminBoard() {-->
<!--        if (this.currentUser && this.currentUser.roles) {-->
<!--          return this.currentUser.roles.includes('ROLE_ADMIN');-->
<!--        }-->

<!--        return false;-->
<!--      },-->
<!--      showModeratorBoard() {-->
<!--        if (this.currentUser && this.currentUser.roles) {-->
<!--          return this.currentUser.roles.includes('ROLE_MODERATOR');-->
<!--        }-->

<!--        return false;-->
<!--      },-->

<!--      ...mapGetters("auth", ["user"])-->
<!--    },-->
<!--    data() {-->
<!--      return {-->
<!--        activeNotifications: false,-->
<!--        showMenu: false,-->
<!--        searchModalVisible: false,-->
<!--        searchQuery: ''-->
<!--      };-->


<!--    },-->
<!--    methods: {-->
<!--      capitalizeFirstLetter(string) {-->
<!--        return string.charAt(0).toUpperCase() + string.slice(1);-->
<!--      },-->
<!--      toggleNotificationDropDown() {-->
<!--        this.activeNotifications = !this.activeNotifications;-->
<!--      },-->
<!--      closeDropDown() {-->
<!--        this.activeNotifications = false;-->
<!--      },-->
<!--      toggleSidebar() {-->
<!--        this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);-->
<!--      },-->
<!--      hideSidebar() {-->
<!--        this.$sidebar.displaySidebar(false);-->
<!--      },-->
<!--      toggleMenu() {-->
<!--        this.showMenu = !this.showMenu;-->
<!--      },-->
<!--      ...mapActions("auth", ["sendLogoutRequest", "getUserData"]),-->

<!--      logout() {-->
<!--        this.sendLogoutRequest();-->
<!--        this.$router.push("/");-->
<!--      }-->

<!--    }-->
<!--  };-->
<!--</script>-->
<!--<style>-->
<!--</style>-->
