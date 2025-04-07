import { ApiResponse } from "@/app/features/dragon-ball/server/dto";
import DragonBallList from "@/app/features/dragon-ball/components/dragon-ball-list";
export default async function DragonBallListPage() {
  const result: Response = await fetch(
    "https://dragonball-api.com/api/characters"
  );

  const data: ApiResponse = await result.json();

  return <DragonBallList characters={data.items} />;
}
