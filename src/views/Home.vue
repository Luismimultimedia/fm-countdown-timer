<template>
  <main class="home-page__container">
    <h1 class="home-page__title">WE'RE LAUNCHING SOON</h1>
    <section class="home-page__section-time">
      <time-square-component title="DAYS" :time="days" />
      <time-square-component title="HOURS" :time="hours" />
      <time-square-component title="MINUTES" :time="minutes" />
      <time-square-component title="SECONDS" :time="seconds" />
    </section>
    <footer-component />
  </main>
</template>

<script>
// @ is an alias to /src
import FooterComponent from "@/components/footer/FooterComponent.vue";
import TimeSquareComponent from "@/components/timeSquare/TimeSquareComponent.vue";
import useTime from "../composable/useTime";
export default {
  name: "Home",
  components: {
    FooterComponent,
    TimeSquareComponent,
  },
  setup() {
    const { days, hours, minutes, seconds } = useTime();
    return {
      days,
      hours,
      minutes,
      seconds,
    };
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  &__container {
    padding-top: 10rem;
  }
  &__section-time {
    display: flex;
    width: 100%;
    padding: 4rem 1rem;
    justify-content: space-around;
    @media (min-width: 1080px) {
      margin-top: 10.5rem;
      padding: 0rem 38rem;
    }
  }
  &__title {
    font-size: 1.3rem;
    color: var(--color-white);
    letter-spacing: 0.5rem;
    text-align: center;
    margin: 0;
    padding: 0 1.5rem;
  }
}
</style>