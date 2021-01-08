<template>
    <div>
    <article>
      <section>
        <video id="video"></video>
      </section>
      <section>
        <audio id="audio"></audio>
      </section>
      <button id="btn" @click="tackcapture">拍照</button>
      <button @click="opening">开启</button>
      <section>
        <canvas id="canvas"></canvas>
      </section>
      <section><img src="" alt="" id="img" /></section>
    </article>
  </div>

</template>
<style lang="scss" scoped src="./video.scss"></style>
<script src="../../../services/business/video/video.js"></script>