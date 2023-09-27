import React, { useEffect, useState } from "react";
import styles from './Galeria.module.css';
import { useSelector } from "react-redux";
import NavButtonsTop from "../NavButtonsTop/NavButtonsTop";
import Paginador from "../Paginador/Paginador";
import Footer from "../Footer/Footer";
import axios from "axios";




export default function Galeria() {

    const [ drivers, setDrivers ] = useState([]);
    const [ searchDriver, setSearchDriver ] = useState([]);

    const [ currentPage, setCurrentPage ] = useState(1);

    const globalState = useSelector((state) => state.allDrivers);
    const searchState = useSelector((state) => state.onSearch);

    let driversDisplay;

    useEffect(() => {


        setDrivers(globalState);
        setSearchDriver(searchState);

        driversDisplay = handleCut();

       

    }, [setDrivers, globalState, searchState]);

    const cardsPorPagina = 15;
    const totalElements = drivers.length;
    const totalPages = Math.ceil(totalElements / cardsPorPagina);


    const getCurrentPageItems = () => {

        const startIndex = (currentPage - 1) * cardsPorPagina;
        const endIndex = startIndex + cardsPorPagina;
        return drivers.slice(startIndex, endIndex);

    }

    function handleNextPage() {
        if (currentPage < totalPages) {
            setCurrentPage((prevPage) => prevPage + 1);
        }
    };

    function handlePrevPage() {
        if (currentPage > 1) {
            setCurrentPage((prevPage) => prevPage - 1);
        }
    };

    function handleGoToPage(pageNumber) {
        if (pageNumber >= 1 && pageNumber <= totalPages) {
            setCurrentPage(pageNumber);
        } else {
            alert(`¡Ups! no hay pagina ${pageNumber}` )
        }
    };

    async function handleSearch(search) {
      
        try {
            const response = await axios.get(`http://localhost:3001/drivers/name?name=${search}`);
            const { data } = response;

            
            return data;
        } catch (error) {
            console.log({error: error.message})
        }
    };

    function handleCut() {
        if(searchDriver.length !== 0){
        console.log(searchDriver);
            return (searchState).slice(0, 15);
        
        } else {
            return console.log('no hay data');
        }
    };

    const handleDisplay = () => {

      if(searchDriver.length > 0){
        return handleCut();
      } else {
        return getCurrentPageItems();
      }       

    }



    return (
        <div className={styles.drivers}>
            <header className={styles.header}>
                <br />
                <h1 className={styles.h1}>Galeria de conductores.</h1>
                <br />
                <h4 className={styles.h4}>Recorre lo mas de 500 conductores historicos y de la actualidad</h4>
            </header>

            <hr style={{ width: '90%' }} />
            <br />
            <NavButtonsTop
             back={handlePrevPage}
             next={handleNextPage}
             currentPage={currentPage}
             handleGoToPage={handleGoToPage}
             onSearch={handleSearch}
            />

            <Paginador driversDisplay={getCurrentPageItems()} searchDisplay={handleCut()}/>

            <Footer/>

        </div>
    )
}