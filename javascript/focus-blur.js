// Set up function to tip user about username length
function tipUsername() {
    elMsg.className = 'tip';
    elMsg.innerHTML = 'Username must be at least 5 characaters';
}
// Set up function to tell user the the username is to short once it loses focus
function checkUsername() {
    var username = el.value;
    if (username.length < 5) {
        elMsg.className = 'warning';
        elMsg.textContent = 'Not long enough, yet...';
    } else {
        elMsg.textContent = '';
    }
}

// Grab the user unput
var el = document.getElementById('username');
// Grab the messages area
var elMsg = document.getElementById('feedback');

// Set up calls for tipUsername() and checkUsername() with blur and focus event listeners
el.addEventListener('focus', tipUsername, false);
el.addEventListener('blur', checkUsername, false);