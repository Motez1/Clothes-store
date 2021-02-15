import React from "react";
import {Switch,Route} from "react-router-dom";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Home from "./Pages/Home";
import {Container} from "react-bootstrap"

export default function MainRouter()
{
    return (
        <Switch>
            <Route exact path="/">
                <Container>
                <Home />
                </Container>

            </Route>
            
            <Route exact path="/men">
                <Container>
                    <Men />
                </Container>
            </Route>

            <Route exact path="/women">
                <Container>
                    <Women />
                </Container>
            </Route>
        </Switch>
    );
}