 function validation1(){
            var phone_number = document.getElementById("phone_number").value;
            var password = document.getElementById("password").value;

            if(phone_number == "" || password == "") {
                alert("Please enter both phone number and password");
                return false;
            }
            
            // Get stored users
            const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
            
            // Find user by phone number
            const user = storedUsers.find(user => 
                user.phone === phone_number && user.password === password
            );
            
            if (user) {
                // Store current user session
                sessionStorage.setItem('currentUser', JSON.stringify({
                    phone: user.phone,
                    email: user.email,
                    name: '${user.firstName} ${user.lastName}',
                     enrollmentNo: user.enrollmentNo
                }
                ));
                
                alert("Login successful!");
                return true;
            } else {
                alert("Invalid phone number or password");
                return false;
            }
        }



        function validation(){
        var First_name=document.getElementById("First_name").value;
        var last_name=document.getElementById("last_name").value;
        var phone_number=document.getElementById("phone_number").value;
        var email=document.getElementById("email").value;
        var password=document.getElementById("password").value;
        var confirm_password=document.getElementById("confirm_password").value;

            if(First_name==""  || last_name=="" || phone_number=="" || email=="" || password=="" || confirm_password=="") 
        {
            alert("All fields are mendatory")
            return false;
        }
        else if(phone_number.length<10 || phone_number.length>10 || isNaN(phone_number))
        {
            alert("enter a number proprly")
            return false;
        }
        else if(password.length<8)
        {
            alert("enter a password greater than 8 digit")
            return false;
        }
        else if(password!=confirm_password)
        {
            alert("your password not matched with confirm password")
            return false;
        }
        else
        {
            true;
        }

        const existingusers = JSON.parse(localStorage.getItem('users')) || [];


            const prefix = "24012011";
                const counter = existingusers.length; 
                const paddedCounter = String(counter).padStart(3, '0'); 
                const enrollmentNo = prefix + paddedCounter;
        // Store user data in localStorage
  const userData = {
                    firstName: First_name,
                    lastName: last_name,
                    phone: phone_number,
                    email: email,
                    password: password, 
                     enrollmentNo: enrollmentNo
                };
                
                // Check if user already exists
                const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

                const userExists = existingUsers.some(user => 
                    user.phone === phone_number || user.email === email
                );
                
                if (userExists) {
                    alert("User with this phone or email already exists");
                    return false;
                }
                
                existingUsers.push(userData);
                localStorage.setItem('users', JSON.stringify(existingUsers));
                
                alert("Registration successful!");
                window.location.href = "login.html"; // redirect manually
                return false;
        }



         const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
    if (!currentUser) {
      document.getElementById('studentInfo').innerHTML = 'No user logged in.';
    } else {
      const allUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = allUsers.find(u => u.phone === currentUser.phone);

      if (!user) {
        document.getElementById('studentInfo').innerHTML = 'User data not found.';
      } else {
        // Create HTML content
        const infoHTML = `
          <p><strong>Enrollment Number:</strong> ${user.enrollmentNo}</p>
          <p><strong>Name:</strong> ${user.firstName}  ${user.lastName}</p>
          <p><strong>Phone:</strong> ${user.phone}</p>
          <p><strong>Email:</strong> ${user.email}</p>
        `;
        document.getElementById('studentInfo').innerHTML = infoHTML;
      }

      
    }




const user = JSON.parse(sessionStorage.getItem('currentUser'));

document.getElementById('profilePhone').innerText = `Phone: ${user.phone}`;
document.getElementById('profileEnrol').innerText = `Enrollment: ${user.enrollmentNo}`;

document.getElementById('profileBtn').addEventListener('click', () => {
  document.getElementById('profileDropdown').classList.toggle('show');
});

document.getElementById('logoutBtn').addEventListener('click', () => {
  sessionStorage.removeItem('currentUser');
  location.reload();
});
