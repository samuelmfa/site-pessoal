import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import { debounce } from 'lodash';
import NotFound404 from './pages/404';
import Home from './pages/Home';
import Formacao from './pages/Formacao';
import Cursos from './pages/Cursos';
import Experiencia from './pages/Experiencia';
import Contato from './pages/Contato';
import { PaginaContent } from './PaginasContext';

function App() {

  (function () {
    let $target = document.getElementsByClassName("anime"),
      $animationClass = 'anime-start',
      $offset = window.innerHeight * 3 / 4;

    function animeScroll() {
      let documentoTop = window.document.scrollingElement.scrollTop + $offset;
      if ($target.length > 0) {
        for (const target of $target) {
          let distancia = target.offsetTop;
          if (documentoTop >= distancia) {
            target.classList.add($animationClass);
          } else {
            target.classList.remove($animationClass);
          }
        }
      }
    }
    animeScroll();
    document.addEventListener('scroll', debounce(() => {
      animeScroll();
    }, 200));

  })()

  return (
    <PaginaContent>
      <div className="App" id="topo">
        <Router>
          <Header />
          <section className="container conteudo">
            <Switch >
              <Route exact path="/" >
                <Home />
              </Route>
              <Route exact path="/formacao" >
                <Formacao />
              </Route>
              <Route exact path="/cursos" >
                <Cursos />
              </Route>
              <Route exact path="/experiencia" >
                <Experiencia />
              </Route>
              <Route exact path="/contato" >
                <Contato />
              </Route>
              <Route path="*" >
                <NotFound404 />
              </Route>
            </Switch>
          </section>
        </Router>
        <Footer />
      </div>
    </PaginaContent>

  );
}

export default App;
