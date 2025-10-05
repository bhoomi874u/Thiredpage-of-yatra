const b = document.getElementById('clickbutton');
const uname = document.getElementById('inputname');
const username = document.getElementById('username');
button.addEventListener('click', () => {
    const value = uname.value.trim();
    localStorage.setItem('name', value);
    username.innerText = value;
    uname.value = "";
});