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
    let calculateInterest = parseFloat(userIntRate) / 100 /12;
    let calculatePayments = parseFloat(userMonths);
    
    
//  
    let x = Math.pow(1 + calculateInterest, calculatePayments)
    return { userAmount, userMonths, userIntRate };
    return { principal, calculateInterest, calculatePayments};
}
