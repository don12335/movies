let movies = JSON.parse(localStorage.getItem("movies") || "[]");

function saveMovies() {
  localStorage.setItem("movies", JSON.stringify(movies));
}

function renderMovies() {
  const list = document.getElementById("movie-list");
  list.innerHTML = "";
  movies.forEach((movie, index) => {
    const div = document.createElement("div");
    div.className = "movie";
    div.innerHTML = `
      <img src="${movie.poster}" alt="海報">
      <h3>${movie.title}</h3>
      <p>${movie.desc}</p>
      <button onclick="deleteMovie(${index})">刪除</button>
    `;
    list.appendChild(div);
  });
}

function addMovie() {
  const title = document.getElementById("title").value.trim();
  const poster = document.getElementById("poster").value.trim();
  const desc = document.getElementById("desc").value.trim();
  if (!title || !poster) return alert("請輸入電影名稱與圖片");

  movies.push({ title, poster, desc });
  saveMovies();
  renderMovies();

  document.getElementById("title").value = "";
  document.getElementById("poster").value = "";
  document.getElementById("desc").value = "";
}

function deleteMovie(index) {
  movies.splice(index, 1);
  saveMovies();
  renderMovies();
}

renderMovies();
