<template>
  <div class="homepage">
    <Header />
    <nuxt />
  </div>
</template>

<script>
import Header from "~/components/Header.vue";

export default {
  components: {
    Header,
  },
  head() {
    return {
      title: "Prismic Nuxt",
    };
  },
  async middleware({ store, $prismic }) {
    await store.dispatch("fetchMenu", $prismic);
  },
};
</script>
