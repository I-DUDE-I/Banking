function signup() {
    if (document.getElementById("registerUserName").value == "" || document.getElementById("registerAccNum").value == "" || document.getElementById("registerPassword").value =="") {
        alert("fill out empty fields")
    }
    else {
        localStorage.setItem("username",document.getElementById("registerUserName").value)
        localStorage.setItem("accountNumber",document.getElementById("registerAccNum").value)
        localStorage.setItem("password",document.getElementById("registerPassword").value)
        localStorage.setItem("balance",0)
        alert("Successfully registered")

        window.location = "../login/index.html"
    }

}

function login() {
    if (document.getElementById("loginUserName").value == "" || document.getElementById("loginPassword").value == "") {
        alert("Fillout empty fields")
    }
    else if (document.getElementById("loginUserName").value != localStorage.getItem("username")) {
        alert("Invalid username")
    }
    else if (document.getElementById("loginPassword").value != localStorage.getItem("password")) {
        alert("Incorrect Password")
    }
    else {
        alert("login Successfull")
        window.location = "../dashboard/index.html"
    }
}



function deposit() {
    if(document.getElementById("depoAmount").value == ""  || document.getElementById("depoAccNum").value == "") {
        alert("Fillout the empty fields")
    }
    else if (document.getElementById("depoAccNum").value != localStorage.getItem("accountNumber")) {
        alert("Invalid account number")
    }
    else {
        balanceVar = localStorage.getItem("balance")
        balanceVar = (localStorage.getItem("balance")*1)+(document.getElementById("depoAmount").value*1)
        localStorage.setItem("balance",balanceVar)
        alert(`amount ${document.getElementById("depoAmount").value} deposited`)
        balanceShow1.innerHTML = `Final Balance: ${balanceVar}`
        balanceShow2.innerHTML = `Final Balance: ${balanceVar}`
    }

}
function withdraw() {
    if(document.getElementById("witAmount").value == ""  || document.getElementById("witAccNum").value == "") {
        alert("Fillout the empty fields")
    }
    else if (document.getElementById("witAccNum").value != localStorage.getItem("accountNumber")) {
        alert("Invalid account number")
    }
    else if((document.getElementById("witAmount").value*1) > (localStorage.getItem("balance")*1)) {
        alert("Insufficient balance")
    }
    else {
        balanceVar = localStorage.getItem("balance")
        balanceVar = (localStorage.getItem("balance")*1)-(document.getElementById("witAmount").value*1)
        localStorage.setItem("balance",balanceVar)
        alert(`amount ${document.getElementById("witAmount").value} withdrawn`)
        balanceShow2.innerHTML = `Final Balance: ${balanceVar}`
        balanceShow1.innerHTML = `Final Balance: ${balanceVar}`
    }
}

function logout() {
    localStorage.clear()
    window.location = "../index.html"
    alert("logged out")
}