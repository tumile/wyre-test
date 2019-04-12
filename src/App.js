import crypto from "crypto-js"
import React, { Component } from "react"
import "./App.css"

const ACCOUNT_ID = "account:AC_PQGDWDM2RFY",
    PATRICK = "account:AC_UDJHN2FJJDZ",
    API_KEY = "AK-BRAEWLW3-Q7RY7MND-38HHZUGE-VZUF369U",
    SEC_KEY = "SK-TA4FAP4R-7R9GTRM4-LUX997X6-WH28YM7F"

class App extends Component {
    handleClick = () => {
        // const body = JSON.stringify({
        //     destAmount: 1,
        //     sourceCurrency: "ETH",
        //     dest: "0x2d4DF6D8FbddE554E7D764F66fc6840d85Dda817",
        //     destCurrency: "DAI",
        //     message: "Test transfer",
        //     autoConfirm: true
        // })

        // const url = `https://api.testwyre.com/v2/transfers?timestamp=${new Date().getTime()}&masqueradeAs=${accountId}`
        // const url = `https://api.sendwyre.com/v3/accounts/${accountId}?masqueradeAs=${accountId}`
        const url = `https://api.sendwyre.com/v2/account`

        return fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Api-Key": API_KEY,
                "X-Api-Signature": this.getApiSignature(url)
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

    getApiSignature = data => {
        return crypto.enc.Hex.stringify(crypto.HmacSHA256(data, SEC_KEY))
    }

    render() {
        return (
            <div className="App">
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}

export default App
