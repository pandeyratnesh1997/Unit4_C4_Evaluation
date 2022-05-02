import React from "react";
import "./index.css";
import { Provider } from "react-redux" ;
import {store} from "./Redux/store"
import {BrowserRouter} from 'react-router-dom'
import App from "./App";
import { createRoot } from "react-dom/client";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <BrowserRouter>
         <App />
    </BrowserRouter>
        
    
       

);
