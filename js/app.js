const cryptoAPI = new CryptoAPI();
const ui = new UI();

// Form
const form = document.getElementById('form');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Read Currency

    const currencySelect = document.getElementById('currency').value;

    //Read Cryptocurrency

    const cryptocurrencySelect = document.getElementById('cryptocurrency').value;
    
    if(currencySelect === '' || cryptocurrencySelect === ''){
        ui.printMessage('All the fields are required', 'deep-orange darken-4 card-panel');
    }else{
        
        // Query Rest Api

        cryptoAPI.queryAPI(currencySelect, cryptocurrencySelect)
            .then(data => {
                ui.displayResult(data.result[0], currencySelect);
            });
    }
});