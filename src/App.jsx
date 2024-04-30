import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import axios, { isCancel, AxiosError } from "axios";
import { SpinnerCircular } from "spinners-react";
import { ListelEment } from "./Components/ListelEment";
function App() {
  const [news, setNews] = useState([]);
  const [Loading, setLoading] = useState(false);
  useEffect(() => {
    
    setLoading(true);

    // setTimeout(() => {
    //   setLoading(false);
    // }, 1000);

    const Hackernews = async () => {
      try {
         const res = await axios.get("https://hn.algolia.com/api/v1/search?query");
        // const res = await axios.get("http://hn.algolia.com/api/v1/items/");
        console.log(res);
        setNews(res.data[0]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    Hackernews();
  }, []);

  return (
    <>
      <div>
        {
          Loading ? (
            <SpinnerCircular
              size={50}
              thickness={100}
              speed={100}
              color="#36ad47"
              secondaryColor="rgba(0, 0, 0, 0.44)"
            />
          ) : ( 
            // <ListelEment title />
            <div><h1 className="text-3xl font-bold">Name:{news.map((ev)=>{})} </h1></div>
          )

          //  <div>
          //     <h1 className="text-3xl font-bold underline">
          //     Hello world!
          //     </h1>
          // </div>
        }
      </div>
    </>
  );
}

export default App;
