import games from "../../../json/games.json";

const LoadIndividualGames = async ({ params }) => {
  const { id } = await params;

  const gameIdExists = games.games.find((g) => g.code === id);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "100vh",
        width: "100vw",
        backgroundColor: "#ffff",
      }}
    >
      <iframe
        src={
          gameIdExists
            ? `https://pyk5dwtzo.play.gamezop.com/g/${id}`
            : "https://pyk5dwtzo.play.gamezop.com/g/Hk2yhp7cCH"
        }
        width="100%"
        height="100%"
        style={{ border: "none" }}
        title="Game Site"
      />
    </div>
  );
};

export default LoadIndividualGames;
