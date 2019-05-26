<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> -->
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Work Sans", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #303030;
}

a {
  color: #303030;
  margin-bottom: 0.5rem;
}

h1 {
  font-family: "Work Sans", Helvetica, Arial, sans-serif;
  font-weight: 500;
  margin-bottom: 0.5em;
}

.wrapper {
  margin: 0 auto;
  width: 100%;
  max-width: 900px;
  padding: 0 2rem;
}

.column {
  display: flex;
  flex-flow: column nowrap;

  &.half {
    width: 50%;
    padding: 0 1rem;
  }
}

.row {
  display: flex;
  flex-flow: row nowrap;
  margin: 0 -1rem;
}

.flex {
  display: flex;
  flex-flow: row nowrap;
}

@media only screen and (max-width: 1000px) {
  .wrapper {
    padding: 0 1rem;
  }

  .column {
    &.half {
      width: 100%;
      padding: 0 0.5rem;
    }
  }

  .row {
    margin: 0 -0.5rem;
    flex-flow: column nowrap;
  }
}
</style>
