import { useState } from 'react'
import { AppContext } from './context/contextApi'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import Feed from './components/Feed'
import Header from './components/Header'
import SearchResult from './components/SearchResult'
import VideoDetails from './components/VideoDetails'

function App() {
    const [count, setCount] = useState(0)

    return (
        <AppContext>
            <BrowserRouter>
                <div className="flex flex-col h-full">
                    <Header />
                    <Routes>
                        <Route path='/' element={<Feed />} />
                        <Route path='/searchResult/:searchQuery' element={<SearchResult />} />
                        <Route path='/video/:id' element={<VideoDetails />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </AppContext>
    )
}

export default App
