const loginsec=document.querySelector('.login-section')
const loginlink=document.querySelector('.login-link')
const registerlink=document.querySelector('.register-link')
registerlink.addEventListener('click',()=>{
    loginsec.classList.add('active')
})
loginlink.addEventListener('click',()=>{
    loginsec.classList.remove('active')
})

loginsec.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    const email = this.querySelector('input[type="email"]').value;
    const password = this.querySelector('input[type="password"]').value;
    
    // Here, you would typically make an AJAX request to a server endpoint for authentication.
    // For this example, we'll just use a basic condition to simulate the authentication result.
    if (email === 'naik@inar.com' && password === '12345678' || text==='krupa') {
        alert('Login successful!');
    } else {
        alert('Invalid email or password. Please try again.');
    }
});


    
