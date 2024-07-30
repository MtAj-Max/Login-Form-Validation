document.getElementById("sbtn").addEventListener('click',(event)=>{
    const name=document.getElementById("name");
    const email=document.getElementById("email");
    const pass=document.getElementById("pass");
      const nameval=name.value.trim();
      const password=pass.value.trim();
      const emailval=email.value.trim();
      if (nameval===''){
        alert("please enter the username or email");
        name.focus();
        event.preventDefault();
        return;
      }
      if(!isValid(emailval)){
        alert("please enter valid email");
        event.preventDefault();
        return;
      }
      if(password.length<8){
        alert("please enter valid password");
        pass.focus();
        event.preventDefault();
        return;
      }
      if(password===''){
        alert("please enter password");
      }
});

function isValid(nameval){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(nameval);
}