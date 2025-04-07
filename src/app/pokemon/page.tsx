"use client";
import { useState, useEffect } from "react";

export default function Pokemon() {
  const [pokemonList, setPokemonList] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://pokeapi.co/api/v2/pokemon");
      const data = await result.json();

      setPokemonList(data.results);

      const pokemonData = await Promise.all(
        data.results.map(async (pokemon) => {
          const response = await fetch(pokemon.url);
          const poke = await response.json();
          return {
            name: poke.name,
            image: poke.sprites.other.dream_world.front_default,
          };
        })
      );

      setPokemonList(pokemonData);
    };

    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold font-semibold text-center mb-6 text-gray-800">
        PokeDesk
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {pokemonList.map((pokemon, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-4 text-center transform transition hover:scale-105 flex flex-col items-center h-48 w-full"
          >
            <img
              src={pokemon.image}
              alt={pokemon.name}
              className="w-24 h-24 object-contain mb-2"
            />

            <p className="text-lg font-semibold capitalize text-gray-700 break-words text-center w-full mt-auto">
              {pokemon.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
