
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
    let loanRepayment = Math.round((creditBodyInMonth + (sum * mRate) / 100) * 100) / 100;
    totalOverpayment = Math.round((totalOverpayment + (loanRepayment - creditBodyInMonth)) * 100) / 100;
    sum = Math.round((sum - creditBodyInMonth) * 100) / 100;
    console.log(`#${i} loan repayment: ${loanRepayment} sum: ${sum}`);
   }

   console.log(`Переплата по кредиту: ${totalOverpayment} грн`);