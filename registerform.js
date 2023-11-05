function validation()
{
    let Firstname=document.getElementById("firstname");
    let Secondname=document.getElementById("secondname");
    let Username=document.getElementById("usernamename");
    let Password=document.getElementById("password")
    if(Firstname.value.trim()===null||Firstname.value.trim()==="") {
        alert("enter firstname");
        return false;
    } else    if(Secondname.value.trim()===null||Secondname.value.trim()==="") {
        alert("enter secondname");
        return false;
    }   else  if(User.value.trim()===null||Username.value.trim()==="") {
        alert("enter valid username");
        return false;
    } else  if(Password.value.trim()===null||Password.value.trim()==="") {
        alert("enter correct password");
        return false;
 }
 return true;
}