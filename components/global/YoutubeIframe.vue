<template>
  <div class="youtube">
    <div class="youtube_inner">
      <iframe width="560" height="315" :src="src" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
export default {
  props: ['src']
};
</script>

<style>
.youtube {
  width:100%;
  padding:0;
  box-sizing:border-box;
}
.youtube_inner {
  position:relative;
  padding-top:56.25%;
  height:0;
  overflow:hidden;
}
.youtube iframe {
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
}
</style>