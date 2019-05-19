<template>
  <div class="home">
    <div id="header-container">

      <div id="title-container">
        <h1>Home page</h1>
      </div>

      <div id="nav-container">
        <router-link tag="li" to="/">Go to Welcome Page</router-link>
        <router-link tag="li" to="/home/pageOne">Go to Page One</router-link>
        <router-link tag="li" to="/home/pageTwo">Go to Page Two</router-link>
        <a @click="setParameter()">Go to page Two with parameter</a>
        <router-link tag="li" to="/home/pageThree">Go to Page Three. (It imports a component directly)</router-link>
      </div>

    </div>

    <div id="component-container">
      <router-view />
    </div>
    
  </div>
</template>

<script>

export default {
  methods: {
    setParameter() {
      let param = prompt("Insert the parameter to send to Page Two");

      this.$router.push({name: 'pageTwoWithParameters', params: {parameter: param}})
    }
  }
};
</script>
