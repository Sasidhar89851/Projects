function validation()
{
    let Username=document.getElementById("username");
    let Password=document.getElementById("password");
    if(Username.value.trim()===null||Username.value.trim()==="")
    {
        alert("enter valid username");
        return false;
    }
    else if(Password.value.trim()===null ||Password.value.trim()==="")
    {
        alert("enter correct password");
    }
    return true;
}