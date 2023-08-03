function showAndHideStickyWindow() {
  const stickyWindow = document.querySelector('.sticky-window');
  stickyWindow.classList.add('show');

  setTimeout(function() {
    stickyWindow.classList.remove('show');
  }, 5000); // Задайте бажаний час затримки в мілісекундах (тут 5000 мс = 5 секунд)
}
