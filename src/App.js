import React, {useState,useEffect} from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Portofolio from './components/Portofolio'
import Loading from './components/Loading'

function App() {

  const [nav, navShow] = useState(false)
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setTimeout(() => {
        setMount(true)
    }, 2000);
  }, [mount]);

  const linkStyle = {
    textDecoration:"none",
    color:"#fff"
  }

  return (
      mount?
      <Router>
        <div className="App">
          <Navbar nav={nav} navShow={navShow} linkStyle={linkStyle}/>
          <Switch>
            <Route path="/" exact component={() => <Home linkStyle={linkStyle} />}/>
            <Route path="/about" exact component={About} />
            <Route path="/portofolio" exact component={Portofolio} />
          </Switch>        
        </div>
      </Router>
      :
      <Loading/>
  )
}

export default App;
