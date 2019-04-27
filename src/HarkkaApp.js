import React, { Component } from "react";
import MenuMUI from "./navigation/MenuMUI";
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import "./css/tyyli.css";
import {grey, white, yellow} from '@material-ui/core/colors';
import Paper from "@material-ui/core/Paper";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import KokolistaMUI from "./components/KokolistaMUI";
import KokolomakeMUI from "./components/KokolomakeMUI";
import SanontalomakeMUI from "./components/SanontalomakeMUI";
import HaeMuistot from "./components/HaeMuistot";
import Kotisivu from "./components/Kotisivu";
import HaeKuvat from "./components/HaeKuvat";
import KuvalomakeMUI from "./components/KuvalomakeMUI";
import imgUrl from "./max.jpg";

const styles = {
    paperContainer: {
        backgroundImage: "url(" + imgUrl + ")",
        backgroundSize: "cover",
        height: "770px"
    }
}
/*
const san = [
    {
        ika: "4 vuotta",
        paivamaara: "21.2.2019",
        tilanne: "Menossa nukkumaan",
        sanonta: "Syökö siat sieniä? Kärpäset syö ainakin kärpässieniä."
    },
    {
        ika: "4 vuotta",
        paivamaara: "27.1.2019",
        tilanne: "Kantoi siskoa sylissä",
        sanonta: "Nyt sisko on kyllä muuttunut aika painavaksi, kun se on 2-vuotias. Nyt se on kokonainen."
    },
    {
        ika: "4 vuotta",
        paivamaara: "24.3.2019",
        tilanne: "Kova hikka",
        sanonta: "Meinasi lentää sydän ulos, sitten ei olisi ollut enää rakkautta"
    }
];
*/
const theme = createMuiTheme(
{
  palette: {
      primary: { main: grey[900], contrastText: white },
      secondary: { main: grey[900], contrastText: white },
      text: {primary: grey[900], secondary: grey[900]},
      action: {hover: yellow[500]},
  },
  typography: {
    //fontFamily: ['Shadows Into Light', 'cursive'],
      //fontFamily: ['Fredericka the Great', 'cursive'],
      fontFamily: ['Major Mono Display', 'monospace'],
  },
}
);

class HarkkaApp extends Component {
    render() {
        return (
            <BrowserRouter>
            <MuiThemeProvider theme={theme}>
                <div>
                    <Paper style={styles.paperContainer}>
                {
                    
                }
                    <MenuMUI/>
                    <Switch>
                        <Route exact path="/" component={Kotisivu} />
                        <Route exact path="/etusivu" component={Kotisivu} />
                        <Route path="/lisaasanonta"             component={SanontalomakeMUI} />
                        <Route path="/listaasanonnat" component={HaeMuistot} />
                        <Route path="/listaakuvat" component={HaeKuvat} />
                        <Route path="/lisaakuva" component={KuvalomakeMUI} />
                        <Route path="/lisaakoko" component={KokolomakeMUI} />
                        <Route path="/kokotaulukko" component={KokolistaMUI} />
                    </Switch>
                        </Paper>
                </div>
                </MuiThemeProvider>
            </BrowserRouter>
        );
    }
}
export default HarkkaApp;