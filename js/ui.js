class UI{
    constructor(){
        this.init();
    }

    init(){
        this.printCryptoCurrencies();
    }

    printCryptoCurrencies(){
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
                const cryptoCurrencies = data.cryptoCurrencies;
                const select = document.getElementById('cryptocurrency');

                cryptoCurrencies.forEach(currency => {
                    let option = document.createElement('option');
                    option.value = currency.id;
                    option.appendChild(document.createTextNode(currency.name));
                    select.appendChild(option);
                });
                
            }); 
    }
    
    printMessage(message, className){
        const div = document.createElement('div');
        div.className = className;
        div.appendChild(document.createTextNode(message));

        const messagesDiv = document.querySelector('.messages');
        messagesDiv.appendChild(div);

        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 3000);
    }

    displayResult(result, currencySelect){
        
        let currencyName = 'price_'+currencySelect.toLowerCase();
        let currencyValue = result[currencyName];
        
        let html = '';
        html += `
            <div class="card cyan darken-3">
                <div class="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The Price of ${result['name']} from ${currencySelect} is ${currencyValue}</p>
                </div>
            </div>
        `;

        const resultDiv = document.getElementById('result');
        resultDiv.innerHTML = html;
    }
}