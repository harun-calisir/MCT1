function myFunction() {
    let capital = document.querySelector("#A").value;
    let time = document.querySelector("#T").value;
    let interest = document.querySelector("#IR").value;
    let intrst = interest/100

    let a = 1 - 1 / (1 + parseFloat(intrst))**parseFloat(time)
    let b = a / parseFloat(intrst)
    let c = parseFloat(capital) / b
    
    let output = c.toFixed(2);
    let toplam = (output * time).toFixed(2)
    
    let calc = document.querySelector(".calcBtn")
    let renew = document.querySelector(".re")
    
    calc.addEventListener("click", function(){document.getElementById("install").innerHTML = output})
    calc.addEventListener("click", function(){document.getElementById("total").innerHTML = toplam})
    calc.addEventListener("click", function(){document.querySelector(".mainScreen").style.display ="none"})
    calc.addEventListener("click", function(){document.querySelector(".output").style.display ="flex"})
    renew.addEventListener("click", function(){document.querySelector(".output").style.display ="none"})
    renew.addEventListener("click", function(){document.querySelector(".mainScreen").style.display ="flex"})
}










