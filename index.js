function convert(){
    let amount = document.getElementById("amount").value;
    let Vietnam_USD = amount / 23000;
    let USD_Vietnam = amount * 23000;
    let currency = document.getElementById("currency").value;
    let currency_1 = document.getElementById("currency_1").value;
    if (currency == "vnd" && currency_1 == "usd"){
       document.getElementById("result").innerHTML = "có giá trị là " + Vietnam_USD +"usd";
    } else if (currency == "usd" && currency_1 == "vnd"){
        document.getElementById("result").innerHTML = "co gia tri la " + USD_Vietnam +"vnd";
    } else {
        document.getElementById("result").innerHTML = "co gia tri la " + amount;
    }
}