<template>
  <v-app>
    <v-toolbar app dark color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon v-if="$route.name !== 'home'" @click="$router.go(-1) ">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-toolbar-title>
        <span>My store</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>shopping_cart</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer" class="blue darken-2">
       <v-list>
        <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
          <v-list-tile-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ link.text }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Home from "./components/Home";
export default {
  name: "App",
  components: {
    Home
  },
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'dashboard', text: 'Home', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/' },
        { icon: 'person', text: 'About', route: '/about' },
      ]
    };
  }
};
</script>