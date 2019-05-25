<template>
  <div class="home">
    <div>
      <img class="logo" src="../assets/nr-logo.svg"/>
      <div class="info">
        <p>6138 Brackendale Road
        Nowendoc, NSW ‎2354
        Australia</p>
        <a href="mailto:contact@nowendoc.run?subject=Website Enquiry">contact@nowendoc.run</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: center;
}

.logo {
  width: 20%;
  min-width: 200px;
}
</style>
