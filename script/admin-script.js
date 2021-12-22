var arr = new Array();
function myFunction() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("myInput");

    filter = input.value.toUpperCase();

    table = document.getElementById("myTable");

    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];

        if (td) {
            if (td.innerHTML.toUpperCase()
                .indexOf(filter) > -1) {

                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";

            }
        }
    }
}

var accounts = localStorage.length;

var p = false;
const lowerCaseLetters = /[a-z]/g;
const upperCaseLetters = /[A-Z]/g;
const numbers = /[0-9]/g;
function register() {
    gd();
    if (!document.getElementById("pass").value.match(numbers))
        messages.push('please add 1 number');
    else if (!document.getElementById("pass").value.match(lowerCaseLetters))
        alert("please add 1 lowercase letter")
    else if (!document.getElementById("pass").value.match(upperCaseLetters))
        alert("please add 1 uppercase letter")
    else if (document.getElementById("pass").value.length < 8)
        alert("password should contain min 8 characters!")
    else {
        arr.push({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("pass").value,
        });
        localStorage.setItem("localData", JSON.stringify(arr));
        p = true;
        showData();
        alert("You are created account!")
    
    }

}
function registerUser() {
    gd();
    if (!document.getElementById("pass").value.match(numbers))
        messages.push('please add 1 number');
    else if (!document.getElementById("pass").value.match(lowerCaseLetters))
        alert("please add 1 lowercase letter")
    else if (!document.getElementById("pass").value.match(upperCaseLetters))
        alert("please add 1 uppercase letter")
    else if (document.getElementById("pass").value.length < 8)
        alert("password should contain min 8 characters!")
    else {
        arr.push({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            password: document.getElementById("pass").value,
        });
        localStorage.setItem("localData", JSON.stringify(arr));
        p = true;
        showData();
    }


}
function gd() {
    var str = localStorage.getItem("localData");
    if (str != null)
        arr = JSON.parse(str);

}
function showData() {
    gd();

    var tbl = document.getElementById("table");

    var x = tbl.rows.length;

    for (i = 0; i < arr.length; i++) {
        var r = tbl.insertRow();
        var cell1 = r.insertCell();
        var cell2 = r.insertCell();
        var cell3 = r.insertCell();
        cell1.innerHTML = arr[i].password;
        cell2.innerHTML = arr[i].email;
        cell3.innerHTML = arr[i].name;

    }
}
function delet() {
    a = confirm("Really?")
    if (a) {
        localStorage.clear();
    }
}
function login() {
    gd();
    var emaill = document.getElementById("login1").value
    var passwordd = document.getElementById("pass").value

    for (i = 0; i < arr.length; i++) {
        if (emaill == "isaev.rramazan@gmail.com" && passwordd == "r12345") {
            document.getElementById("way").href = "admin_page.html";
            return;
        }
        else if (emaill == arr[i].email && passwordd == arr[i].password) {
            document.getElementById("way").href = "index.html";
            alert("Hello " + arr[i].email)
            return;
        } else {

            console.log("a")
        }

    }
    alert("Check email or password, it is not correct!")
}
function del() {
    gd();
    var emailToUpdate = document.getElementById('emailToUpdate').value
    console.log(emailToUpdate)
    for (i = 0; i < arr.length; i++) {
        if (emailToUpdate === arr[i].email) {
            res = confirm("Do u wanna Delete " + arr[i].email)
            if (res)
                arr.splice(i, 1);
            console.log(arr);
        }
    }
    localStorage.setItem('localData', JSON.stringify(arr));
}
