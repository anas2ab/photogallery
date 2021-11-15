import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import PhotoCard from "./PhotoCard";

function App() {
    let photoArray = [];
    let seed = 0;
    for(let i = 0; i < 18; i++) {
        seed = Math.floor(Math.random() * 1083);
        let img_url = "https://picsum.photos/seed/" + seed + "/400/";
        photoArray.push(img_url);
    }
    return <div className="container">
        <Header/>
        <div className="row">
        <div className="col">
            {photoArray.map((url, index) => {
                return <PhotoCard key={index} id={index} img_url={url}/>;
            })
            }
        </div>
        </div>
        <Footer/>
    </div>
}

export default App