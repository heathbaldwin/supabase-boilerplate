import { createClient } from "https://cdn.skypack.dev/@supabase/supabase-js@2.8.0"

const supabaseUrl = 'https://fysqhacvpzkquaqnsabq.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ5c3FoYWN2cHprcXVhcW5zYWJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc1MzY2MTMsImV4cCI6MTk5MzExMjYxM30.2bhtVZU7Zv55bLCKsxFDNK0QQ9bk5LqtDEXEq2iZS-o'
const supabase = createClient(supabaseUrl, supabaseKey)

async function getBooks() {
let { data: books, error } = await supabase
  .from('books')
  .select('*')

for (let book of books) {
  let bookList = document.getElementById('books');
  bookList.innerHTML += `<tr><td>${book.title}</td><td>${book.author}</td></tr>${book.description}</td></tr>`;
  }
}
getBooks();
