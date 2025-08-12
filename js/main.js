// JavaScript functionality for Hospital Management Website

// Function to validate appointment form
function validateAppointmentForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const doctor = document.getElementById('doctor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (!name || !email || !phone || !department || !doctor || !date || !time) {
        alert('Please fill in all fields.');
        return false;
    }

    // Simple email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    // Store appointment data temporarily in localStorage
    const appointmentData = {
        name,
        email,
        phone,
        department,
        doctor,
        date,
        time
    };
    localStorage.setItem('appointmentData', JSON.stringify(appointmentData));

    alert('Appointment booked successfully!');
    return true;
}

// Function to show doctor details in a modal
function showDoctorDetails(doctorId) {
    // Fetch doctor details based on doctorId (this can be expanded)
    const doctorDetails = {
        'doc1': { name: 'Dr. John Doe', specialization: 'Cardiology', experience: '10 years' },
        'doc2': { name: 'Dr. Jane Smith', specialization: 'Orthopedics', experience: '8 years' },
        // Add more doctors as needed
    };

    const doctor = doctorDetails[doctorId];
    if (doctor) {
        document.getElementById('modalDoctorName').innerText = doctor.name;
        document.getElementById('modalDoctorSpecialization').innerText = doctor.specialization;
        document.getElementById('modalDoctorExperience').innerText = doctor.experience;
        $('#doctorModal').modal('show'); // Assuming Bootstrap modal is used
    }
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});