<template>
  <div class="time-square__container">
    <div class="time-square__square">
      <p class="time-square__time">{{ countdownTime }}</p>
    </div>
    <p class="time-square__description">{{ descriptionTime }}</p>
  </div>
</template>

<script>
import { toRefs } from "@vue/reactivity";
export default {
  name: "TimeSquareComponent",
  props: {
    time: Number,
    title: String,
  },
  setup(props) {
    const { time: countdownTime, title: descriptionTime } = toRefs(props);
    return {
      countdownTime,
      descriptionTime,
    };
  },
};
</script>

<style lang="scss" scoped>
.time-square {
  &__container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__square {
    align-items: center;
    background-color: var(--color-dark-desaturated-blue);
    border-radius: 0.4rem;
    display: flex;
    height: 5rem;
    justify-content: center;
    position: relative;
    width: 5rem;
    @media (min-width: 1080px) {
      height: 13rem;
      width: 13rem;
    }
    &::before {
      background-color: var(--color-very-dark-blue);
      border-radius: 15px;
      content: "";
      height: 10px;
      left: -4px;
      position: absolute;
      top: 46%;
      width: 10px;
    }
    &::after {
      background-color: var(--color-very-dark-blue);
      border-radius: 15px;
      content: "";
      height: 10px;
      right: -4px;
      position: absolute;
      top: 46%;
      width: 10px;
    }
  }
  &__time {
    margin: 0;
    font-size: 2.6rem;
    font-weight: bold;
    color: var(--color-soft-red);
    @media (min-width: 1080px) {
      font-size: 6.6rem;
    }
  }
  &__description {
    color: var(--color-white);
    font-weight: 700;
    letter-spacing: 0.15rem;
    font-size: 0.6rem;
    text-align: center;
    margin: 0.5rem;
    @media (min-width: 1080px) {
      letter-spacing: 0.4rem;
      font-size: 1.4rem;
      margin-top: 1.7rem;
    }
  }
}
</style>