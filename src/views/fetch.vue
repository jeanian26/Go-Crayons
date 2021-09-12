<template>
  <div>
      {{info.data.results[0].gender}}<br>
      {{info.data.results[0].name.title}}
   </div>
</template>

<script>

  export default {
    name: 'Products',

    data() {
      return {
        info: []
      }
    },

    mounted() {
      this.axios
      .get('https://randomuser.me/api/')
      .then(response => (this.info = response))
    }
  }
</script>