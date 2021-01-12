
// const url ="https://signup-database.herokuapp.com/"
const url = "http://localhost:3000";

function signup() {
    var obj = {
        name: document.getElementById("signup-name").value,
        email: document.getElementById("signup-email").value,
        password: document.getElementById("signup-password").value,
        number: document.getElementById("signup-number").value,
        gender: document.getElementById("signup-gender").value
    }
    // alert("tdfthd")
    // console.log(name)
    // console.log(email)
    // console.log(password)
    // console.log(number)
    // console.log(gender)


    console.log(obj);
    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/signup");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        if (Http.onreadystate === 4) {
            let jsonRes = json.parse(Http.responseText)
            console.log(jsonRes);
            if (jsonRes===200){
                alert(jsonRes.message);
            }
            else{jsonRes.message}
        }
        
        window.location.href = "login.html"
    }
    return false
}



function userLogin(){
   var obj ={
        userEmail:document.getElementById("login-email").value,
        userPassowrd:document.getElementById("login-password").value
    }
    const Http = new XMLHttpRequest();
    Http.open("POST", url + "/login");
    Http.setRequestHeader("Content-Type", "application/json");
    Http.send(JSON.stringify(obj));
    Http.onreadystatechange = (e) => {
        if (Http.onreadystate === 4) {
            let jsonRes = json.parse(Http.responseText)
            console.log(jsonRes);
            if (jsonRes===200){
                alert(jsonRes.message);
                alert("login succesfully")
                window.location.href = "profile.html"
            }
            else{
                alert(jsonRes.message)
            }
        }
        
    }
    return false


}