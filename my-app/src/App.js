import './App.css';
import { Helmet } from 'react-helmet';
import React, { useEffect, useState } from "react";

function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Oswald:wght@300&display=swap" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Helmet>
      <div className='content'>
        <div className='search'>

        </div>
        
        <div className='place'>

        </div>
        
        <div className='temp_detail'>
          <div className='left'>

          </div>
          <div className='right'>
            <div className='temp'>

            </div>
            <div className='extra'>
              <div className='wind'>

              </div>
              <div className='humidity'>

              </div>
              <div className='feels'>

              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default App;
