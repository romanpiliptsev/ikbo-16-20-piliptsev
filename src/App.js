import './reset.css';
import './App.css';
import {Route, Routes} from 'react-router-dom'
import MainPage from "./components/MainPage";
import Profile from "./components/Profile";
import Chat from "./components/Chat";
import Header from "./components/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/profile" element={<Profile name={"Roman"} age={20}/>} />
                <Route path="/chat" element={<Chat />}/>
            </Routes>
        </div>
    );
}

export default App;
