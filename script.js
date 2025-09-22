function loginCheck(){
    let usernames=document.getElementById('uname').value
    console.log(usernames);
    localStorage.setItem('USERNAM',usernames)
    window.location="./home.html"

}