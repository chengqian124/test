<template>
  <div class="loginBox">
    <el-card class="box-card">
      <div class="headerBox">
        <i class="iconfont icon-nsisx-buzzly"></i>
        <span class="hosipitalName">测试智慧医院</span>
      </div>

      <div class="systemBox">测试展示系统</div>

      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        label-width="0px"
        class="demo-ruleForm"
      >
        <el-form-item label="" prop="userName">
          <div class="userBox">
            <span class="iconBox">
              <i class="iconfont icon-nsisx-mimadenglu"></i>
            </span>
            <el-input placeholder="请输入账户名" v-model="ruleForm.userName"></el-input>
          </div>
        </el-form-item>

        <el-form-item label="" prop="password">
        <div class="userBox" style="margin-top:0">
          <span class="iconBox">
            <i class="iconfont icon-nsisx-mima"></i>
          </span>
          <el-input placeholder="请输入密码" v-model="ruleForm.password"></el-input>
        </div>
      </el-form-item>
      </el-form>
      <div class="submit">
        <el-button type="success" @click="submit">登 录</el-button>
      </div>
    </el-card>

    <slide-verify 
   
    :w="364"
    :h="142"
    slider-text="向右滑动"
    @success="onSuccess"
    @fail="onFail"
    @refresh="onRefresh"
    :style="{width:'362px',marginLeft:'20px'}"
    class="slide-box"
    ref="slideBlock"
    :imgs="imageList"
  ></slide-verify>
  </div>
</template>
<style lang="scss" scoped src="./login.scss"></style>
<script src="../../../services/basic/login/login.js"></script>

