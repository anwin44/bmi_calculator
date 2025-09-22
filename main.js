
let usernames=localStorage.getItem('USERNAM')
console.log(usernames);
head1.innerHTML=`WELCOME ${usernames.toUpperCase()}`
    




function findBmi(){
    let weightKg=document.getElementById('wei').value;
    let heightCm=document.getElementById('hei').value;
    let heightM = heightCm / 100;
    let bmi = weightKg / (heightM * heightM);
    bmi=bmi.toFixed(1);
     if (heightCm === "" || weightKg === "") {
    alertBox.classList.remove("d-none");
    box.textContent = "--";
    box.className = "d-inline-flex align-items-center justify-content-center bg-secondary text-white fw-bold fs-2 rounded shadow p-5";
    return;
  } else {
    alertBox.classList.add("d-none");
  }
     if(bmi<18.5){
        result.innerHTML=` <div class="container">
             <h4>Your BMI is:</h4>
             <div class="container">
                <div class="d-inline-flex align-items-center justify-content-center 
                bg-info text-white fw-bold fs-2 rounded shadow 
                p-5">${bmi}</div>
                <h1 class="text-info ">Underweight</h1>
             </div>
             `
    }
    else if(bmi>=18.5 && bmi<=24.9){
          result.innerHTML=`<div class="container">
             <h4>Your BMI is:</h4>
             <div class="container">
                <div class="d-inline-flex align-items-center justify-content-center 
                bg-success text-white fw-bold fs-2 rounded shadow 
                p-5">${bmi}</div>
                <h1 class="text-success ">Healthy</h1>
             </div>
            
        </div>`
    }
    else if(bmi>=25 && bmi<=29.9){
          result.innerHTML=`  <div class="container">
             <h4>Your BMI is:</h4>
             <div class="container">
                <div class="d-inline-flex align-items-center justify-content-center 
                bg-warning text-white fw-bold fs-2 rounded shadow 
                p-5">${bmi}</div>
                <h1 class="text-warning ">Overweight</h1>
             </div>`
    }
    else{
        result.innerHTML=` <div class="container">
             <h4>Your BMI is:</h4>
             <div class="container">
                <div class="d-inline-flex align-items-center justify-content-center 
                bg-danger text-white fw-bold fs-2 rounded shadow 
                p-5">${bmi}</div>
                <h1 class="text-danger ">Obese</h1>
             </div> 
        </div>`
    }

}


function resets(){
    document.getElementById('wei').value=""
    document.getElementById('hei').value=""
    document.getElementById('age').value=""
    alertBox.classList.add("d-none");
    result.innerHTML=``

}
