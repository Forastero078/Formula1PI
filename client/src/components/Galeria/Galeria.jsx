import React, { useEffect, useState } from "react";
import styles from './Galeria.module.css';
import { useSelector } from "react-redux";
import NavButtonsTop from "../NavButtonsTop/NavButtonsTop";
import Paginador from "../Paginador/Paginador";
import Footer from "../Footer/Footer";




export default function Galeria() {

    const [ drivers, setDrivers ] = useState([]);

    const [ currentPage, setCurrentPage ] = useState(1);

    const globalState = useSelector((state) => state);


    useEffect(() => {


        setDrivers(globalState.allDrivers)

    }, [setDrivers, globalState]);

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
            />

            <Paginador driversDisplay={getCurrentPageItems()}/>

            <Footer/>

        </div>
    )
}