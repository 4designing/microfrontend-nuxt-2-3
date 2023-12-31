<template>
  <div>
    <!-- <div><MyCmp></MyCmp></div> -->
    <BaseButton @click="goHome">base button</BaseButton>
    Nuxt 2 project => Access store
    <p data-testid="counter-values">
      Counter: {{ counter.n }}. Double: {{ counter.double }}
    </p>
    <!-- {{ fruits }} -->
  </div>
</template>

<script>
// import { useCounter } from '@/store/counter';
// const counter = useCounter();
import MyCmp from "~/components/MyCmp.vue";
import BaseButton from "~/base/components/BaseButton.vue";
export default {
  name: "testPage",
  components: { MyCmp, BaseButton },
  computed: {
    counter(){
      return useCounter()
    }
    // fruits() {
		// 	return this.$store.fruits.state.fruits
		// },
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
  beforeUnmount() {
    console.log("destroyed");
  },
};
</script>
