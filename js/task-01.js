const allLiEl = document.querySelectorAll('.item');
console.log(`Numbers of categories: ${allLiEl.length}`);

allLiEl.forEach(category => {
  const categoryName = category.querySelector('h2').textContent;
  const itemsCount = category.querySelectorAll('ul li').length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${itemsCount}`);
});
