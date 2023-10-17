function getValues() {

    let message = document.getElementById('userInput').value;
    
    if (message.length == 0) {
        Swal.fire({
            icon: 'error',
            backdrop: false,
            title: 'Oops!',
            text: 'Please enter a message to see if its a palindrome'
        });
    } else {

        let revMsg = checkForPalindrome(message);
        
        displayResults(revMsg);

    }

}

function checkForPalindrome(str) { 
    
    var a = str.replace(/\s|[0-9_]|\W|[#$%^&*()]/g, "").toLowerCase();

    if (a === a.split("").reverse().join("")) {
        return true;
    }
        return false;
}



function displayResults(message) {

    document.getElementById('msg').textContent = `Your message is symmetrical: ${message}!`;

    document.getElementById('alert').classList.remove('invisible');
}