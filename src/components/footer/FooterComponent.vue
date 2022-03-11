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
  name: "FooterComponent",
};
</script>

<style lang="scss" scoped>
.footer {
  &__container {
    align-items: center;
    background-image: url("/assets/images/pattern-hills.svg");
    background-position-x: -50rem;
    background-repeat: no-repeat;
    background-size: cover;
    bottom: 0;
    display: flex;
    height: 12rem;
    justify-content: center;
    position: absolute;
    width: 100%;
    @media (min-width: 1080px) {
      background-position-x: 0rem;
    }
  }
  &__images {
    display: flex;
    justify-content: space-between;
    width: 35%;
    @media (min-width: 1080px) {
      width: 10%;
    }
    img {
      height: 2rem;
      width: 2rem;
    }
  }
}
</style>