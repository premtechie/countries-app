import classNames from 'classnames';
import React, { useState,useEffect } from 'react'
import CountryDetail from './CountryDetail';
import styles from './styles.module.css'

export default function CountryList(props) {
    const countryList = props.countryList ;
    const [selected,setSelected] = useState(0);
    const [selectedList,setSelectedList] = useState([])
    const backgroundColor = props.selectedCountry;

    function printData(i,data){
        setSelected(i)
        console.log(data)
        setSelectedList(data)
    }
    useEffect(()=>{
       countryList && setSelectedList(countryList[selected])
    })


    return (
        <div className={styles.countryContainer}>
            <div className={styles.countryList} >
                {
                    countryList && countryList.map((list,i)=>(
                        <div 
                        style={{backgroundColor:backgroundColor.color}} 
                        key={list.numericCode} 
                        className={classNames(styles.item,
                            {[styles.selected]:i === selected}
                            )} 
                        onClick={()=>printData(i,list)}>
                            {list.name}
                        </div>
                    ))
                }
            </div>
            { selectedList && <CountryDetail list={selectedList} />}
        </div>
    )
}
