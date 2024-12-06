
import magikarp from "./assets/magikarp.png"
import gyrados from "./assets/gyrados.png"
import lanturn from "./assets/lanturn.png"

import magikarpSound from "./assets/sounds/Magikarp.mp3"
import gyradosSound from "./assets/sounds/Gyrados.mp3"
import lanturnSound from "./assets/sounds/Lanturn.mp3"

import './App.css';
import PokemonContainer from './components/pokemon-placeholder';
import { useState } from "react";

import LandingPage from "./components/landing page/landing_page"

function App() {
  const [isPlaying,setIsPlaying]= useState(false)
  const playSound=(soundUrl)=>{
    const audio = new Audio(soundUrl);
    if(!isPlaying){
       
      audio.play();
      setIsPlaying(true)
    }
    audio.onended=()=>{
      setIsPlaying(false)
    }
  }
  return (
    <>
      
      <LandingPage>
        <div className="magikarp">
          <PokemonContainer 
            pngImageUrl={magikarp} 
            qrCodeUrl={"http://localhost:8080/qrcode/magikarp"} 
            soundCallBack={()=>playSound(magikarpSound)} 
            qrPosition="magikarp"
            description="Magikarp: un pokémon qui ne peut ni attaquer ni se protèger contre les prédateurs (cliquez-moi)"
            />
        </div>
        <div className="gyrados">
        <PokemonContainer 
          pngImageUrl={gyrados} 
          qrCodeUrl={"http://localhost:8080/qrcode/gyrados"} 
          soundCallBack={()=>playSound(gyradosSound)} 
          qrPosition="gyrados"
          description={"La transformation de Magikarp en Gyarados reflète la capacité du corps humain à changer ou à s'adapter, mais aussi les dysfonctionnements potentiels qui peuvent survenir à la fois dans le corps humain et dans les environnements océaniques."}/>
        </div>

        <div className="lanturn">
        <PokemonContainer 
          pngImageUrl={lanturn} 
          qrCodeUrl={"http://localhost:8080/qrcode/lanturn"} 
          soundCallBack={()=>playSound(lanturnSound)} 
          qrPosition="lanturn"
          description={"Ce Pokémon, qui utilise sa bioluminescence pour naviguer, pourrait symboliser l'importance de la signalisation au sein du corps et la façon dont les écosystèmes océaniques reposent également sur des mécanismes de signalisation similaires."}/>  
        </div>
        
        <div 
          className="six" 
          style={{
          width:"200px",
          height:"200px",
          paddingBottom:"56%",
          }}>
            <iframe src="https://giphy.com/embed/W2iJwNAECynsNXmpuG"  style={{position:"absolute", border: "10px dashed black"}} frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/rainbow-six-siege-r6-bravo-W2iJwNAECynsNXmpuG">via GIPHY</a></p>
      </LandingPage>
    </>
  );
}

export default App;
