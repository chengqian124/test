export function login(v) {
    return v.axios.post('/login', {
        loginName: v.ruleForm.userName,
        password: v.ruleForm.password
    })
}