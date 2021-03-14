
// listen for submit

document.getElementById("calculate").addEventListener("click",computeResults);

function computeResults(){
    let { userAmount, userMonths, userIntRate } = newFunction();
     
    // console.log(userAmount,userMonths,userIntRate);
}

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

    let remainingBalance = 0;
    let interestPayment = 0;
    let principalPayment = 0;
    let totalInterest2 = 0;
    for (i=1; i <= userMonths; i++){
        if(i==1){
            remainingBalance = userAmount
            remainingBalance = Math.round(remainingBalance  * 100 + Number.EPSILON) / 100
            interestPayment = remainingBalance * userIntRate/1200
            interestPayment = Math.round(interestPayment * 100 + Number.EPSILON)  / 100
            principalPayment = monthlyPayment - interestPayment
            principalPayment = Math.round(principalPayment * 100 + Number.EPSILON) / 100
            totalInterest2 = interestPayment
            totalInterest2 = Math.round(totalInterest2 * 100 + Number.EPSILON) / 100
            remainingBalance = remainingBalance - principalPayment
            remainingBalance = Math.round(remainingBalance * 100 + Number.EPSILON) / 100
       }
       else if (i == userMonths){
           let totalMonthlyPayment = remainingBalance;
           remainingBalance = remainingBalance - principalPayment;
           remainingBalance = Math.round(remainingBalance * 100 + Number.EPSILON) / 100
           interestPayment = remainingBalance * userIntRate / 1200
           interestPayment = Math.round(interestPayment * 100 + Number.EPSILON)  / 100
           principalPayment = totalMonthlyPayment - interestPayment
           principalPayment = Math.round(principalPayment * 100 + Number.EPSILON)  / 100
           totalInterest2 = totalInterest2 + interestPayment
           totalInterest2 = Math.round(totalInterest2 * 100 + Number.EPSILON) / 100
           monthlyPayment = totalMonthlyPayment
           remainingBalance = 0


       }
        else{
            remainingBalance = remainingBalance-principalPayment
            remainingBalance = Math.round(remainingBalance  * 100 + Number.EPSILON) / 100
            interestPayment = remainingBalance*userIntRate/1200
            interestPayment = Math.round(interestPayment * 100 + Number.EPSILON)  / 100
            principalPayment = monthlyPayment - interestPayment
            principalPayment = Math.round(principalPayment * 100 + Number.EPSILON) / 100
            totalInterest2 = totalInterest2 + interestPayment
            totalInterest2 = Math.round(totalInterest2 * 100 + Number.EPSILON) / 100
        }
        document.getElementById("table").innerHTML+=`<tr><th scope="row">${i}</th><th>${monthlyPayment}</th><th>${principalPayment
         }</th><th>${interestPayment}</th><th>${totalInterest2}</th><th>${remainingBalance}</th></tr>`
    

    }
    // clear the results
    document.getElementById("startOver").addEventListener("click", function(){
        document.getElementById("loanAmnt").value = "";
        document.getElementById("term").value = "";
        document.getElementById("intRate").value = "";
        document.getElementById("monthlyPayment").innerText = "";
        document.getElementById("totalPrinc").innerText = "";
        document.getElementById("totalInt").innerText = "";
        document.getElementById("cost").innerText = "";       
        document.getElementById("table").innerText = "";
    }); 
    

    // ************************************************************
    // document.getElementById("cost").innerHTML = "$" +
    // return { userAmount, userMonths, userIntRate }
    // return { principal, calculateInterest, calculatePayments};


    // Amortization table  not finished but trying a different way
    // let table="";

    // table += "<table cellpadding='15 border='1>";

    // table += "<tr>";
    //     table += "<td>0</td>";
    //     table += "<td>&nbsp</td>";
    //     table += "<td>&nbsp</td>";
    //     table += "<td>&nbsp</td>";
    //     table += "<td>&nbsp</td>";
    //     table += "<td>"+userAmount+"</td>";
    // table += "</tr>";

    // table +="</table>";
    // document.getElementById("table").innerHTML = table;



        // *************** I think this may be a better method to display Amortization




//         // Amort js output
// function getValues(){
//     let balance = parseFloa(document.getElementById("loamAmount").value);
//     let interestRate = parseFloat(document.getElementById("intRate").value/100);
//     let terms = parseInt(document.getElementById("term").value);
// // set div string
//     let div = document.getElementById("Result");

//     // in case of re-calc clear div
// }
//         // let div = document.getElementById("Result");
//         // amort function: calculates necessary elements of loan and displays each months
//         //  amortization schedule on the page
//      function amort(userAmount,)

        

//     result += "<table border='1'><tr><th>Month #</th><th>Payment</th><th>Principal</th>" +
//              "<th>Interest</th><th>Total Interest</th><th>Balance</th>";

//     for (let count = 0; count < userMonths; ++count) {
         
//         // in-loop interest amount holder
//         let interest = 0;

//         //  in-loop monthly principal holder
//         let monthlyPrincipal = 0;

//         // start new table row with each loop iteration
//         result += "<tr align=center>";

//         // display month number in col 1 using the loop count variable
//         result += "<td>" + (count + 1) + "</td>";

//         //  code for displaying in loop balance
//         result += "<td>" + userAmount + "</td>";

//         //  calculate in-loop interest amount and display
//         interest = userAmount * monthlyPayment;
//         result += "<td> $" + interest + "</td>";

//         //  calculate the in-loop monthly principal and display
//         monthlyPrincipal = monthlyPayment - interest;
//         result += "<td> $" + monthlyPrincipal + "</td>";

//         // end the table row on each iteration of the loop
//         result += "</tr>";

//         //  update the balance for each loop iteration
//         userAmount = userAmount - monthlyPrincipal;
//     } 
//     //  Final piece added to return string before returning it - closes the table
//     result += "</table>";
   
//     // returns concatenated string to the page
//     return result;

}
