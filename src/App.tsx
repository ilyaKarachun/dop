import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from "./components/Button";

type getType = {
    userId: number,
    id: number,
    title: string
    body: string
}

function App() {

    const [get, setGet] = useState<Array<getType>>([])

    console.log(get)
    const GetRequestHandler = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => setGet(json))
    }

    const CleanPage = () => {
        setGet([])
    }
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/albums')
            .then(response => response.json())
            .then(json => setGet(json))
    }, [])

    return (
        <div className="App">
            <Button nickName={"CleanPage"} callBack={GetRequestHandler}></Button>
            <p></p>
            {get.map(g => {
                return (
                    <ul>
                        <li>
                            <span>{g.id} </span>
                        </li>
                        <li>
                            <span>{g.title} </span>
                        </li>
                        <li>
                            <span>{g.body} </span>
                        </li>
                    </ul>
                )
            })}
        </div>
    );
}

export default App;
