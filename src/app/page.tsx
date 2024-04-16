import Api from "./Api";


export default function Home() {


  return (
    <main className="h-screen w-full">
      <div className="relative">
        <div className="absolute top-0  h-screen w-full bg-zinc-900 opacity-50 flex justify-center items-center">
          <div className="flex flex-wrap gap-10 max-w-96">
            {
              Api()
            }
          </div>
        </div>
        <video src="/bg.mp4" loop autoPlay preload="auto" muted className="h-screen w-full"></video>
      </div>
    </main>
  );
}
