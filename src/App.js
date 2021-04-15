import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Rotas from './Routes';
import { debounce } from 'lodash';

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
    <div className="App" id="topo">
      <Router>
        <Header />
        <section className="container conteudo">
          <Switch >
            <Rotas />
            <Route path="*" >
              <h1>404 Pagina não encontrada</h1>
            </Route>
          </Switch>
        </section>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
