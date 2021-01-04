const url = "index.php";
	


const mylogin = function(url){
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let params=`username=${username}&password=${password}`;
    let xhr = new XMLHttpRequest();
    xhr.open("POST",url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.addEventListener('readystatechange',function(){
        if(xhr.status==200&&xhr.readyState==4){
            let response;
            let message=JSON.parse(xhr.responseText);
            if(message.success==true){
                sessionStorage.setItem('user',xhr.responseText)
                console.log(JSON.parse(sessionStorage.user))
                response=(message)
            }
				//responseMessage(message); 
        }
    });
    xhr.send(params);
}


document.querySelector('#submit').addEventListener('click',()=>mylogin(url));

