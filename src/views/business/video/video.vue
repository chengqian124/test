<template>
  <!-- <div class="uploadFile">
    <article>
      <section>
        <video id="video"></video>
      </section>
      <section>
        <audio id="audio"></audio>
      </section>
      <button id="btn" @click="tackcapture">拍照</button>
      <button @click="opening">开启拍照</button>
      <section>
        <canvas id="canvas"></canvas>
      </section>
      <section><img src="" alt="" id="img" /></section>
    </article>
    <span>这是创建的dev分支</span>
    <input type="file" name="file" id="fileId" />
    <input type="submit" name="btn" value="提交" id="btnId" οnclick="check()" />
    <div id="myShow"></div>

  </div>-->

  <div class="demo" style="margin-top:15px">
    <el-button @click="changeObj">点击</el-button>
    <div v-color style="width:100px;height:100px;">122</div>

    <!-- alt是图片加载失败的提示信息,title是鼠标放在图片上的提示信息 -->

    <img src="../../../assets/img/logo.png" title="这是标题" alt="这是alt" />

    <img src="http://img.png" srcset title="这是标题" alt="这是alt" />
    <!-- <el-button @click="printPdf" >打印1</el-button>
    <el-button @click="printPdf2" >打印2</el-button>

    <form id="form1" style="margin-top:15px">
      <table border="1" width="300" id="tb01" bgcolor="#CCFFCC" style="border:solid 1px black;border-collapse:collapse"><tr><td width="133" id="mtb001">
        <font face="黑体" color="#FF0000" size="3"><u>&nbsp;《表单一》&nbsp;</u></font></td></tr></table>
      <table border="1" width="300" height="106" cellspacing="0" bgcolor="#CCFFFF" style="border-collapse:collapse;table-layout:fixed;border:solid 1px black;"><tr>
        <td width="66" height="16" style="border:solid 1px black"><font color="#0000FF">A</font><font color="#0000FF">等</font></td>
        <td width="51" height="16" style="border:solid 1px black"><font color="#0000FF">B</font><font color="#0000FF">等</font></td>
        <td width="51" height="16" style="border:solid 1px black"><font color="#0000FF">C</font><font color="#0000FF">等</font></td></tr>
        <tr>
          <td width="66" height="16" style="border:solid 1px black">A<sub>01</sub></td>
          <td width="80" height="12" style="border:solid 1px black">中-001</td>
          <td width="51" height="12" style="border:solid 1px black">C1<sup>x</sup></td>
        </tr>
        <tr>
          <td width="66" height="16" style="border:solid 1px black">A<sub>02</sub>Φ</td>
          <td width="80" height="16" style="border:solid 1px black">日-スの</td>
          <td width="51" height="16" style="border:solid 1px black"><font face='Vernada'>7</font></td>
        </tr>
        <tr><td width="66" height="16" style="border:solid 1px black;overflow:hidden">A<sub>03</sub><nobr>over隐藏后面的：1234567890</nobr>
        </td><td width="80" height="16" style="border:solid 1px black;overflow:hidden">韩-안녕</td><td width="51" height="16">C3<sup>x</sup>
        </td></tr> </table>
    </form>


    <div class="boxContent" @mousemove="clickBox($event)">
      {{value}}
    </div>-->
    <div>
      打了tag
    </div>
    <vue-esign
      ref="esign"
      :width="800"
      :height="300"
      :isCrop="isCrop"
      :lineWidth="lineWidth"
      :lineColor="lineColor"
      :bgColor.sync="bgColor"
    />

    <button @click="handleReset">清空画板</button>

    <button @click="handleGenerate">生成图片</button>
  </div>
</template>



<style lang="scss" scoped src="./video.scss"></style>
<script src="../../../services/business/video/video.js"></script>