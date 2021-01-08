<template>
  <div class="_map" style="width:100%;height:100%">
    <div class="amap-page-container">
      <!-- <el-amap-search-box
        class="search-box"
        :search-option="searchOption"
        :on-search-result="onSearchResult"
      ></el-amap-search-box>-->

      <div class="search-box" v-if="searchShow">
        <!-- <input v-model="searchKey" type="search" id="search" /> -->
        <el-input v-model="searchKey" placeholder="请输入地址" style="width:310px" id="search"></el-input>
        <!-- <button @click="searchByHand">搜索</button> -->
        <el-button type="primary" @click="searchByHand" style="float:right">搜索</el-button>
        <!-- <button @click="submitAddress" style="margin-left: 2px">确认</button> -->
        <div class="tip-box" id="searchTip"></div>
      </div>
      <el-amap
        ref="map"
        :vid="'amap-vue'"
        :zoom="zoom"
        :center="center"
        class="amap-demo"
        :events="events"
        :amap-manager="amapManager"
      >
        <el-amap-marker v-for="(marker, index) in markers" :position="marker" :key="index"></el-amap-marker>
      </el-amap>

      <el-button type="primary" style="folat:right;margin-top:15px" @click="clickVideo">调用摄像头</el-button>
    </div>
  </div>
</template>


<style lang="scss" scoped src="./home.scss"></style>
<script src="../../../services/basic/home/home.js"></script>