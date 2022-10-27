let myLibrary = [];
var count = -1;

class Book {
  constructor(author, title, pages){
    this.author = author;
    this.title = title;
    this.pages = pages;
  }
  read(){
    this.readed == false ? this.readed = true : this.readed = false;
  }
}

// Adicionar novo livro 
function addBookToLibrary(book) {
  myLibrary[count] = book;
}

let addBookButton = document.getElementById('addBook');
addBookButton.addEventListener('click', () => {
  author = document.getElementById('author').value;
  title = document.getElementById('title').value;
  pages = document.getElementById('pages').value;
  book = new Book(author,title,pages)
  count++; 
  addBookToLibrary(book);
  alert("Livro adicionado com sucesso!");
  document.getElementById('author').value = "";
  document.getElementById('title').value = "";
  document.getElementById('pages').value = "";
  displayBooks();
}); 

let newBookButton = document.getElementById('newBook');
newBookButton.addEventListener('click', () => {
  const form = document.getElementById('form');
  form.classList.remove('hidden');
}); 

// Fechar formulario de inserção de novo livro
let closeFormButton = document.getElementById('closeForm');
closeFormButton.addEventListener('click', () => {
  const form = document.getElementById('form');
  form.classList.add('hidden');
}); 

// Incluir livro adicionado na pagina 
function displayBooks(){
  const currentDiv = document.getElementById("showBooks");
  currentDiv.insertAdjacentHTML('afterbegin',
    `<div data-index=${count} class="book" >
    <p class="content"><strong>Título:</strong> ${myLibrary[count].title}</p>
    <p class="content"><strong>Autor:</strong> ${myLibrary[count].author}</p>
    <p class="content"><strong>Páginas:</strong> ${myLibrary[count].pages}</p>
    <p class="content"><strong>Lido </strong> 
      <label class="switch">
        <input type="checkbox" class="readToggle" 
        onclick="myLibrary[this.parentElement.parentElement.parentElement.dataset.index].read(); updateInfo(this);">
        <span class="slider round"></span>
      </label>
    </p>


    <input type="button" value="Deletar" class="deleteBook" onclick="removeBook(this)" />
  </div>`
  );
}

// Atualizar informações em tela
function updateInfo(e) {
  if (e.classList.contains('readToggle')) {
    e.classList.remove('readToggle');
    e.classList.add('unreadToggle');
  } else {
    e.classList.remove('unreadToggle');
    e.classList.add('readToggle');
  }
  
}

// Remover livro
function removeBook(e){
  delete myLibrary[e.parentElement.dataset.index];
  e.parentElement.remove();
}