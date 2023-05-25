 function fetchBooks() {
  fetch('https://anapioficeandfire.com/api/books')
  .then((response) => {
  return response.json();
  })
  .then((books) => {
  renderBooks(books);
  });
  }
  function renderBooks(books) {
    books.forEach(book => {
    renderBook(book)
    });
    }
    function renderBook(book) {
      const unorderedList = document.getElementById("list");
      const li = document.createElement("li");
      li.textContent = book.title
      li.addEventListener("click", () => showBookCard(book))
      unorderedList.appendChild(li)
      }
      