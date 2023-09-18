const convertBtn = document.querySelector("#convert-btn")
const input = document.querySelector("#input")
const lengthTxt = document.querySelector("#length-txt")
const volumeTxt = document.querySelector("#volume-txt")
const massTxt = document.querySelector("#mass-txt")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

convertBtn.addEventListener("click", function(e) {
    e.preventDefault()
    const baseValue = input.value
    
    lengthTxt.textContent = `${baseValue} meter = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)} meter` 
    
    volumeTxt.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)} liters`
    
    massTxt.textContent = (`${baseValue} kilograms = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)} kilograms`) 
    input.value = ""
})

document.querySelector("input").addEventListener("input", function() {
  this.style.width = this.value.length + 'ch'
})