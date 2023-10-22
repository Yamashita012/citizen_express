//=========================================================================SIMPLE DUMMY DATABASE
const dummyDatabase = [
    { id_number: "1234567890123", password: "password123" },
    { id_number: "9876543210123", password: "securepass" },
    { id_number: "4561237890123", password: "Password123" },
    { id_number: "3456789012123", password: "12345Abcde" },
    { id_number: "4561239890123", password: "SecurePass456" },
    { id_number: "7890123456123", password: "RandomPwd789" },
    { id_number: "4561237800123", password: "SimplePass12epass" },
    { id_number: "8765432109123", password: "NewPassword34" },
    { id_number: "6543217890123", password: "EasyPwd567" },
    { id_number: "5678901234123", password: "Test123Pwd" },
    { id_number: "2345678901123", password: "P@ssword789" },
    { id_number: "3210987654123", password: "98765Pwd@Ab" }
    
];
  

function login() {
    const idNumber = document.getElementById("id_number").value;
    const password = document.getElementById("password").value;

    // Checking if the credentials exist in the dummy database
    const matchingUser = dummyDatabase.find(user => user.id_number === idNumber && user.password === password);

    if (matchingUser) {
        // If VALID Redirect to the voting page
        window.location.href = 'voting.html';
    }

    else {
        // ElSE display an error message
        alert('Invalid credentials or A field is EMPTY!. Please try again.');
    }
}

//==============================================================================================SIGNUP

    function signUp() {
        // Getting values from the form
        const firstName = document.getElementById("firstName").value;
        const lastName = document.getElementById("lastName").value;
        const race = document.getElementById("race").value;
        const email = document.getElementById("email").value;
        const idNumber = document.getElementById("idNumber").value;
        const phoneNumber = document.getElementById("phoneNumber").value;
        const address = document.getElementById("address").value;
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirmPassword").value;
    
        // Checking if the passwords match
        if (password !== confirmPassword) {
            alert('Passwords do not match. Please try again.');
            return;
        }
    
        // Creating a user object
        const user = {
        firstName,
        lastName,
        race,
        email,
        idNumber,
        phoneNumber,
        address,
        password,
        };
    
        // Adding the user to the database
        dummyDatabase.push(user);
    
        // Reset the form
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("race").value = "Black/African";
        document.getElementById("email").value = "";
        document.getElementById("idNumber").value = "";
        document.getElementById("phoneNumber").value = "";
        document.getElementById("address").value = "";
        document.getElementById("password").value = "";
        document.getElementById("confirmPassword").value = "";

        alert("ACCOUNT CREATION SUCCESSFUL!")
    
        setTimeout(function () {
            window.location.href = 'signin.html';
          }, 1000);
    }
    

