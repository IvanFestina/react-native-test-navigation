import {NavigationContainer} from "@react-navigation/native";
import React from "react";
import {Main} from "./src/Main";


export default function App() {
    return (
        <React.Fragment>
            <NavigationContainer>
                <Main/>
            </NavigationContainer>
        </React.Fragment>
    );
}
