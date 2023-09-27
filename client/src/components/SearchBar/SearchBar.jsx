import React, { useState } from "react";
import styles from './SearchBar.module.css';
import { onSearchDriver } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";




export default function SearchBar(props) {


    const [search, setSearch] = useState('');

    const searchState = useSelector((state) => state.onSearch);
    const dispatch = useDispatch();

    const { onSearch } = props;

    const handleChange = async (e) => {
        setSearch(e.target.value);

        const driver = await onSearch(search);

        console.log({ message: search })
        if (search.length > 1) {
            return dispatch(onSearchDriver([...driver]));
        } else {
            return dispatch(onSearchDriver([]));
        }
    }


    return (
        <div className={styles.searchBar}>
            <section className={styles.search}>
                <span className={styles.buscar} onClick={() => console.log(searchState)}>Buscar</span>
                <input type="search" value={search} onChange={handleChange} placeholder="Busca un conductor..." className={styles.input} />
            </section>
        </div>
    )
}