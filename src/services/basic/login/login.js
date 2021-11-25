

import { login } from './login-api'
import { setToken } from '../../../common/utils/public'
export default {
    data() {
        return {
            ruleForm: {
                userName: '',//用户名
                password: '',//密码
            },
            rules: {
                userName: [
                    { required: true, message: '请输入账户名', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ]
            }
        }
    },
    created() {

    },
    mounted() {
        let that = this
        document.onkeydown = function () {
            let key = window.event.keyCode
            if (key == 13) {
                that.submit()
            }
        }
    },
    methods: {
        submit() {
            this.$refs.ruleForm.validate(valid => {
                if (valid) {
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

    },
}