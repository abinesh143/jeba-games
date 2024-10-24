"use client";

import { useState, useEffect } from "react";
import game from "../../json/games.json";
import Link from "next/link";
import { initFlowbite } from "flowbite";

const GameSection = (props) => {
  const [mainGame, setMainGame] = useState([]);

  const mostPlayedGames = () => {
    const filteredGames = game.games.filter((g) => {
      return g.gamePlays > 1000000;
    });
    const maxPlayers = filteredGames.sort((a, b) => {
      return b.gamePlays - a.gamePlays;
    });
    setMainGame(maxPlayers);
  };

  useEffect(() => {
    mostPlayedGames();
    initFlowbite();
  }, []);
  return (
    <div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a
              href="https://pyk5dwtzo.play.gamezop.com/g/rkWfy2pXq0r"
              target="_blank"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <img
                src={"https://static.gamezop.com/rkWfy2pXq0r/wall.png"}
                className="d-block w-full"
                alt="Friut Chop"
              />
            </a>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a
              href="https://pyk5dwtzo.play.gamezop.com/g/rkWfy2pXq0r"
              target="_blank"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <img
                src={"https://static.gamezop.com/rkWfy2pXq0r/wall.png"}
                className="d-block w-full"
                alt="Friut Chop"
              />
            </a>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a
              href="https://pyk5dwtzo.play.gamezop.com/g/ryN9EGAQa"
              target="_blank"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <img
                src="https://static.gamezop.com/ryN9EGAQa/wall.png"
                className="d-block w-full"
                alt="Slap Fest"
              />
            </a>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a
              href="https://pyk5dwtzo.play.gamezop.com/g/rkwCYBZuV"
              target="_blank"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <img
                src="https://static.gamezop.com/rkwCYBZuV/wall.png"
                className="d-block w-full"
                alt="Furious Speed"
              />
            </a>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a
              href="https://pyk5dwtzo.play.gamezop.com/g/SkhljT2fdgb"
              target="_blank"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <img
                src="https://static.gamezop.com/SkhljT2fdgb/wall.png"
                className="d-block w-full"
                alt="Ludo Game"
              />
            </a>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a
              href="https://pyk5dwtzo.play.gamezop.com/g/r1zG1h6m90H"
              target="_blank"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <img
                src="https://static.gamezop.com/r1zG1h6m90H/wall.png"
                className="d-block w-full"
                alt="Candy Fiesta"
              />
            </a>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a
              href="https://pyk5dwtzo.play.gamezop.com/g/BkXW1a__"
              target="_blank"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <img
                src="https://static.gamezop.com/BkXW1a__/wall.png"
                className="d-block w-full"
                alt="Jimpo Jump"
              />
            </a>
          </div>
          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <a
              href="https://pyk5dwtzo.play.gamezop.com/g/B1jZWUoXUIe"
              target="_blank"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            >
              <img
                src="https://static.gamezop.com/B1jZWUoXUIe/wall.png"
                className="d-block w-full"
                alt="Zombie Shooter"
              />
            </a>
          </div>
        </div>

        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 6"
            data-carousel-slide-to="5"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 7"
            data-carousel-slide-to="6"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 8"
            data-carousel-slide-to="7"
          ></button>
        </div>

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className={`flex justify-center px-2 py-3`}>
        <img src="./images/coin.png" className="p-2" alt="coin"></img>
        <div className="font-bold text-lg">Most Played</div>
      </div>
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4 mb-2 px-1">
          {mainGame.length ? (
            mainGame.map((g, i) => {
              return (
                <div key={i} className="flex justify-center p-1">
                  <div
                    className={`shadow-xl mt-3 rounded-lg bg-white flex flex-col`}
                  >
                    <div className="pt-2 font-bolder text-center rounded-b">
                      {g.name.en}
                    </div>
                    <Link href={g.url}>
                      <img
                        src={g.assets.cover}
                        className="p-2 rounded-xl"
                        alt={g.name.en}
                      ></img>
                    </Link>
                    <div className="flex flex-col justify-center pt-2">
                      <a
                        className={` zoom-in-out-box mx-3 text-white p-1 rounded-lg text-center btn-dark-moon`}
                        href={g.url}
                        target="blank"
                      >
                        Start Game
                      </a>

                      <div className="flex justify-center my-2">
                        <img
                          src="./images/online.png"
                          width={15}
                          height={15}
                          alt="online"
                        ></img>
                        <div className="text-green-500 font-bold px-1">
                          {Math.floor(g.gamePlays / 10000)} Users
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div
              style={{ height: "calc(100vh - 408px)" }}
              className="flex justify-center items-center w-full col-span-4"
            ></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameSection;
