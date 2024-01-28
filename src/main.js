const mobileMenu = {
  showBtn: document.querySelector('[data-modal-show]'),
  closeBtn: document.querySelector('[data-modal-close]'),
  menu: document.getElementById('menuModal'),
};

mobileMenu.showBtn.addEventListener('click', ShowModal);

mobileMenu.closeBtn.addEventListener('click', CloseModal);

function ShowModal() {
  mobileMenu.menu.classList.add('is-open');

  AddListener('navList');
  AddListener('navLink');
}

function CloseModal() {
  mobileMenu.menu.classList.remove('is-open');

  RemoveListener('navList');
  RemoveListener('navLink');
}

function AddListener(id) {
  const item = document.getElementById(id);
  item.addEventListener('click', CloseModal);
}

function RemoveListener(id) {
  const item = document.getElementById(id);
  item.removeEventListener('click', CloseModal);
}
