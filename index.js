const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = [];

function addItem(e) {
  e.preventDefault();
  console.log(e);
  const text = (this.querySelector('[name=item]')).value;
  console.log(this);
  const item = {
    text,
    done: false
  }
}

addItems.addEventListener('submit', addItem);
