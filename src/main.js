function ShowModal() {
  const elem = document.getElementById('menuModal');
  elem.classList.add('is-open');

  AddListener('navList');
  AddListener('navLink');
}

function CloseModal() {
  const elem = document.getElementById('menuModal');
  elem.classList.remove('is-open');
}

function AddListener(id) {
  const item = document.getElementById(id);
  item.addEventListener('click', () => {
    CloseModal();
  });
}
