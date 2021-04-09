(function () {
  const populateLeaderboard = data => {
    const table = document.querySelector(".table");
    const tables = document.querySelectorAll("table");
    const loading = document.querySelector(".loading");

    data.sort(function (a, b) {
      return a.value - b.value;
    });
    data.reverse();

    console.log(data);

    table.innerHTML = "";

    data.forEach((player, index) => {
      if (index < 100) {
        let item = document.createElement("tr");
        item.classList.add("item");
        item.innerHTML = `<td>${index + 1}</td><td>${player.userName}</td><td>${player.value}</td>`;
        table.appendChild(item);
      }
    });

    Array.prototype.slice.call(tables).forEach(table => {
      table.classList.add("active");
    });
    loading.classList.remove("active");
  };

  async function fetchData() {
    while (true) {
      await new Promise(resolve => setTimeout(resolve, 10000));

      const response = await fetch("https://mcbcc.minecraftr.us:8079/api/scores/bedwarsstats/all");
      const data = await response.json();
      populateLeaderboard(data);
    }
  }

  fetchData();
})();
