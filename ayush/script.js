document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('loginForm');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentId = document.getElementById('studentId').value.trim();
    const name = document.getElementById('name').value.trim();
    const session = document.getElementById('session').value.trim();

    if (!studentId || !name || !session) {
      Swal.fire({
        icon: 'error',
        title: 'Missing Information',
        text: 'Please fill all the fields.',
        confirmButtonText: 'OK',
        background: '#1a1a1a',
        color: '#f0f0f0',
        confirmButtonColor: '#6f42c1'
      });
      return;
    }

    // On success, show SweetAlert2 popup
    Swal.fire({
      icon: 'success',
      title: 'Attendance Marked!',
      text: `Hi ${name}, your attendance for "${session}" has been marked.`,
      confirmButtonText: 'Great',
      background: '#1a1a1a',
      color: '#f0f0f0',
      confirmButtonColor: '#6f42c1'
    }).then(() => {
      form.reset();
    });
  });
});
