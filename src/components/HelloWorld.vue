<template>
  <div class="hello">
    <i class="iconfont icon-nsisx-zhuyuan_wochuang_tizheng_tongji"></i>
    </div>
</template>
<style lang="scss" src="./HelloWorld.scss" scoped></style>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created() {
    this.axios.get(`/beauty/user/34`).then(res=>{
      console.log(res)
    })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

