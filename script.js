const API_URL = 'https://agenda-backend-vr7o.onrender.com'; // domínio do Render

fetch('${API_URL}/eventos')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });

document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: '${API_URL}/eventos', // <- aqui substituído
    selectable: true,
    select: function(info) {
      const title = prompt('Título do evento:');
      if (title) {
        fetch('${API_URL}/eventos', { // <- aqui também substituído
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            title: title,
            start: info.startStr,
            end: info.endStr
          })
        })
        .then(() => calendar.refetchEvents());
      }
    }
  });

  calendar.render();
});
