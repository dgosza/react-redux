import React from 'react'
import { Provider } from 'react-redux'

import Sidebar from './components/Sidebar'
import Video from './components/Video'

import store from './store'

class App extends React.Component {

    render() {
        return (
            <div className="App">
                <Provider store={store}>
                    <Video />
                    <Sidebar />
                </Provider>
            </div>
        )
    }
}

export default App;
