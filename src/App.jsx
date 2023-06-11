import React from 'react'
import Tag from './components/Tag'
import Random from './components/Random'

const App = () => {
    return (
        <div>
            <h1>Random Gif Application</h1>
            <div className='main-container'>
                <Random/>
                <Tag/>
            </div>
        </div>
    )
}

export default App
