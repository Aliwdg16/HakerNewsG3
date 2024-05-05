import { useEffect, useState } from "react";
import axios from "axios";
import { SpinnerRoundOutlined } from "spinners-react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ListElement } from "./Components/List_Element";
import { Header } from "./Components/Header";
import Loginbutton from "./Components/Loginbutton";
import Footer1 from "./Components/Footer1";
import { Input, initTWE } from "tw-elements";
import "tw-elements-react/dist/css/tw-elements-react.min.css";
initTWE({ Input }, { allowReinits: true });

function App() {
  const [news, setNews] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    setLoading(true);

    const Hackernews = async () => {
      try {
        const res = await axios.get(
          `https://hn.algolia.com/api/v1/search?query=${search}` // das ist search
        );
        setNews(res.data.hits);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    Hackernews();
  }, [search]);

  const handelsearch1 = (newValue) => {
    setSearch(newValue);
  };

  const handleLogin = () => {
    setLogin(true);
  };

  const handelLogout =()=>{

    setLogin(false);
  };

  return (
    
    <Router>
      <Header onLogin={handleLogin} onSearchChange={handelsearch1} />

      <Routes>
        <Route path="login" element={<Loginbutton onLogout={handelLogout}/>} />
        <Route
          path="/"
          element={
            Loading ? (
              <div className="mb-4 inline-block max-w-sm">
                <SpinnerRoundOutlined
                  size={69}
                  thickness={100}
                  speed={35}
                  color="#36ad47"
                />
              </div>
            ) : (
              <div>
                <ListElement news={news} />
              </div>
            )
          }
        />
      </Routes>
      <Footer1 />
    </Router>
     );
}

export default App;
