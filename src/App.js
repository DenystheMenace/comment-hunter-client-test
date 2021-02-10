import React, { useState, useEffect } from 'react';
import Heatmap from './Heatmap.js'
import './App.css';

const dataUrl = `https://${process.env.REACT_APP_SERVER_NAME}.herokuapp.com/data`

function App() {

    const [dataset, setUserData] = useState({});

    const fetchJSON = async () => {
        const response = await fetch(dataUrl);
        const jsonData = await response.json();
        setUserData(jsonData);
    };

    useEffect(() => { fetchJSON(); }, []);

    return (
        <div className="App">
            <Heatmap width={ window.innerWidth } height={ 400 } data={ {children: dataset} } />
        </div>
    );
}

export default App;
