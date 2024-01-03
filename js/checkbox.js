 var isChecked = false;  // Початковий стан чекбокса

  document.getElementById('modal-info').addEventListener('click', function() {
    if (!isChecked) {
      // Якщо чекбокс не відмічений, змініть колір на активний
      this.style.fill = '#2196F3';
      this.style.border = '2px solid #2196F3';
      isChecked = true;  // Оновіть стан
    } else {
      // Якщо чекбокс відмічений, поверніть до дефолтного стилю
      this.style.fill = 'transparent';
      this.style.border = '2px solid #000';
      isChecked = false;  // Оновіть стан
    }
  });