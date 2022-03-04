<template>
  <div class="footer__container">
      <figure class="footer__images">
          <img 
              src="../../assets/images/icon-facebook.svg"
              alt="facebook social media icon"
          />
          <img 
              src="../../assets/images/icon-pinterest.svg"
              alt="pinterest social media icon"
          />
          <img 
              src="../../assets/images/icon-instagram.svg"
              alt="instagram social media icon"
          />

      </figure>
  </div>
</template>

<script>
export default {
    name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
.footer {
    &__container {
        align-items: center;
        background-image: url("/assets/images/pattern-hills.svg");
        background-repeat: no-repeat;
        background-size: cover;
        bottom: 0;
        display: flex;
        height: 10rem;
        justify-content: center;
        position: absolute;
        width: 100%;
    }
    &__images {
        display: flex;
        justify-content: space-between;
        width: 30%;
    }
}
</style>