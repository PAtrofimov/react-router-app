import React from 'react'
import { Switch, Route, Link} from 'react-router-dom'
import Home from './components/Home'
import Epic from './components/Epic'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

const App = () => (
    <Router> 
    <div>
      <header className="header">
        <div className="top-menu">
                   <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/epic">Эпопея</Link>
          </li>
          <li>
            <Link to="/about">О приложении</Link>
          </li>
        </ul>

        </div>
      </header>

      <hr />
      <div className="content">
       
        <Route exact path="/" component={Home} />
        <Route path="/epic" component={Epic} />
        <Route path="/about" render={() => <p>Сделано на Кузнице #2</p>} />
        
      </div>
    </div>
    </Router> 
)

export default App
