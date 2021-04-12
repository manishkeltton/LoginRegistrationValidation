export default function validateInfo(values) {
    let errors = {}
    if (!values.username.trim()){
        errors.username = "Username required"
    }

    if (!values.email.trim()) {
        errors.email = "Email required"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format';
    }

    if (!values.password){
        errors.password = "Password required"
    } else if(values.password.length < 6){
        console.log("length", )
        errors.password = "Password needs to be 6 character or more"
    }

    if (!values.password2) {
        errors.password2 = 'Password required'
    } else if (values.password !== values.password2){
        errors.password2 = 'Password must be same'
    }

    return errors;
}