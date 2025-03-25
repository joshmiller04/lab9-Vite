import React from "react";

const games = [
  { id: 1, home: "Tigers", away: "Yankees", isNationalTV: true },
  { id: 2, home: "Dodgers", away: "Giants", isNationalTV: false },
  { id: 3, home: "Cubs", away: "Cardinals", isNationalTV: true },
];

function Logo() {
  return (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Major_League_Baseball_logo.svg/640px-Major_League_Baseball_logo.svg.png"
      alt="MLB Logo"
      style={{ width: "200px", marginBottom: "20px" }}
    />
  );
}

function Header() {
  return (
    <header>
      <h1 style={{ color: "LightBlue" }}>MLB Game Tracker</h1>
      <p style={{ color: "red" }}>Here is a quick look at some upcoming matchups this week.</p>
    </header>
  );
}

function GameList({ games }) {
  return (
    <div>
      <h2 style={{ color: "Blue" }}>Upcoming Games</h2>
      <ul style={{ color: "red" }}>
        {games.map((game) => (
          <li key={game.id}>
            {game.away} @ {game.home}{" "}
            {game.isNationalTV && <span> National TV</span>}
          </li>
        ))}
      </ul>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p style={{ color: "LightBlue" }}>
        Built by Josh with React to keep track of the games I care about.
      </p>
    </footer>
  );
}

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        paddingLeft: "30rem", 
      }}
    >
      <Logo />
      <Header />
      <GameList games={games} />
      <Footer />
    </div>
  );
}

export default App;
