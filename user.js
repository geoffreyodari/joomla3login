const url = "php/index.php";
	
const responseMessage=(message)=>document.querySelector('#message').innerHTML=message;

const mylogin = function(url){
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let params=`username=${username}&password=${password}`;
    let xhr = new XMLHttpRequest();
    xhr.open("POST",url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.addEventListener('readystatechange',function(){
        if(xhr.readyState==1){
            responseMessage('Opening..')
        }
        if(xhr.readyState==2){
            responseMessage('Sending...')
        }
        if(xhr.readyState==2){
            responseMessage('receiving....')
        }
        if(xhr.status==200&&xhr.readyState==4){
            let response;
            let message=JSON.parse(xhr.responseText);
            if(message.success==true){
                sessionStorage.setItem('user',xhr.responseText)
                let data = JSON.parse(sessionStorage.user)
                responseMessage(`welcome ${data.data.name}`)
                window.location.href = "http://localhost/joomla3login/"
            }
				//responseMessage(message); 
        }
    });
    xhr.send(params);
}


document.querySelector('#submit').addEventListener('click',()=>mylogin(url));

