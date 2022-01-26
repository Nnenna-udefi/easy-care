function $(id) {
    return document.querySelector(id);
}

$('#form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email ="miriamudefi@gmail.com";
    const password ="123456a";

    const mail = $('#email').value;
    const passWord = $('#password').value;

    if((email === mail) && (password === passWord)) {
        swal("Welcome back!", {icon: 'success'});
        
        setTimeout(() => {
            window.location.href = "../index/dash.html"; 
        }, 1000);
        
    }
    else{
        sweetAlert("Oops...", "Wrong Username or password");
    }
})
    