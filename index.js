function addingEventListener() {
    const input = document.getElementById('button');
    
    // Ensure that the event listener is correctly bound
    input.addEventListener('click', function() {
      alert('I was clicked!');
    });
  }
  