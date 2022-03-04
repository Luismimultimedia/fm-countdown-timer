<template>
  <main class="home-page__container">
    <h1 class="home-page__title">WE'RE LAUNCHING SOON</h1>
    <footer-component />
  </main>
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/footer/FooterComponent.vue";
export default {
  name: "Home",
  components: { FooterComponent },
  setup() {
    const time = new Date();

    return {
      time,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  &__container {
    padding-top: 3rem;
  }
  &__title {
    font-size: 1.5rem;
    color: var(--color-white);
    letter-spacing: 0.4rem;
    text-align: center;
    margin: 0;
  }
}
</style>