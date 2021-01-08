

import {login} from './login-api'
import {setToken} from '../../../common/utils/public'
export default{
    data(){
        return{
            ruleForm:{
                userName:'',//用户名
                password:'',//密码
            },
            rules:{
                userName:[
                    { required: true, message: '请输入账户名', trigger: 'blur'}
                ],
                password:[
                    { required: true, message: '请输入密码', trigger: 'blur'}
                ]
            }
        }
    },
    created() {
        
    },
    methods: {
        submit(){
          this.$refs.ruleForm.validate(valid=>{
              if(valid){
                login(this).then(res=>{
                    console.log(res)
                    if(res.success){
                        let userInfo={
                            empNo:res.data.empNo,//登陆人身份
                            hospital:res.data.hospital,//登陆人所在医院
                        }
                        setToken(res.data.token)
                        this.$router.push('/home')
                    }else{
                      this.$message.error(res.data)
                    }
                })
              }
          })
        },
    },
}