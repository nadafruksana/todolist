
document.querySelectorAll('.form-element[data-error] .input').forEach(inpEl => {
    inpEl.addEventListener('input', () => inpEl.parentElement.removeAttribute('data-error'))
})    

function hideError(errorName){    
    document.getElementById(errorName).innerHTML = "";
}

async function onSubmit(){
    //const axios = require('axios').default;
    // let flag=true
    let flag = []
    let user = {}
   

    let phone = document.getElementById('phone').value
    let errorPhone = document.getElementById('errorPhone')

    let password = document.getElementById('password').value
    let errorPassword = document.getElementById('errorPassword')

   
    

    //console.log(phone.length)
    if(phone.length != 10){
        errorPhone.innerHTML = "Phone number should be of 10 digits"
        flag.push('phone')
        //flag = false
    }else{
        errorPhone.innerHTML = ""
        user.phone=phone
    }

    if(password == 0){
        errorPassword.innerHTML = "Please enter valid password (min 8 and max 12)"
        flag.push('password')
        //flag = false
    }
    else if(password.length <= 8 && password.length >= 12){
        errorPassword.innerHTML = "password should be of >=8 char and <12 char"
        //flag = false
    }else{
        errorPassword.innerHTML = ""
        user.password = password
    }

     if(flag.length === 0){
        console.log(user)
        try{
            let response = await axios.post ("http://localhost:3033/users/login", user)
            console.log(response)
            if(response.status>=200 && response.status<=300){
                    alert(response.data.success);
    
                }else{
                    alert(response.data.errors); 
                }
            window.location.href="todohome.html"
            
            alert('Logged in successfully')
           
        }
        catch(err){
             console.log(err)

        }
    }
}
