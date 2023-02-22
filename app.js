"use strict";
var fetch = require('node-fetch');
class payscribe {
	constructor(key) {
	  this.key = key
	}

	data_lookup(network){
		return new Promise((resolve, reject) => {
		if(network == "all"){
			var bdy = {};
			var url = `https://www.payscribe.ng/api/v1/data/lookup`
		}
		else if(network == "mtn" || network == "glo" || network == "9mobile" || network == "airtel") {
			var bdy = {"network": network};
			var url = `https://www.payscribe.ng/api/v1/data/lookup?network=${network}`
		}
		 fetch(url, {
			  method: "POST",
			  headers: {
			        "Content-Type": "application/json",
			        "Authorization": `Bearer ${this.key}`
			        },
			  body: bdy
			})
			.then(response => response.json()) 
			.then(json => {
			resolve(json)
			})
			.catch(err => {
				if (err) {
					console.log(err)
					reject(err)
				}
			})
			})
	}

	vend_data(recipient, network, plan_code){
		return new Promise((resolve, reject) => {
		 fetch(`https://www.payscribe.ng/api/v1/data/vend?plan=${plan_code}&recipent=${recipient}&network=${network}`, {
			  method: "POST",
			  headers: {
			        "Content-Type": "application/json",
			        "Authorization": `Bearer ${this.key}`
			        },
			  body: {"network": network, "plan": plan_code, "recipent": recipient}
			})
			.then(response => response.json()) 
			.then(json => {
			resolve(json)
			})
			.catch(err => {
				if (err) {
					console.log(err)
					reject(err)
				}
			})
			})
	}

	recharge_card(quantity, amount, display_name){
		return new Promise((resolve, reject) => {
		 fetch(`https://www.payscribe.ng/api/v1/rechargecard?qty=${quantity}&amount=${amount}&display_name=${display_name}`, {
			  method: "POST",
			  headers: {
			        "Content-Type": "application/json",
			        "Authorization": `Bearer ${this.key}`
			        },
			  body: {"qty": quantity, "amount": amount, "display_name": display_name}
			})
			.then(response => response.json()) 
			.then(json => {
			resolve(json)
			})
			.catch(err => {
				if (err) {
					console.log(err)
					reject(err)
				}
			})
			})
	}

	fetch_pin(trans_id){
		return new Promise((resolve, reject) => {
		 fetch(`https://www.payscribe.ng/api/v1/rechargecardpins?trans_id=${trans_id}`, {
			  method: "GET",
			  headers: {
			        "Content-Type": "application/json",
			        "Authorization": `Bearer ${this.key}`
			        }
			})
			.then(response => response.json()) 
			.then(json => {
			resolve(json)
			})
			.catch(err => {
				if (err) {
					console.log(err)
					reject(err)
				}
			})
			})
	}

	validate_iuc(type, iuc){
		return new Promise((resolve, reject) => {
		 fetch(`https://www.payscribe.ng/api/v1/multichoice/validate?type=${type}&account=${iuc}`, {
			  method: "POST",
			  headers: {
			        "Content-Type": "application/json",
			        "Authorization": `Bearer ${this.key}`
			        },
			  body: {"type": type, "account": iuc}
			})
			.then(response => response.json()) 
			.then(json => {
			resolve(json)
			})
			.catch(err => {
				if (err) {
					console.log(err)
					reject(err)
				}
			})
			})
	}

	vend_multichoice(plan, product_code, phone_number, product_token, trans_id){
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/multichoice/vend?plan=${plan}&productCode=${product_code}&phone=${phone_number}&productToken=${product_token}&trans_id=${trans_id}`, {
				  method: "POST",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        },
				  body: {"plan": plan, "productCode": product_code, "phone": phone_number, "productToken": product_token, "trans_id": trans_id}
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})
	}

	validate_startimes(account, amount){
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/startimes/validate?account=${account}&amount=${amount}`, {
				  method: "POST",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        },
				  body: {"amount": amount, "account": account}
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})
	}

	vend_startimes(cycle, plan, product_code, phone, product_token, trans_id){
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/startimes/vend?cycle=${cycle}&bouquet=${plan}&productCode=${product_code}&phone=${phone}&productToken=${product_token}&trans_id=${trans_id}`, {
				  method: "POST",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        },
				    body: {"cycle": cycle, "bouquet": plan, "productCode": product_code, "phone": phone, "productToken": product_token, "trans_id": trans_id}
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})

	}

	fetch_airtime_rates(){
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/airtime_to_wallet`, {
				  method: "POST",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        }
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})
	}

	process_airtime_to_wallet(network, amount, phone, from) {
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/airtime_to_wallet/vend?network=${network}&amount=${amount}&phone_number=${phone}&from=${sender}`, {
				  method: "POST",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        },
				    body: {"network": network, "amount": amount, "phone_number": phone, "from": sender}
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})

	}

	validate_meter_number(meter_number, meter_type, service, amount){
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/electricity/validate?meter_number=${meter_number}&meter_type=${meter_type}&service=${service}&amount=${amount}`, {
				  method: "POST",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        },
				    body: {"meter_number": meter_number, "meter_type": meter_type, "service": service, "amount": amount}
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})
	}

	pay_electricity(product_code, product_token){
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/electricity/vend?productCode=${product_code}&productToken=${product_token}`, {
				  method: "POST",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        },
				    body: {"productCode": product_code, "productToken": product_token}
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})
	}

	vend_airtime(network, amount, recipent, ported){
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/airtime?network=${network}&amount=${amount}&recipent=${recipent}&ported=${ported}`, {
				  method: "POST",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        },
				    body: {"network": network, "amount": amount, "recipent": recipent, "ported": ported}
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})
	}

	get_transaction_report(trans_id){
		return new Promise((resolve, reject) => {
			 fetch(`https://www.payscribe.ng/api/v1/report?trans_id=${trans_id}`, {
				  method: "GET",
				  headers: {
				        "Content-Type": "application/json",
				        "Authorization": `Bearer ${this.key}`
				        }
				})
				.then(response => response.json()) 
				.then(json => {
				resolve(json)
				})
				.catch(err => {
					if (err) {
						console.log(err)
						reject(err)
					}
				})
				})

	}
}

module.exports = payscribe
