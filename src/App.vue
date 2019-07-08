<template lang='pug'>
  #app.container-fluid
    #nav.navbar.navbar-expand-lg
      .navbar-brand Rainforest
      .navbar-nav
        router-link.nav-item.m-3(to='/') Slides
        router-link.nav-item.m-3(to='/example') Example
    transition(name="slide-fade" mode="out-in")
      router-view
</template>

<style lang="scss">
html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: $light;
}
#nav {
  padding: 30px;
  position: fixed;
  top: 0;
  font-size: 24px;
  .navbar-brand {
    font-family: 'Abril Fatface', cursive;
    color: #4DB6AC;
    font-size: 36px;
  }
  a {
    font-weight: bold;
    color: $gray-600;
    &.router-link-exact-active {
      color: $light;
    }
  }
}
</style>
