// const Address = ''
// export default {
//   name: 'TakePhotos',
//   data() {
//     return {}
//   },
//   created() {
//     console.log('测试打包去掉console')
//   },
//   methods: {
//     check() {
//       console.log("in1-");
//       var objFile = document.getElementById("fileId");
//       if (objFile.value == "") {
//         alert("不能空")
//       }

//       //console.log(objFile.files[0].size); // 文件字节数

//       var files = $('#fileId').prop('files');//获取到文件列表
//       if (files.length == 0) {
//         alert('请选择文件');
//       } else {
//         console.log("in2-");
//         //debugger;
//         var reader = new FileReader();//新建一个FileReader
//         reader.readAsText(files[0], "UTF-8");//读取文件
//         reader.onload = function (evt) { //读取完文件之后会回来这里
//           var fileString = evt.target.result; // 读取文件内容
//           if (fileString.search("devicePublickey") != -1 && fileString.search(",") == -1 && fileString.search("\\[") && fileString.search("\\]")) {
//             console.log("in3-");
//             alert("正确");
//             return true;
//           } else {
//             console.log("in4-");
//             alert("不符合要求");
//           }
//           $("#myShow").append(fileString);
//         }
//       }
//     }
//   },
// }
// import { getLodop } from '../../../common/utils/LodopFuncs'
import { debounce, debounces, throttle, cloneDeep, dataURLtoFile } from '../../../common/utils/public'
import Vue from 'vue'
export default {
    name: "demo",
    data() {
        return {
            value: '',
            deepObj: {
                name: '张三',
                age: '10',
                list: [1, 2, 3, 4]

            },
            lineWidth: 4,
            lineColor: 'red',
            bgColor: '',
            resultImg: '',
            isCrop: false
        }
    },
    watch: {
        // deepObj:function(val){
        //   console.log('对象属性发生了改变')
        // }
        'deepObj.age': {
            handler: function() {
                console.log('年龄发生了改变')
            },
            deep: true,

        }
    },
    created() {
        // let newValue=this.deepObj
        // console.log(newValue)
        // newValue.name='李四'
        // console.log(newValue,this.deepObj)
        // let value2=cloneDeep(this.deepObj)
        // console.log(value2)
        // value2.name='李四'
        // console.log(value2,this.deepObj)
        // function anmial(){
        //   this.name=name
        // }
        // console.log(anmial)


        // var name = "The Window";
        // var object = {
        //   name: "My Object",

        //   getNameFunc: function () {
        //     console.log(this.name)
        //     return function () {
        //       return this.name;
        //     };

        //   }

        // };
        // console.log(object.getNameFunc())
        //     var name = "The Window";
        // 　　var object = {
        // 　　　　name : "My Object",

        // 　　　　getNameFunc : function(){
        // 　　　　　　var that = this;
        // 　　　　　　return function(){
        // 　　　　　　　　return that.name;
        // 　　　　　　};
        // 　　　　}
        // 　　};

        // 　　alert(object.getNameFunc()());
        // var A = function () { }
        // var a = new A()
        // console.log(a)
        // console.log(A)
        // console.log(a.__proto__ === A.prototype)
        // const pluing={
        //   install(){
        //     console.log('这是一个插件')
        //   }
        // }
        // Vue.use(pluing)
        // let x=10

        // Vue.prototype.$pluing=x
        // console.log(this.$pluing)
        // let Arrlist=[1,2,3]
        // console.log(Arrlist.constructor===Array) //true

        // let testObjct={
        //   name:'zhangsan',
        //   age:'30',
        //   sex:'女'
        // }
        // console.log(testObjct.constructor===Object)//true

        // var str = "VisitT W3School!";
        // var n = str.replace(/t/i,'r');
        // console.log(n)
        // try {
        //   console.log(a)
        // } catch (err) {
        //   console.log(err.message)
        // }
        // let testList=[1,2,1,10,85,25]
        // let testList={
        //   name:'zhangsan',
        //   age:'10'
        // }
        // console.log(Array.isArray(testList))//true||false
        // let person={
        //   name:'张三',
        //   age:'10',
        //   function(){
        //     console.log('这是对象')
        //   }
        // }
        // var newObject=Object.create(person)//属性在原型下可以访问
        // console.log(newObject.__proto__)
        // console.log(person===newObject.__proto__)
        // function f1() {
        //   var n = 999;
        //   function f2() {
        //     alert(n);
        //   }
        //   return f2;

        // }
        // var result = f1();
        // result(); // 999


        // function timeout(ms) {
        //   return new Promise((resolve, reject) => {
        //     setTimeout(resolve, ms, 'done');
        //   });
        // }

        // timeout(100).then((value) => {
        //   console.log(value);
        // });

        // function parent(name){
        //   this.name=name
        // }
        // parent.prototype.grade='123'
        // var student=new parent('张三')

        // console.log(student.name,student.grade)
        // console.log(parent.prototype.constructor==parent)

        // 继承的方法
        // 1.使用call,apply继承
        function anminal(species, sex) {
            this.species = species
            this.sex = sex
        }

        function cat(name, color) {
            // anminal.call(this,'动物','男')
            anminal.apply(this, ['动物', '男'])
            this.name = name
            this.color = color
        }

        var Cat = new cat('咪咪', 'blue')
        console.log(Cat.name, Cat.color, Cat.species, Cat.sex)

        // 2.使用prototype
        console.log(anminal.prototype.constructor)
        console.log(cat.prototype.constructor)


    },

    mounted() {
        let dom = document.getElementsByClassName('boxContent')
            // console.log(dom)
        dom.onmousemove = function(e) {
            box.innerHTML = `${e.clientX}, ${e.clientY}`
        }
    },
    directives: {
        color: {
            inserted: function(el) {
                el.style.color = 'red'
            }
        }
    },
    methods: {
        handleReset() {
            this.$refs['esign'].reset() //清空画布
        },
        handleGenerate() {
            this.$refs['esign'].generate().then(res => {

                this.resultImg = res // 得到了签字生成的base64图片
                let file = dataURLtoFile(res, '签名照片')
                console.log(file)
            }).catch(err => { //  没有签名，点击生成图片时调用
                this.$message({
                    message: err + ' 未签名！',
                    type: 'warning'
                })
                alert(err) // 画布没有签字时会执行这里 'Not Signned'
            })
        },

        changeObj() {
            //  this.deepObj.name='李四'
            this.deepObj.age = '15'
        },
        // 查询数据
        printPdf() {
            let LODOP = getLodop();
            LODOP.PRINT_INIT("订货单");
            LODOP.SET_PRINT_STYLE("FontSize", 18);
            LODOP.SET_PRINT_STYLE("Bold", 1);
            // LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, "打印页面部分内容");
            // LODOP.ADD_PRINT_HTML(88, 200, 350, 600,document.getElementById("form1").innerHTML);//html片段
            LODOP.ADD_PRINT_URL(0, 0, "100%", "100%", "https://www.baidu.com");
            LODOP.SET_PRINTER_INDEX("\\192.168.135.110\HP LaserJet M1005") //指定打印的打印机
            LODOP.PREVIEW()

        },
        // clickBox(e) {
        //   // console.log(e)
        //   // let dom = document.getElementsByClassName('boxContent')
        //   // dom.onmousemove = function (e) {
        //   //   box.innerHTML = `${e.clientX}, ${e.clientY}`
        //   // }
        //   this.debounce(function(e){
        //     let x = e.clientX
        //     let y = e.clientY
        //     this.value = 'x的坐标是' + x + 'y的坐标是' + y
        //     console.log( this.value)
        //   },1000)
        //   // this.value = 'x的坐标是' + x + 'y的坐标是' + y
        //   // dom.innerHTML = 'x的坐标是' + x + 'y的坐标是' + y
        // },

        clickBox: throttle(this, function(e) {
            let x = e.clientX
            let y = e.clientY
            this.value = 'x的坐标是' + x + 'y的坐标是' + y
                // console.log(this.value)
        }, 1000),

        printPdf2() {
            let LODOP = getLodop();
            LODOP.PRINT_INIT("订货单1");
            LODOP.SET_PRINT_STYLE("FontSize", 18);
            LODOP.SET_PRINT_STYLE("Bold", 1);
            // LODOP.ADD_PRINT_TEXT(50, 231, 260, 39, "打印页面部分内容");
            LODOP.ADD_PRINT_HTML(88, 200, 350, 600,
                document.getElementById("form1").innerHTML);
            LODOP.SET_PRINTER_INDEX("Fax")
            LODOP.PREVIEW()
        }
    },

}