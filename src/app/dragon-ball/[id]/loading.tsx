export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-orange-500">
      <div className="w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_30px_rgba(255,165,0,0.8)]">
        🟠⭐
      </div>
      <p className="mt-4 text-2xl font-bold animate-bounce">Cargando Ki...</p>
    </div>
  );
}
