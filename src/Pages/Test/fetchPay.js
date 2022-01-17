function fetchPay(data) {
    fetch("https://planetxegy.herokuapp.com/reservations/pay", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }})
    .then(async function(response) {
        const res = await response.json()
        console.log(res)
        window.location.href = `https://accept.paymob.com/api/acceptance/iframes/330262?payment_token=${res['data']}`;
    })       
    .catch(err => {
        console.log('error happened')
        console.log(err)
    })
}

export default fetchPay
