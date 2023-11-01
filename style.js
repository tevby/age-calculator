// input declarations
let day = document.querySelector("#dayinp");
let month = document.querySelector("#monthinp");
let year = document.querySelector("#yearinp");
let today = new Date();
let presentyear = today.getFullYear();
// let isValid = false;
let dayinp = day.value;
let monthinp = month.value;
let yearinp = year.value;
let present_day = today.getDate();
let present_month = 1 + today.getMonth();
let daysinEachMonth = [
    31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
];

// output declarations
const output_year = document.querySelector('.yearotp');
const output_month = document.querySelector('.monthotp');
const output_day = document.querySelector('.dayotp');
const submit_btn = document.querySelector('.enter');

// error element
const error_day = document.querySelector('.info-day');
const error_month = document.querySelector('.info-month');
const error_year = document.querySelector('.info-year');

submit_btn.addEventListener('click', CalculateDate);
day.addEventListener('input', (e) => {
    let dayofbirth = day.value;
    if (+dayofbirth > 31) {
        error_day.textContent= 'Must be a valid date';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = '';
    }
    if (+ dayofbirth === 0) {
        error_day.textContent= 'This field is required';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_day.textContent = '';
    }
}
)
month.addEventListener('input', (e) => {
    let monthofbirth = month.value;
    if (+monthofbirth > 12) {
        error_month.textContent= 'Must be a valid date';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = '';
    }
    if (+ monthofbirth === 0) {
        error_month.textContent= 'This field is required';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_month.textContent = '';
    }
}
)
year.addEventListener('input', (e) => { 
    let yearofbirth = year.value;
    if (+yearofbirth > presentyear) {
        error_year.textContent= 'Must be a valid date';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = '';
    }
    if (+yearofbirth === 0)  {
        error_year.textContent= 'This field is required';
        isValid = false;
        return;
    } else {
        isValid = true;
        error_year.textContent = '';
    }
}
)

function CalculateDate(){
    if (isValid){
        if (day.value > present_day){
            present_day = present_day + daysinEachMonth[present_month - 1];
            present_month = present_month - 1;
            return;
        }
        if ( month.value > present_month) {
            present_month = present_month + 12;
            presentyear = presentyear - 1;
            return;
        }

    let d = present_day - day.value;
    let m = present_month - month.value;
    let y = presentyear - year.value;

    output_year.textContent = y;
    output_month.textContent = m;
    output_day.textContent = d;
    }        
}
