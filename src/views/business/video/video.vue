<template>
 <div>
    <div id="app">
    <div v-show="showContainer" class="face-capture" id="face-capture">
      <p class="tip">请保持人像在取景框内</p>
      <video
       id="video"
       :width="vwidth"
       :height="vheight"
       playsinline
       webkit-playsinline>
      </video>
      <canvas id="refCanvas" :width="cwidth" :height="cheight"></canvas>
<!--       <img class="img-cover" src="" alt=""/> -->
      <p class="contentp">{{ scanTip }}</p>
    </div>
    <div v-if="!showContainer" class="img-face">
      <img class="imgurl" :src="imgUrl" />
    </div>
  </div>
 </div>
</template>
<style lang="scss" scoped src="./video.scss"></style>
<script src="../../../services/business/video/video.js"></script>