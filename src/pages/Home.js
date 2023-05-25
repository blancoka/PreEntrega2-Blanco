import React from 'react';
import NavBar from '../components/NavBar';
import ItemListContainer from '../components/ItemListContainer';
import Head from '../components/Header' ;

function Home() {
    return (
    <div> 
        <NavBar />
        <Head/>
        <ItemListContainer />
    </div>
    );
}

export default Home;