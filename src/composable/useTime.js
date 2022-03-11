import { onMounted, ref } from "vue";

const useTime = () => {
    const currentTime = ref(new Date());
    const time = ref(new Date("Mar 24, 2022 0:0:0").getTime());
    const days = ref(null);
    const hours = ref(null);
    const minutes = ref(null);
    const seconds = ref(null);
    onMounted(() => {
        setInterval(() => {
            currentTime.value = new Date().getTime();
            let timeleft = time.value - currentTime.value;
            days.value = Math.floor(timeleft / (1000 * 60 * 60 * 24));
            hours.value = Math.floor(
                (timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
            );
            minutes.value = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
            seconds.value = Math.floor((timeleft % (1000 * 60)) / 1000);
        }, 1000);
    });
    return {
        days,
        hours,
        minutes,
        seconds,
    };
}

export default useTime;