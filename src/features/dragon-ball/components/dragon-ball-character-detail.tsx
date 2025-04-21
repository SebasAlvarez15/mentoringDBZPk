import { DragonBallCharacterDetail } from "../server/dto";

interface DragonBallCharacterDetailProps {
  character: DragonBallCharacterDetail;
}

export default function DragonBallCharacterDetailComponent({
  character,
}: DragonBallCharacterDetailProps) {
  return (
    <>
      <div className="min-h-screen bg-gray-600 p-8">
        <div className=" bg-gray-800 shadow-lg rounded-lg border border-orange-500 p-4 flex flex-col items-center w-full">
          <div className="text-center flex flex-col items-center h-38 w-full">
            <h1 className="text-3xl font-bold font-semibold text-center mb-6 text-orange-500">
              Detalle del guerrero Z
            </h1>
            <h2 className="text-3xl font-bold font-semibold text-center mb-6 text-orange-500">
              {character.name}
            </h2>
          </div>

          <div className="flex flex-row items-center gap-2">
            <img
              src={character.image}
              alt={character.image}
              className="w-120 h-120 object-contain mb-2"
            />
            <div className="flex flex-col items-center">
              <p className="text-lg font-semibold capitalize text-orange-500 text-center mt-20">
                Planeta Origen: {character.originPlanet.name}
              </p>
              <img
                src={character.originPlanet.image}
                alt={character.originPlanet.image}
                className="w-100 h-80 object-contain mb-2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
