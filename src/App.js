import './App.css';
import Video from "./pages/Video"

function App() {
  return (
    <div className="App">
      <div className='app__videos'>
        <Video 
          likes = {111}
          messages = {222}
          shares = {333}
          name = "Paulo"
          descripition = "Brecker o goleiro"
          music = "música épica"
          url = "https://firebasestorage.googleapis.com/v0/b/jornada-b5e9d.appspot.com/o/brecker2.mp4?alt=media&token=9aa979e9-0907-4093-abd5-a71efe4fc946"
        />

        <Video 
          likes = {444}
          messages = {555}
          shares = {666}
          name = "Pedro"
          descripition = "Bird olhando para a camera"
          music = "Clap your hands"
          url = "https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/bird.mp4"
        />

      </div>
    </div>
  );
}

export default App;
