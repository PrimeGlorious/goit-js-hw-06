const categoriesEl = document.querySelector('#categories');
const categoriesItemsEl = categoriesEl.querySelectorAll('.item');

console.log('Number of categories:', categoriesItemsEl.length);

categoriesItemsEl.forEach(item => {
  const categoryTitleEl = item.querySelector('h2');
  const categoryListEl = item.querySelector('ul');

  console.log('Category:', categoryTitleEl.textContent);
  console.log('Elements:', categoryListEl.children.length);
})