import React from 'react'
import styles from './styles.module.css';
import TextField from '@material-ui/core/TextField';

export default function CountryDetail(props) {
    const countryDetail = props.list;
    return (
        <div className={styles.countryDetail} >
            <div className={styles.labelContainer}>
                <div className={styles.label}>
                    <span className={styles.regionName}>{props.list && countryDetail.region}/</span>
                    <span className={styles.countryName}>{props.list && countryDetail.name}</span>
                </div>
                <div className={styles.flagContainer}>
                    <img src={props.list && countryDetail.flag} className={styles.logo} />
                    <span className={styles.nameContainer}>
                        <div className={styles.countryLabel}>{props.list && countryDetail.name}<span>({props.list && countryDetail.alpha3Code})</span></div>
                        <div>{props.list && countryDetail.capital}</div>
                    </span>
                </div>
            </div>
            {props.list && <div className={styles.formContainer}>
                <TextField InputLabelProps={{ shrink: true,}} value={countryDetail ? countryDetail.demonym : ''}  className={styles.input} size='small' id="outlined-basic" label="Demonym" variant="outlined" />
                <TextField InputLabelProps={{ shrink: true,}} value={countryDetail ? countryDetail.callingCodes &&  countryDetail.callingCodes[0] : ''} className={styles.input} size='small' id="outlined-basic" label="Calling Code" variant="outlined" />
                <TextField InputLabelProps={{ shrink: true,}} value={countryDetail ? countryDetail.currencies &&  countryDetail.currencies[0] && countryDetail.currencies[0].code : ''} className={styles.input} size='small' id="outlined-basic" label="Currency" variant="outlined" />
                <TextField InputLabelProps={{ shrink: true,}} value={countryDetail ? countryDetail.population : ''} className={styles.input} size='small' id="outlined-basic" label="Population" variant="outlined" />
            </div>}
        </div>
    )
}
