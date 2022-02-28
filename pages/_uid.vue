<template>
  <section>
    <SliceZone type="page" :uid="$route.params.uid" />
  </section>
</template>

<script>
import SliceZone from "vue-slicezone";
export default {
  name: "Homepage",
  components: {
    SliceZone,
  },
};
</script>
