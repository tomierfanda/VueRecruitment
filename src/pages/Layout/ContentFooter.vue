<template>
  <footer class="footer" v-if="['Dashboard','Setting'].indexOf($route.name) > -1">
    <div class="container">
      <div class="copyright text-center">
        &copy; {{ new Date().getFullYear() }}
        <a href="#" target="_blank"
          >Creative Tim</a
        >, made with <i class="fa fa-heart heart"></i> Tekno Global
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style></style>
