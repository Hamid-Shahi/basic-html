const input = document.getElementById('input-field');
function appendToDisplay(key) {
    input.value += key;
};
function clearAll(){
    input.value = '';
};
function calculate(){
    try {
        input.value = eval(input.value)
    } catch (error) {
        input.value = 'Math Eroor'
    }
}