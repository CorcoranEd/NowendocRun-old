<template>
  <div class="home wrapper">
    <!-- <div class="tile">
    </div> -->
    <div class="logo-box">
      <img class="logo-outline" src="../assets/logo-outline.svg" />
    </div>
    <div class="column photo">
      <img src="../assets/nowendoc-run.jpg" />
    </div>
    <div class="column info">
      <div class="row contact-logo-row">
        <div class="column half contact">
          <h1>Nowendoc Run</h1>
          <a
            href="https://www.google.com/maps/place/6138+Brackendale+Rd,+Nowendoc+NSW+2354/@-31.4841013,151.677614,13.6z/data=!4m5!3m4!1s0x6b756a651cdac741:0x34a4e244f9a4de93!8m2!3d-31.4827523!4d151.7160276"
            target="_blank"
            >6138 Brackendale Road<br />
            Nowendoc, NSW ‎2354<br />
            Australia
          </a>
          <a href="mailto:contact@nowendoc.run?subject=Website Enquiry"
            >contact@nowendoc.run</a
          >
        </div>
        <div class="column half logo-column">
          <img class="logo" src="../assets/logo-outline.svg" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home {
  overflow: hidden;
}

.photo {
  padding: 2rem 0;

  img {
    width: 100%;
  }
}

.logo-box {
  width: 100vw;
  height: 100vh;
  position: absolute;
  overflow: hidden;
  z-index: -5;
}

.logo-outline {
  position: relative;
  top: 30%;
  left: 10%;
  width: 120%;
  max-width: 960px;
  opacity: 0.05;
}

.name-column {
  justify-content: flex-end;
}

.logo {
  width: 40%;
  margin-bottom: 1rem;
}

.logo-column {
  align-items: flex-end;
}

@media only screen and (max-width: 1000px) {
  .logo-column {
    align-items: flex-start;
  }

  .contact-logo-row {
    flex-flow: column-reverse nowrap;
  }
}
</style>
