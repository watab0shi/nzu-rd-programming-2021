<template>
  <iframe
    class="livedemo w-full border dark:border-gray-800"
    sandbox="allow-same-origin allow-scripts"
    frameborder="0"
    ref="iframe"
    :style="`height: ${ height }px`"
    :src="src"
    @load="onLoad"
  ></iframe>
</template>

<script>
import { delay } from '../../utils/utils';

export default {
  props: ['src'],
  data() {
    return {
      height: 400
    }
  },
  methods: {
    async onLoad() {
      if (this.$refs.iframe.contentWindow.preload) {
        const setup = this.$refs.iframe.contentWindow.setup.bind(this.$refs.iframe.contentWindow);
        this.$refs.iframe.contentWindow.setup = async () => {
          setup();
          await delay(100);
          this.height = this.$refs.iframe.contentWindow.document.body.scrollHeight + 10;
        }
      } else {
        await delay(100);
        this.height = this.$refs.iframe.contentWindow.document.body.scrollHeight + 10;
      }
    }
  }
};
</script>

<style>

</style>