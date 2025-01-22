import React, { useState } from "react";
import "./Catalog.css";
import SongCarousel from "../SongCarousel/SongCarousel";
import { rap, rock, country, pop } from "../../../assets/data/setList";
import countryIcon from "../../../assets/images/country.svg";
import rapIcon from "../../../assets/images/rap.svg";
import popIcon from "../../../assets/images/pop.svg";
import rockIcon from "../../../assets/images/rock.svg";
import MainButton from "../MainButton/MainButton";

const Catalog = () => {
    const [song, setSong] = useState(null);

    return (
        <div className="catalog-container">
            <div className="catalog-header">
                <div className="catalog-selection"> 
                    <img src={song ? song.image : null} />
                </div>
                <MainButton text="Ready"/>
            </div>
            <div className="catalog-body">
                <SongCarousel icon={countryIcon} songs={country} title={"Country"} setSong={setSong}/>
                <SongCarousel icon={popIcon} songs={pop} title={"Pop"} setSong={setSong}/>
                <SongCarousel icon={rapIcon} songs={rap} title={"Rap"} setSong={setSong}/>
                <SongCarousel icon={rockIcon} songs={rock} title={"Rock"} setSong={setSong}/>
            </div>
        </div>
    );
};

export default Catalog;