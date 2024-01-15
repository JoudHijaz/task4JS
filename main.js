document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('conversionForm').addEventListener('submit', function(e) {
        e.preventDefault();  
        
        const rates = {
            dollar: 3.75,
            dinar: 5.20,
            nis: 1        
        };

        const amountElement = document.getElementById('amount');
        const currencyElement = document.getElementById('exchange');
        const resultElement = document.getElementById('result');

        const amount = parseFloat(amountElement.value) || 0;
        const currency = currencyElement.value;
        const result = amount / (rates[currency] || 0);

        resultElement.innerText = `Converted amount: ${result.toFixed(2)} ${currency}`;
    });
});
