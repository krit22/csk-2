import './App.css'
import { HeroSection } from './components/HeroSection';
import { TopBar } from './components/TopBar';
import page4Image from './assets/image.png';

function App() {

  //test

  return (
    <>
      <TopBar />
      <div className="h-screen overflow-y-scroll snap-y snap-mandatory">

        <section className="h-screen w-screen flex items-center justify-center snap-start">
          <HeroSection />
        </section>


        <section className="h-screen w-screen flex items-center justify-center snap-start bg-blue-400">
          <h1 className="text-5xl font-bold text-white">Rick</h1>
        </section>


        <section className="h-screen w-screen flex items-center justify-center snap-start bg-green-400">
          <h1 className="text-5xl font-bold text-white">Roll</h1>
        </section>

        <section className="h-screen w-screen flex items-center justify-center snap-start bg-yellow-400">
          <img src={page4Image} alt="Page 4" className="max-h-[80%] max-w-[80%] object-contain" />
        </section>

      </div>
    </>
  );

}

export default App
