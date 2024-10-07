function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    } else {
        return bill * 0.20;
    }
}

console.log("Tip for a bill of 100:", calcTip(100));

const bills = [125, 555, 44];

const tips = [];
for (let i = 0; i < bills.length; i++) {
    tips.push(calcTip(bills[i]));
}

const totals = [];
for (let i = 0; i < bills.length; i++) {
    totals.push(bills[i] + tips[i]);
}

console.log("Bills:", bills);
console.log("Tips:", tips);
console.log("Totals:", totals);
