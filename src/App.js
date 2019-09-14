import React from 'react';
import './App.css';
import {Page, Header, MedalsTable, AddCountry} from './components';

function App() {
  return (
    <Page >
      <Header />
      <AddCountry />
      <MedalsTable />
    </Page>
  );
}

export default App;
