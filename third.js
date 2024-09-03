const button = document.getElementById('mahi');
let a; 

button.addEventListener('click', () => {
    a = prompt("Do you like this project? ( yes or no)");
    if (a != null ) {
    abc();
    } 
});

function abc() {
    if (a == 'yes') {
    document.getElementById('mahi1').innerHTML = "Yes, we also like it!";
    } 
    if (a == 'no') {
    document.getElementById('mahi1').innerHTML = "No ?, we will work for it!";
    }
}