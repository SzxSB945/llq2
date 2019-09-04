import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducer/reducer'

import Header from './components/header'
import Echart from './components/echart'

let store = createStore(reducer)

class App extends React.Component{
    render(){
        return(
            <div style={{height:'100%',width:'100%',position:'relative'}}>
                <Header />
                <Echart />
            </div>
        )
    }
}

class ReduxApp extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        )
    }
}

ReactDOM.render(<ReduxApp />,document.getElementById('app'))