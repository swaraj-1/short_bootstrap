document.getElementById('userForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const age = document.getElementById('age').value.trim();

    if (name === '' || email === '' || age === '') {
        alert('All fields are required!');
        event.preventDefault(); 
    } else if (isNaN(age) || age <= 0) {
        alert('Please enter a valid age!');
        event.preventDefault();
    }
});
