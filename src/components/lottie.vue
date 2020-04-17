<template>
  <div>
    <div ref="animContainer" :style="style"></div>
  </div>
</template>

<script>
  import lottie from 'lottie-web';
export default {
  props: {
    options: {
      type: Object,
      required: true
    },
    width: Number,
    height: Number
  },
  data() {
    return {
      style: {
        width: this.width ? `${this.width}px` : '100%',
        height: this.height ? `${this.height}px` : '100%',
        overflow: 'hidden',
        margin: '0 auto'
      },
    }
  },
  mounted() {
    this.anim = lottie.loadAnimation({
      container: this.$refs.animContainer, //用于渲染动画的HTML元素，需确保在调用loadAnimation时该元素已存在
      renderer: "svg", //渲染器，可选值'svg'/'canvas'/'html'，svg支持的功能最多，但html的性能更好且支持3d图层
      loop: this.options.loop !== false, //可传循环的的特定次数，默认值true
      autoplay: this.options.autoplay !== false, //是否自动播放
      animationData: this.options.animationData //JSON数据路径，与path互斥
    });
    this.$emit('anim', this.anim);
  }
};
</script>

<style scoped>
</style>