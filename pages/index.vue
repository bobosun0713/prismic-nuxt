<template>
  <h1>首頁</h1>
</template>

<script>
export default {
  name: "IndexPage",
  middleware({ redirect }) {
    return redirect("/首頁");
  },
};
</script>
