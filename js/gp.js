const gp = document.querySelector('.gp');
const gpmax = document.querySelector('.gpmax');
const gpmin = document.querySelector('.gpmin');
let b = document.querySelectorAll('.b');
let gpa = document.getElementById('gpa');
let sgpmax = document.getElementById('sgpmax');
let sgpmin = document.getElementById('sgpmin');
let egp = document.querySelector('.egp');
let egpmax = document.querySelector('.egpmax');
let egpmin = document.querySelector('.egpmin');
let clr = document.querySelector('.clr');
let result = document.querySelector('.result');
let alphabets = /^[A-Za-z]+$/;

// Chaning the CSS properties of Your GP when on focus
gp.addEventListener('focus', (e) => {
    gpa.style.color = 'orange';
    gpa.style.fontSize = '15px';
    e.target.style.color = '#fff';
    egp.innerText = "";
    egpmax.innerText = "";
    egpmin.innerText = "";
});

// Validating Your Gp for empty inputs, alphabets and having
// values greater than 4
gp.addEventListener('blur', (e) => {
    if (e.target.value == ""){
        egp.innerText = 'Cannot be Empty';
    }else if(e.target.value.length > 4){
        egp.innerText = 'Cannot be Greater than 4';
    }else if(e.target.value.match(alphabets)){
        egp.innerText = 'Cannot contain Alphabets';
    }else{
        egp.innerText = "";
    }
});

// Chaning the CSS properties of School GPmax when on focus
gpmax.addEventListener('focus', (e) => {
    sgpmax.style.color = 'orange';
    sgpmax.style.fontSize = '15px';
    e.target.style.color = '#fff';
    egpmin.innerText = "";
    egp.innerText = "";
    egpmax.innerText = "";
});

// Allowwing only numbers in school Gpmax and School Gpmin
// not even decimal is allowed
for (let i = 0; i < b.length; i++){
    b[i].addEventListener('keyup', (e) => {
    if(e.which != 8 && e.which != 0 && e.which < 48 || e.which > 57){
        e.target.value = e.target.value.replace(/\D/g, "");
    }
});
}

// Validating School Gpmax for empty inputs, alphabets and having
// values greater than 2
gpmax.addEventListener('blur', (e) => {
    if (e.target.value == ""){
        egpmax.innerText = 'Cannot be Empty';
    }else if(e.target.value.length > 2){
        egpmax.innerText = 'Cannot be Greater than 2';
    }else if(e.target.value.match(alphabets)){
        egpmax.innerText = 'Cannot contain Alphabets';
    }else{
        egpmax.innerText = "";
    }
});

// Chaning the CSS properties of School GPmin when on focus
gpmin.addEventListener('focus', (e) => {
    sgpmin.style.color = 'orange';
    sgpmin.style.fontSize = '15px';
    e.target.style.color = '#fff';
    egpmax.innerText = "";
    egp.innerText = "";
    egpmin.innerText = "";
});

// Validating School Gpmin for empty inputs, alphabets and having
// values greater than 2
gpmin.addEventListener('blur', (e) => {
    if (e.target.value == ""){
        egpmin.innerText = 'Cannot be Empty';
    }else if(e.target.value.length > 2){
        egpmin.innerText = 'Cannot be Greater than 2';
    }else if(e.target.value.match(alphabets)){
        egpmin.innerText = 'Cannot contain Alphabets';
    }else {
        egpmin.innerText = "";
        
    }
});

// coding the calculation button
let ccc = document.getElementById('ccc');
ccc.addEventListener('click', () => {
    // formular 1 + 3 * ((Gpmax - Gp)/(Gpmax - Gpmin))
    if (gp.value === "" || gpmax.value === "" || gpmin.value === ""){
        egp.innerText = 'Fill all fields';
    }else if (gp.value.length > 4){
        egp.innerText = 'Cannot be greater 4 Characters';
    }else if(gp.value.match(alphabets)){
        egp.innerText = 'Cannot contain Alpabets';
    }else if (gpmax.value.length > 2){
        egpmax.innerText = 'Cannot be greater than 2 Characters';
    }else if(gpmax.value.match(alphabets)){
        egpmax.innerText = 'Cannot contain Alpabets';
    }else if(gpmin.value.length >2){
        egpmin.innerText = 'Cannot be greater than 2 characters';
    }
    else if(gpmin.value.match(alphabets)){
        egpmin.innerText = 'Cannot contain Alpabets';
    }else{
        let germanGp, a, c, d, e;
        a = gpmax.value - gp.value;
        c = gpmax.value - gpmin.value;
        d = a/c;
        e = 3 * d;
        germanGp = 1 + e;
        result.innerText = 'German GP = ' + germanGp.toFixed(2).slice(0, -1);
    }
        
});

clr.addEventListener('click', () => {
    result.innerText = "";
    gp.innerText = "";
    gpmax.innerText = "";
    gpmin.innerText = "";
});











