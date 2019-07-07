<template lang='pug'>
  #app.container-fluid
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
  a {
    font-weight: bold;
    color: $light;
    &.router-link-exact-active {
      color: $primary;
    }
  }
}
</style>
