export function getMarketPriceUSD() {
    return fetch('https://bittrex.com/api/v1.1/public/getticker?market=USDT-NEO')
        .then(response => {
            if (response.status >= 200 && response.status < 300) {
                return Promise.resolve(response.json())
            } else {
                return Promise.reject(new Error(response.statusText))
            }
        })
        .then(response => {
            console.log(response)
            return response.result.Last
        })
        .catch(error => {
            return -1
        })
    // return 10
}

export function isBlockedByTransportSecurityPolicy(error) {
    // Test for iOS policy: "The resource could not be loaded because the App Transport Security policy requires the use of a secure connection."
    let result = { blockedByPolicy: false, blockedDomain: '' }
    if (
        error.message != undefined &&
        error.message === 'Network Error' &&
        error.request._response.includes('App Transport Security policy')
    ) {
        result.blockedByPolicy = true
        result.blockedDomain = error.request._url
    }
    return result
}