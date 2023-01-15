
import './App.css';

import HomePage from './components/HomePage/HomePage';
import Container from "@mui/material/Container";
import { Route, Routes } from 'react-router-dom';
import ArticlePage from './components/ArticlePage/ArticlePage';



function App() {
  return (
    <div style={{backgroundColor:" #f4efef", height:'100%'}}>
   <Container style={{padding:'50px 75px 63px 75px'}} maxWidth="false">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path=':id' element={<ArticlePage/> } />
      </Routes>
        
       </Container>
    </div>
  );
}

export default App;
