<template>
  <div>
    <button class="border p-2" role="button" @click="test">
      <slot />
    </button>
    <!-- {{ i }} -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      // i: 0,
    };
  },
  methods: {
    test() {
      // console.log("test");
      // this.$router.push('/test')
    },
  },
};
</script>
