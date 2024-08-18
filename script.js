const btnSignin =(email) =>{
    let userEmail = document.getElementById("email").value;
    let userPassword = document.getElementById("password").value;
    
    let userData ={
        email: userEmail,
        password: userPassword, 
    };
    if(email.value + password.value ==''){
        alert('Enter Your Details')
    }else{
        let convertedUserData = JSON.stringify(userData);
       localStorage.setItem('userlogin' , convertedUserData);
        location.href = "./homepage.html" 
    }
}
let convertedValue = JSON.parse (localStorage.getItem('userlogin'))
console.log(convertedValue);
const signUp =()=>{
    location.href = "./signup.html"
}

const btnSignUp = () =>{
    let userName = document.getElementById('Username').value;
    let Email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    // console.log( Email + password + userName);
    let Data = {
        userName: userName,
        email:Email,
        password:password,
    };
    let newData = JSON.stringify(Data);
    localStorage.setItem('userSignUp', newData);
}
let newValue = JSON.parse (localStorage.getItem ('userSignUp'))
console.log(newValue);
const signIn = () =>{
    location.href = "./index.html"
}
