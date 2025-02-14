// signin js
document.addEventListener('DOMContentLoaded', function() {
    const signInForm = document.getElementById('signInForm');
    if (signInForm) {
        signInForm.addEventListener('submit', function(event) {
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            if (!email || !password) {
                alert('Please fill in all fields.');
                event.preventDefault();
            }
        });
    }
});



// signup js
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signUpForm');
    
        signUpForm.addEventListener('submit', function(event) {
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();

            if (!username || !email || !password || !confirmPassword) {
                alert('Please fill in all fields.');
                event.preventDefault();
                return;
            }

            if (password !== confirmPassword) {
                alert('Passwords do not match.');
                event.preventDefault();
                return;
            }

            if (password == confirmPassword) {
                alert('Passwords matched, Successfully SignedUp');
                return;
            }

    });
});



// contact js
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            event.preventDefault();
            return;
        }

        // Additional validation checks can be added here

        // If all checks pass, the form will be submitted
    });
});



function displayAlert() {
            alert('Message successfully sent');
        }

function SignIn() {
            alert('Successfully SignIn');
        }


//home
    function orderNow() {
        alert('Redirecting to the order page...');
        // You can add redirection logic here
}


