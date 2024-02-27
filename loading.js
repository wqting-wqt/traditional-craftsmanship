// JavaScript Document
function validateForm() {
    var username = document.forms["regForm"]["username"].value;
    var myname = document.forms["regForm"]["myname"].value;
    var mypassword = document.forms["regForm"]["mypassword"].value;
    var confirmPassword = document.forms["regForm"]["confirmPassword"].value;
    var myemail = document.forms["regForm"]["myemail"].value;
    /*var mytel = document.forms["regForm"]["mytel"].value;
    var mysex = document.forms["regForm"]["mysex"].value;
    var mybirdthday = document.forms["regForm"]["mybirdthday"].value;
    var myqq = document.forms["regForm"]["myqq"].value;   
*/
    if (username == "" || myname == "" || mypassword == "" || confirmPassword == "" || myemail == "" ) {
            alert("必填空格不能为空");
            return false;
        }
    if (myname.length > 5) {
        alert("姓名已超出5个字符");
        return false;
    }

    if (mypassword != confirmPassword) {
        alert("密码不相同");
        return false;
    }

    alert("注册成功！请进行登录");
    return false; // prevent actual form submission for this demo   
}













