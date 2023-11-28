
let sum = +prompt('Введите сумму кредита: (в грн).');
console.log(`Сумма кредита: ${sum} грн.`);
let term = +prompt('Введите срок кредитования: (месяцев).');
console.log(`Срок кредитования: ${term} месяцев`);
let rate = +prompt('Укажите процентную ставку (% годовых)');
console.log(`Процентная ставка: ${rate} % годовых`)

let mRate = rate / 12;

let creditBodyInMonth = Math.round((sum / term) * 100) / 100;
console.log(`Тело кредита в месяц: ${creditBodyInMonth} грн.`);

let totalOverpayment = 0;

for (let i = 1; i <= term; i++) {
   let interestPayment = Math.round((sum * mRate / 100) * 100) / 100;
   let loanRepayment = Math.round((creditBodyInMonth + interestPayment) * 100) / 100;

   if (i === term) {
       creditBodyInMonth = Math.round(sum * 100) / 100;
       loanRepayment = Math.round((creditBodyInMonth + interestPayment) * 100) / 100;
   }

   totalOverpayment = Math.round((totalOverpayment + interestPayment) * 100) / 100;
   sum = Math.round((sum - creditBodyInMonth) * 100) / 100;

   console.log(`#${i} Платеж(в месяц): ${loanRepayment} грн, Тело: ${creditBodyInMonth} грн, Проценты: ${interestPayment} %, Остаток долга: ${sum} грн`);
}

console.log(`Переплата по кредиту: ${totalOverpayment} грн`);