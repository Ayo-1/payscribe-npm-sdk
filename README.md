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
### Airtime To Wallet Lookup

You may need to get fetch the available networks and our current rate before sending the airtime

Please note that wallet will only be credited when the airtime is received.

```
Payscribe.fetch_airtime_rates()
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

### Process Airtime to Wallet

Airtime to wallet.

Your wallet will be credited once airtime is received

Parameters

network: The network you are sending; mtn, glo, 9mobile, or airtel.

phone_number: Our phone phone number, kindly visit the airtime to wallet lookup to see available network and respective numbers.

from: The phone number you are sending it from.

amount: The amount you are sending. Minimum of NGN500 And maximum of NGN20,000 per transaction.

```
Payscribe.process_airtime_to_wallet(network, amount, phone, from)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

### Validate Electricity

Validate electricity

Parameters

meter_number: The meter number you want to validate.

meter_type: postpaid or prepaid.

service: This is the available disco : ikedc, ekedc, phedc, aedc, ibedc, kedco.

amount: The amount you are purchasing minimum of N100.

```
Payscribe.validate_meter_number(meter_number, meter_type, service, amount)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```


### Pay Electricity

Pay electricity bill

Parameters

productCode: The product code as seen when validating.

productToken: The productToken as seen when validating.

```
Payscribe.pay_electricity(productCode, productToken)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

### Vend Airtime 

Purchase airtime (Glo, Mtn, Airtel, 9mobile)

Parameters

network: The network you are vending; mtn, glo, 9mobile or airtel.

amount: Minimum of NGN50.

recipient: The phone number you are buying to, set it to array if you're sending to multiple recipent.

ported: Boolean Value, set to true if the number is a ported number.

```
Payscribe.vend_airtime(network, recipient,amount, false)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```

### Get Transaction Report

Transaction Report

Parameter

trans_id: The transaction ID you are trying to query

```
Payscribe.get_transaction_report(trans_id)
.then(data => {
console.log(data)
}
.catch(error => {
console.error(error)
})

```
