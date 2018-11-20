<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <v-btn flat href="#/" class="font-weight-light">Tentang Koding</v-btn>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="#/admin"
      >
        <span class="mr-2">Admin</span>
      </v-btn> 
    </v-toolbar> 

    <v-content>
      <div style="margin-top:10px;">
        <router-view/>
      </div>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
