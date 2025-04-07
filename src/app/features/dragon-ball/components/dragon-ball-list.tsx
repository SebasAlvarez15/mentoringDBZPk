import { Character } from "../server/dto";
import Link from "next/link";

interface DragonBallListProps {
  characters: Character[];
}
export default function DragonBallList({ characters }: DragonBallListProps) {
  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <h1 className="text-3xl font-bold font-semibold text-center mb-6 text-orange-500">
        Personajes Dragon ball
      </h1>

      <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {characters.map((characters: Character) => (
          <Link key={characters.id} href={`/dragon-ball/${characters.id}`}>
            <div className="bg-gray-800 shadow-lg rounded-xl p-4 text-center transform transition hover:scale-105 flex flex-col items-center h-100 w-full">
              <img
                src={characters.image}
                alt={characters.name}
                className="w-60 h-60 object-contain mb-2"
              />
              <p className="text-lg font-semibold capitalize text-orange-500 break-words text-center w-full mt-auto">
                {characters.name} <br />
                🔥 {characters.ki}
              </p>
            </div>
          </Link>
        ))}
      </ul>
    </div>
  );
}
