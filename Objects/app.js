function Checking(amount){
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount){
    this.balance += amount;
}

function withdraw (amount){
    if (this.balance>=amount){
        this.balance-=amount;
    }
    else {
        console.log("Sorry, you have insufficient funds");
    }
}

function toString() {
    return "Balance: $" + this.balance;
}

var account = new Checking(500);

account.deposit(3);

console.log(account.balance);

account.withdraw(349);

console.log(account.toString());