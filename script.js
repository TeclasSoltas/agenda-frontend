document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');

  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth',
    events: 'http://localhost:3000/eventos',
    selectable: true,
    select: function(info) {
      const title = prompt('Título do evento:');
      if (title) {
        fetch('http://localhost:3000/eventos', {
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
