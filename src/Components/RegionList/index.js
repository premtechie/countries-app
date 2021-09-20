import React,{useState} from 'react'
import styles from './styles.module.css';
import axios from 'axios';
import classNames from 'classnames';
import CountryList from '../CountryList';

const regionList = ['Americas','Asia',"Europe","Africa","Oceania"];

function RegionList(props) {
    const [selectedCountryList,setSelectedCountry] = useState([]);
    const [selectedCountry,setCountry] = useState({})

    function fetchData(key){
        axios.get(`https://restcountries.eu/rest/v2/region/${key}`)
        .then((res)=>{
            console.log(res.data)
            setSelectedCountry(res.data)
            let color;
            if(key === "Americas"){
                color = "rgba(20, 110, 255, 1)"
            }
            else if(key === "Asia"){
                color = "rgba(122, 20, 255, 1)";
            }
            else if(key === "Europe"){
                color = "rgba(0, 158, 32, 1)";
            }
            else if(key === "Africa"){
                color = "rgba(251, 20, 255, 1)";
            }
            else if(key === "Oceania"){
                color = "rgba(23, 25, 54, 1)";
            }

            setCountry({
                country:key,
                color
            })
        })
    }


    return (
        <div className={styles.mainContainer}>
            <div className={styles.regionContainer}>
                {/* <div>Select Region</div> */}
                {
                    regionList && regionList.map((list,i)=>(
                        <div 
                            key={i} 
                            onClick={()=>fetchData(list)}
                            className={classNames(styles.listItem,
                                {[styles.america] : list === "Americas"},
                                {[styles.asia] : list === "Asia"},
                                {[styles.europe] : list === "Europe"},
                                {[styles.africa] : list === "Africa"},
                                {[styles.oceania] : list === "Oceania"}
                                )}
                        >
                            {list}
                        </div>
                    ))
                }
            </div>
            <CountryList selectedCountry={selectedCountry} countryList = {selectedCountryList} />
        </div>
    )
}




export default RegionList;