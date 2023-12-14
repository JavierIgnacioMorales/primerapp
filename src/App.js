import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen los pobladores de Tesei:</h1>  
        <Testimonio 
          nombre='Emma Rodriguez'
          pais='Argentina'
          imagen='emma'
          cargo='Fiambrera'
          empresa='Quesitos del Oeste'
          testimonio='Estoy muy contenta de cortar fiembre que se usara en todas las pizzas de <strong>Tesei</strong> y alrededores.'
        />
        <Testimonio 
          nombre='Sarah Gomez'
          pais='Argentina'
          imagen='sarah'
          cargo='Vendedora de Ropa'
          empresa='Como me queda..!!'
          testimonio='Esta lleno de gente con mal gusto y me siento muy orgullosa de poder ayudarlos en sus oufit.'
        />
        <Testimonio 
          nombre='Chin Chu Lin'
          pais='China'
          imagen='shawn'
          cargo='Dueño de Supermercado'
          empresa='Supermercado Luna'
          testimonio='這些人沒有把手，我不知道如何向員工支付工資，現在我整晚都拔掉冰箱的插頭。.'
        />
      </div>
    </div>
  );
}

export default App;
