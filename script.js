document.addEventListener('DOMContentLoaded', function() {
  var calendarEl = document.getElementById('calendar');
  
  // Inicializa o FullCalendar
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridMonth', // Exibe a visão mensal
    
    // Eventos iniciais (você pode adicionar eventos aqui também)
    events: [
      { title: 'Evento 1', start: '2025-04-30' },
      { title: 'Evento 2', start: '2025-05-01' }
    ],
    
    // Função para permitir que o usuário adicione eventos clicando em uma data
   /* dateClick: function(info) {
      var eventTitle = prompt('Digite o título do evento:');
      if (eventTitle) {
        // Adiciona o evento ao calendário
        calendar.addEvent({
          title: eventTitle,
          start: info.dateStr,  // A data clicada
          allDay: true,         // Define como um evento de dia inteiro
          className: 'user-event' // Classe CSS para personalizar o evento
        });
      }
    }*/
  });
  
  // Renderiza o calendário
  calendar.render();
});
