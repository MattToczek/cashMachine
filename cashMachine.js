
// // Activity 1
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     orderCount++
//     return `Pizza with ${topping1} and ${topping2} ` +
//     orderCount;
// }

// console.log(takeOrder("pinapple", "Ham"));
// console.log(takeOrder("pinapple", "Ham"));
// console.log(takeOrder("pinapple", "Ham"));

// Activity 2
let balance = 1000;
const pinAct = 1234
let moneyGiven = '';
pinWrong = 0;

let pin;
let amountReq;
let balanceRead = document.getElementById("balanceRead");
let modalBox = document.getElementById("modalCont");
let modal = document.getElementById("modal");
let okBtn = document.getElementById("okBtn");

let withdraw = document.getElementById("withdrawBtn");
console.log(modalBox);

let getPin = () => {
    pin = document.getElementById("pinInput").value;
}

let getReq = () => {
    amountReq = document.getElementById("moneyOut").value;
}

let getBal = () => {
    getPin();
    if (pin == pinAct ){
        balanceRead.value = balance;
    } else {
        balanceRead.value = "";
    }
}


const cashMachine = (pinInput, amount) => {
    if(amount <= 0){  /* checks for positive */
        modalBox.innerHTML = '<p>Please Enter a positive value</p>';

    }
    else if(pinWrong >= 3){ /* checks for wrong pin attempts */
        modalBox.innerHTML = "<p>Too many wrong pin attempts, please contact your bank</p>";

    }
    else if (pinInput == pinAct){ /* checks correct pin and resets counter to 0 if it is */
        pinWrong = 0;
        if (amount <= balance){ /* checks for available funds */
            balance -= amount;
            moneyGiven = amount;
            }
        modalBox.innerHTML = `<p>Your have withdrawn £${amountReq}, your Balance is now £${balance}</p>`;
        console.log("pin correct and withdraw");
        getBal();
    } else if(pinInput != pinAct){  /* checks incorrect pin */
        modalBox.innerHTML = "<p>Incorrect Pin</p>";
        pinWrong++;

    } else{
        modalBox.innerHTML = "<p>insufficient funds</p>";
    }

    modalBox.append(okBtn) ;
    modal.style.display = "block";
    
    console.log(balance);
    console.log(moneyGiven);
    
};

withdraw.addEventListener("click", (event) => {
    event.preventDefault();
    getPin();
    getReq();
    
    cashMachine(pin, amountReq);


});

okBtn.addEventListener("click", (event) => {
    event.preventDefault();
    
    modal.style.display = 'none';
    getBal();
});

// cashMachine(1234, -100);
// cashMachine(1234, 100);
// cashMachine(1274, 100);
// cashMachine(1274, 100);
// cashMachine(1234, 100);
