function emailSend(){

    var Username= document.getElementById('name'). value;
    var email= document.getElementById('email'). value;
    var phone= document.getElementById('phone'). value;
    var textarea=document.getElementById('text').value;

    var messagebody = "name" + Username +
    "<br/> email" + email 
    "<br/> phone" + phone 
    "<br/> textarea" + textarea;


    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "maxwelljnr254@gmail.com",
        Password : "6D739DB60268BFF1EC4DC12ADEAFEFEA73EE",
        To : 'egpak.org1@gmail.com',
        From : "maxwelljnr254@gmail.com",
        Subject : "This is the subject",
        Body : messagebody
    }).then(
      message => {
        if(message=='OK'){
            swal("Successful!", "We'll get back to you!", "success");
        }
        else{
            swal("Error!", "We'll get back to you!", "warning");
        }
    }
    );
}