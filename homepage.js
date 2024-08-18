function getData(){
    let userGetData = localStorage.getItem('userlogin')
    let convertedValue = JSON.parse(userGetData);

let userEmail = convertedValue.email;
let userPassword = convertedValue.password;


    // document.getElementById('email').innerHTML = convertedValue;

    document.getElementById('userName').innerHTML = userEmail;
    document.getElementById('password').innerHTML = userPassword;

    console.log(convertedValue);
}
getData();

const logout =() =>{
    localStorage.clear();
    location.href = './index.html';
}