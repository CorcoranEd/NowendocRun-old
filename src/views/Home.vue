<template>
  <div class="home">
    <div class="tile">
      <img class="logo" src="../assets/nr-logo.svg" />
      <div class="info">
        <p>6138 Brackendale Road Nowendoc, NSW ‎2354 Australia</p>
        <a href="mailto:contact@nowendoc.run?subject=Website Enquiry"
          >contact@nowendoc.run</a
        >
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
  background-image: url("../assets/nowendoc-run.jpg");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
}

.logo {
  width: 20%;
  min-width: 200px;
  margin-bottom: 1rem;
}

.tile {
  padding: 2rem 0;
  background: rgba(255, 255, 255, 0.85);
}
</style>
