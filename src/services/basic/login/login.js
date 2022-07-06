import { login } from './login-api'
import { setToken } from '../../../common/utils/public'
import { mapMutations } from 'vuex';
export default {
    data() {
        return {
            ruleForm: {
                userName: '', //用户名
                password: '', //密码
            },
            rules: {
                userName: [
                    { required: true, message: '请输入账户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            },
            imageList: [
                ('https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'),
                ('https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'),
                ('https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg'),
                ('https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg'),
                ('https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg'),
                ('https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg'),
                ('https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg'),
                ('https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'),

            ]
        }
    },
    created() {
        this.$toast('首页加载')
    },
    mounted() {
        let that = this
        document.onkeydown = function() {
            let key = window.event.keyCode
            if (key == 13) {
                that.submit()
            }
        }
    },
    methods: {

        ...mapMutations([
            'pushName'
        ]),
        submit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
                    this.pushName(this.ruleForm.userName)
                        // this.$store.commit('pushName', this.ruleForm.userName)
                    this.$router.push('/home')
                        // login(this).then(res => {
                        //     if (res.success) {
                        //         let userInfo = {
                        //             empNo: res.data.empNo,//登陆人身份
                        //             hospital: res.data.hospital,//登陆人所在医院
                        //         }
                        //         setToken(res.data.token)
                        //         // this.$router.push('/home')
                        //         // this.$router.push({
                        //         //     name:'Home',
                        //         //     params:{
                        //         //         userInfo:userInfo
                        //         //     },
                        //         // })
                        //         this.$router.push({
                        //             path: './home',
                        //             query: {
                        //                 userInfo: userInfo
                        //             }

                    //         })
                    //     } else {
                    //         this.$message.error(res.data)
                    //     }
                    // })
                }
            })
        },
        //图片验证成功回调
        onSuccess() {


        },
        //验证失败回调
        onFail() {

        },
        //刷新回调
        onRefresh() {

        },

    },
}