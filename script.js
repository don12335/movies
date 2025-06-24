fetch("movies.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("movie-list");
    data.forEach(movie => {
      const div = document.createElement("div");
      div.className = "movie";
      div.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
        <h3>${movie.title}</h3>
        <p>${movie.desc}</p>
      `;
      list.appendChild(div);
    });
  });
