import React, {useState, useEffect} from 'react';
import Palette from './components/Palette';
import SingleColorPalette from './components/SingleColorPalette';
import seedColors from './seedColors'
import {generatePalette} from './components/colorHelper'
import {Route, Switch} from 'react-router-dom'
import PaletteList from './components/PaletteList';
import NewPaletteForm from './components/NewPaletteForm';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Page from './components/Page';
import sizes from './components/styles/sizes';


function App() {
  function findPalette(id) {
    return palettes.find(function(palette) {return palette.id === id})
  }
  const savedColors = JSON.parse(window.localStorage.getItem("palettes"))
  const [palettes, setPalettes] = useState(savedColors || seedColors)

  const savePalette = (newPalette) => {
    setPalettes([...palettes, newPalette])
  }

  const deletePalette = (id) => {
    setPalettes(palettes.filter((palette) => palette.id !== id))
  }

  const goBack = (id, boxes) => {
    const objIndex = palettes.findIndex((obj => obj.id === id));
    const palx = palettes
    palx[objIndex].colors = boxes
    setPalettes([...palx])
  }

  useEffect(() => {
    window.localStorage.setItem("palettes", JSON.stringify(palettes))
  }, [palettes])

  return (
    <div>
      <Route render={({location}) =>
        <TransitionGroup className="hello">
          <CSSTransition key={location.key} timeout={500} classNames="page">
            <Switch location={location}>
              <Route exact path="/" render={(routeProps) => <Page><PaletteList deletePalette={deletePalette} palettes={palettes} route={routeProps}/></Page> }/>
              <Route exact path="/new" render={() => <Page><NewPaletteForm palettes={palettes} palette={seedColors[0]} savePalette={savePalette}/></Page> }/>
              <Route exact path="/edit/:id" render={(routeProps) => <Page><NewPaletteForm palettes={palettes} edit goBack={goBack} palette={findPalette(routeProps.match.params.id)} savePalette={savePalette}/> </Page>}/>
              <Route exact path="/Palette/:id" render={(routeProps) => <Page><Palette route={routeProps} palette={generatePalette(findPalette(routeProps.match.params.id))}/></Page> }/>
              <Route exact path="/Palette/:id/:palette" render={(routeProps) => <Page><SingleColorPalette palette={generatePalette(findPalette(routeProps.match.params.id))} route={routeProps}/></Page> }/>
              <Route render={(routeProps) => <Page><PaletteList deletePalette={deletePalette} palettes={palettes} route={routeProps}/></Page> }/>
        </Switch>
          </CSSTransition>
        </TransitionGroup> 
      }/>
    </div>
    )
}

export default App;
