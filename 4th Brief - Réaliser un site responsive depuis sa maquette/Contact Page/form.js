function validation(){
    var name =document.getElementById("name").value,
        email =document.getElementById("email").value,
        message =document.getElementById("message").value;
    var exp =  new RegExp(/^[A-Za-z-0-9-_.]+@[A-Za-z]{4,7}.[A-Za-z]{2,3}$/);

    if(name == "" || email == "" || message == ""){

               alert("Make sure ao aill all the fields");

    }else{

        if(exp.test(email) == false){
            alert("The e-mail form is invalid");

        }else{
            alert("SENT");
        }

    }
}