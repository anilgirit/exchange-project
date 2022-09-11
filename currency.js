class Currency {
    constructor (firstCurrency, secondCurrency, ){

        this.firstCurrency = firstCurrency;
        this.secondCurrency = secondCurrency;
        this.amount = null;
        
    }
    exchange (){
        return new Promise((resolve, reject) => {
            
            var myHeaders = new Headers();
            myHeaders.append("apikey", "Rd0QwvNvXfyAipmfCExaIkgzLuVAU3Ve");

            var requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: myHeaders
        };

        fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${this.secondCurrency }&from=${this.firstCurrency}&amount=${this.amount}`, requestOptions)
        .then(response => response.json())
        .then(result => resolve(result.result))
        .catch(error => reject('error', error));


        })
    }
    changeAmount(amount){
        this.amount = amount;
    }
    changeFirstCurrency(newFirstCurrency){
        this.firstCurrency = newFirstCurrency;
    }
    changeSecondCurrency(newSecondCurrency){
        this.secondCurrency = newSecondCurrency;
    }

}