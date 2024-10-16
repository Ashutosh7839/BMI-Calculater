let form = document.querySelector("form")
let btn = document.querySelector(".btn")
let clrBtn = document.querySelector(".clrBtn")



form.addEventListener("submit",function(e){
    e.preventDefault();
    let weight = parseInt(document.querySelector(".weight").value)
    let height = parseInt(document.querySelector(".height").value)
    let result = document.querySelector(".result")

    if(weight<=0 || isNaN(weight))
    {
        result.innerHTML = "Please give valid value"
    }
    else if(height<=0 || isNaN(height))
    {
        result.innerHTML = "Please give valid value"
    }
    else{
        let bmi = (weight/((height*height)/10000)).toFixed(2)
        result.innerHTML = bmi
    }
})

clrBtn.addEventListener('click',function(){
    document.querySelector(".weight").value = ""
    document.querySelector(".height").value = ""
    document.querySelector(".result").innerHTML = ""
})
