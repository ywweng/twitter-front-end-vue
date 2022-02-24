<template>
    <div class="container vh-100">
      <div class="row h-100">
        <div class="col">
          <Menu />
        </div>
        <div class="col">123</div>
        <div class="col">123</div>
      </div>
    </div>
</template>

<script>
  import Menu from './../components/Menu.vue'
  export default {
    name: 'Main',
    components: {
      Menu,
    },
  }
</script>
