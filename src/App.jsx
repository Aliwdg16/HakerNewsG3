import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios, { isCancel, AxiosError } from "axios";
import { SpinnerCircular, SpinnerRoundOutlined } from "spinners-react";
import { ListElement } from "./Components/List_Element";
import { Header } from "./Components/Header";
import { Input, initTWE } from "tw-elements";
import Footer1 from "./Components/Footer1";

import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Login";
initTWE({ Input }, { allowReinits: true });
function App() {
  const [news, setNews] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

// const [loginA,setLogin]=useState()
// const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 5000);

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

  const handelChange = (e) => {
    setSearch(e.target.value);
  };

  
  // const handleLogin = () => {
  //     navigate('welcome');
  //     setLogin();
  // };


  return (
    <>
            
      {/* <div className="container items-center"> */}
      <div>
        <div>
          {/* so kann ich eine function in eine andere component rufen */}
          <Header onsearchchange={handelChange} />
        </div>


      {/* <div >
        <Routes>
          <Route path="login" element={<Login />} />
        </Routes>
      </div> */}



        {Loading ? (
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
      </div>



      <Footer1 />
    </>
  );
}

export default App;
