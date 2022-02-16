'use strict'


let registration__password_input = document.querySelector('.registration__password-input')
let registration = document.querySelector('.registration')
let registration__email_input = document.querySelector('.registration__email-input')
let button = document.querySelector('.registration__button')
let alarm = document.createElement('div')
let alarmPass = document.createElement('div')
let alarmCheckbox = document.createElement('div')
let registration__email_asterix = document.querySelector('.registration__email-asterix')
let registration__password_asterix = document.querySelector('.registration__password-asterix')
let registration__checkbox_input = document.querySelector('.registration__checkbox_input')
let registration__checkbox_asterix = document.querySelector('.registration__checkbox-asterix')
registration.appendChild(alarm)
registration.appendChild(alarmPass)
registration.appendChild(alarmCheckbox)


var notValidemail = () => {
    alarm.className = 'alarm_email'
    registration__email_input.className = 'redBorder'
    registration__email_asterix.className = 'email_red-asterix'
}

var validEmail = () => {
    let re = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    let email = registration__email_input.value;
    let valid = re.test(email);
    if (!valid) {
        notValidemail()
    alarm.innerText = 'Email невалидный'; notValidemail()
    } else if (valid) {
        console.log('email: ' + email.toLowerCase())
    }
    return valid;
}

var notValidpass = () => {
    alarmPass.className = 'alarm_password'
    registration__password_input.className = 'redBorder'
    registration__password_asterix.className = 'password_red-asterix'
    
}

var validPass = () => {
    let passValue = registration__password_input.value;
    if (passValue.length > 7) {
        console.log('password: ' + passValue)
    }
    else {
        notValidpass()
        alarmPass.innerText = 'Пароль должен содержать как минимум 8 символов' 
    }
   
   
}

registration__email_input.addEventListener('input',(registration__email_input) => {  
    button.addEventListener('click', () => {
    if(registration__email_input.target.value === ''){
        alarm.innerText = 'Поле обязательно для заполнения'
        notValidemail()
    }
    else validEmail()
    })
})


registration__password_input.addEventListener('input', (registration__password_input) => {
    button.addEventListener('click', () => { 
            let passwordValue = registration__password_input.value
        if (registration__password_input.target.value === '') { 
            alarmPass.innerText = 'Поле обязательно для заполнения'           
            notValidpass()        
        }
        else {
            validPass()
        }

    })

})

checkbox.onclick = function(){
    button.addEventListener('click', () => { 
    if (!registration__checkbox_input.checked) {
        registration__checkbox_asterix.className = 'checkbox_red-asterix'
        alarmCheckbox.innerText = 'Поле обязательно для заполнения'
        alarmCheckbox.className = 'alarm_checkbox'
        registration__checkbox_input.className = 'red_checkbox'

    } 
})
}


