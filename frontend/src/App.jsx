import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Error from './routes/Error'
import Home from './routes/Home'
import Cliente from './routes/Cliente'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
      // O BROWSER ROUTER HABILITA A NAVEGAÇÃO POR ROTAS NA APLICAÇÃO
      <BrowserRouter>
      <Nav/>
      {/* GERENCIA A EXIBIÇÃO DOS COMPONENTES COM BASE NA URL */}
      <Routes>
        {/* ROTA PARA LIDAR COM URLS NÃO ENCONTRADAS */}
        <Route path="*" element = {<Error/>}/>
        {/* ROTA PARA PÁGINA HOME */}
        <Route path="/" element = {<Home/>}/>
        {/* ROTA PARA PÁGINA CLIENTE */}
        <Route path="/cliente" element = {<Cliente/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
  )
}

export default App