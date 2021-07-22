function validate(){
    var Ucheck = document.forms['LogForm']['login_username'].value;
    var Pcheck = document.forms['LogForm']['login_password'].value;
    if (Ucheck == 'Admin' && Pcheck == '1234') {
        setTimeout(() => {
          window.location.href = "access/";
        }, 1000);
        document.getElementById('hide').style.display = 'block';
        document.getElementById('hide2').style.display = 'none';
    }
    else{
        document.getElementById('hide2').style.display = 'block';
        document.getElementById('hide').style.display = 'none';
    }
}