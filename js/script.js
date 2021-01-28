document.getElementById('login').addEventListener('click', function() {
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('transaction').style.display = 'block';
})

document.getElementById('addDeposit').addEventListener('click', function() {
    const depositNumber = getInputNumber('depositAmount');

    if (depositNumber < 0) {
        alert("Negative Value not Allowed");
        document.getElementById('depositAmount').value = "";
    } else if (document.getElementById('depositAmount').value == "") {
        alert("You have to put some value");
    } else {
        updateBalance("currentDeposit", depositNumber);
        updateBalance("currentBalance", depositNumber);
        document.getElementById('depositAmount').value = "";

        alert("Balance Added");
    }
})

document.getElementById('addWithdraw').addEventListener('click', function() {
    const withdrawNumber = getInputNumber('withdrawAmount');
    const totalBalance = parseFloat(document.getElementById('currentBalance').innerText)
    if (withdrawNumber > totalBalance) {
        alert("You have not enough balance");
        document.getElementById('withdrawAmount').value = "";
    } else if (document.getElementById('withdrawAmount').value == "") {
        alert("You have to put some value");
    } else if (withdrawNumber < 0) {
        alert("Negative Value not Allowed");
        document.getElementById('withdrawAmount').value = "";
    } else {
        updateBalance("currentWithdraw", withdrawNumber);
        updateBalance("currentBalance", -1 * withdrawNumber);
        document.getElementById('withdrawAmount').value = "";

        alert("Cash Withdrawn");
    }

})

function getInputNumber(id) {
    const number = parseFloat(document.getElementById(id).value);
    return number;
}

function updateBalance(id, addedNumber) {
    const currentNumber = parseFloat(document.getElementById(id).innerText);
    const totalAmount = addedNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
}