// listen for submit

document.getElementById("calculate").addEventListener("click",computeResults);

function computeResults(){
    let { userAmount, userMonths, userIntRate } = newFunction();
     
    console.log(userAmount,userMonths,userIntRate);
};

function newFunction() {
    let userAmount = document.getElementById("loanAmnt").value;
    let userMonths = document.getElementById("term").value;
    let userIntRate = document.getElementById("intRate").value;
    
     

//  calculate
 
    let principal = parseFloat(userAmount);
    let calculateInterest = parseFloat(userIntRate * .01 ) /12;
    let calculatePayments = parseFloat(userMonths);
    
    
//  monthly payment
    let x = Math.pow(1 + calculateInterest, calculatePayments)
    let monthly = (principal * x * calculateInterest) / (x-1);
    let monthlyPayment = monthly.toFixed(2);

    // Interest
    let totalInterest = (monthly * calculatePayments - principal).toFixed(2);

    // Total payment
     let totalPayment = (monthly * calculatePayments).toFixed(2);


    // results
    document.getElementById("monthlyPayment").innerHTML = `$${monthlyPayment}`;
    document.getElementById("totalInt").innerHTML = `$${totalInterest}`;
    document.getElementById("totalPrinc").innerHTML = `$${userAmount}`;
    document.getElementById("cost").innerHTML = `$${totalPayment}`;
    // document.getElementById("cost").innerHTML = "$" +
    // return { userAmount, userMonths, userIntRate }
    // return { principal, calculateInterest, calculatePayments};
}
