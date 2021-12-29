
const splitBill = (amount, numPeople) => `Each person needs to pay ${amount / numPeople}`
Console.log(splitBill(10,2));


const countdown = (startingNumber, step) => {
    let countFromNum = startingNumber + step;
    return () => countFromNum -= step;
}
const countingDown =countdown(20,2);
console.log(countingDown());