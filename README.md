# Node js SDK for payscribe.ng

This is the nodejs module for payscribe.ng API.
In order to use this module, you'll need a payscribe live api key.

## Support

Any version of nodejs and npm is compatible with this module

### Installing

Install the package using npm:

```
npm install payscribe-sdk
```

## Usage

Its pretty easy to get started:

```
const payscribe = require('payscribe-sdk');

// instantiate with your live key
const Payscribe = new payscribe('API_KEY');

Payscribe.function_name(arg1, arg2)
.then(data => {
console.log(data)
})
.catch(error => {
console.error(error)
})
```

### Data Lookup

To vend for data, you need to fetch data plans.

You can fetch individual plans or all at once using the data lookup method.

Parameters - mtn, airtel, 9mobile, glo, all(to get all at once)

```
Payscribe.data_lookup("all")
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

### Vend Data

Purchase Data (Glo, Mtn, Airtel, 9mobile)

Please note its advisable that you access the data lookup method to get the updated plan id and amount before vending for data

Parameters:

recipient: The phone number you are sending the data to, this can be an array if you are sending to multiple numbers.

network: The network you are sending to; mtn, glo, 9mobile, or airtel.

plan: the selected plan as gotten from the data lookup method


```
Payscribe.vend_data(recipient, network, plan)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})
```
### Rechard Card Printing

Print recharge card pin, minimum quantity is 1 and maximum is 50,000.

Please note that this pin works for all network.

Parameters

qty: the quantity of pin you want to generate.

amount: Amount from NGN50, to NGN50,000.

display_name: This is the name you want to show on the recharge card slip.

```
Payscribe.recharge_card(qty, amount, display_name)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})
```
### Fetch Recharge Card Pin

You can fetch all generated pin for a particular transaction using the transaction ID.

Parameter

trans_id: The trasaction ID

```
Payscribe.fetch_pin(trans_id)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})
```

### Multichoice - validate smart card number

Validate smart card number to get bouquet and customer details before vending

Parameters

type: gotv or dstv.

account: the iuc number you are validating.

```
Payscribe.validate_iuc("gotv", trans_id)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

### Vend Multichoice

Make payment for GOTV - DSTV

Parameters

phone: The buyer' phone number.

productCode: The productCode as returned when validating the iuc number.

plan: the plan you are buying.

productToken: The token received when validating the iuc number

trans_id: your transaction id, which you can use as reference later on.

```
Payscribe.vend_multichoice(plan, producCode, phone, productToken, trans_id)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

### Startimes - Validate smart card number

Validate startimes smart card number to get bouquet and customer details before vending

Parameters

account: The iuc number you are validating.

amount: the amount you are paying.

```
Payscribe.validate_startimes(account, amount)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

### Vend Startimes

Make payment for startimes

Parameters

plan: the plan you're purchasing either NOVA, CLASSIC...

cycle: This is the cycle for the plan you selected either daily, weekly, or monthly.

productCode: as seen on the validation.

phone: the user phone number.

productToken: as seen on the validation endpoint.

trans_id: your reference id.

```
Payscribe.vend_startimes(cycle, plan, producCode, phone, productToken, trans_id)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

## Deployment

Add additional notes about how to deploy this on a live system

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Billie Thompson** - *Initial work* - [PurpleBooth](https://github.com/PurpleBooth)

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Hat tip to anyone whose code was used
* Inspiration
* etc
