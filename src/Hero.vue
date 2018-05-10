<template>
<div class="container">
  <div class="row">
    <div class="col-sm">
        Hello {{ message }}
    </div>
    <div class="col-sm">
        Hello {{ message }}
    </div>
        <div class="col-sm">
        Hello {{ message }}
    </div>
  </div>

</div>
</template>

<script>
  module.exports = {
      data: function () {
          return {
              message: 'world'
          }
      }
  }
</script>

<style lang="scss">
  div.container {
      background: red;
  }
</style>

