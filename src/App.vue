<template>

  <div id="app">

    <Navbar></Navbar>
    
    <div class="container-fluid">
      <div class="row">

        <div class="col-2 p-0">
          <Panel></Panel>
        </div>

        <div class="col-10">
          <router-view/>
        </div>

      </div>
    </div>
  </div>

</template>



<script>
import Navbar from '@/components/Navbar';
import Panel from '@/components/Panel';

export default {
  components: {
    Navbar,
    Panel
  },
  name: 'App'
};
</script>



<style scoped>

</style>