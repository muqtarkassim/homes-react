window.addEventListener('load', () => {
    const menuItem = document.querySelector('.main-menu');
    const menuclick = document.querySelector('.menu-clicked');
  
    if (menuItem) {
      menuItem.addEventListener('click', () => {
        //alert('clicked');
        menuclick.classList.toggle('menu-clickedEvent');
      });
    } else {
      console.error("Element with class 'main-menu' not found");
    }
  });


