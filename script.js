fetch("https://api.frankfurter.app/currencies")
.then(res=>(res.json()))
.then(res=>displayDropDown(res))
let userSelect = document.querySelectorAll(".countryCodeOptions select");
let convertBtn = document.querySelector("#convertBtn");
let input = document.querySelector("#baseCountyValue input");
let result = document.querySelector("#targetCountryValue input");


function displayDropDown(res){
    let countryCode = Object.entries(res)
    for (let i=0;i<countryCode.length;i++){
        let options = `<option value="${countryCode[i][0]}">${countryCode[i][0]}</option>`
        userSelect[0].innerHTML += options
        userSelect[1].innerHTML += options
    }
}
convertBtn.addEventListener("click",()=>{
    let curr1 = userSelect[0].value;
    let curr2 = userSelect[1].value;
    let inputValue = input.value;
    if(curr1===curr2){
        alert("Both Currency Cant Be Same");
    }
    else{
        convert(curr1,curr2,inputValue);
    }
})
function convert(curr1,curr2,inputValue){
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputValue}&from=${curr1}&to=${curr2}`)
    .then(resp => resp.json())
    .then((data) => {
        result.value = Object.values(data.rates)[0]
  });
}