// import logo from './logo.svg';

import './App.css';
import { ColorModeContext, useMode } from './theme';
import { CssBaseline, ThemeProvider } from '@mui/material';

import { Routes, Route } from 'react-router-dom';

import TopBar from './components/navigations/TopBar';
import Sidebar from './components/navigations/Sidebar';

import Dashboard from './components/pages/dashboard/dashboard';
// import faq from './components/pages/faq/faq';
import Team from './components/pages/team/team';
import Contacts from './components/pages/contacts/contacts';
import Invoices from './components/pages/invoices/invoices';
import Form from './components/pages/form/form';
import Calendar from './components/pages/calendar/calendar';
import FAQ from './components/pages/faq/faq';



function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode} >
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar/>
          <main className="content">
            <TopBar />

           <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/form" element={<Form />} />
              <Route path="/calendar" element={< Calendar />} />
              <Route path="/faq" element={< FAQ />} />
          
            </Routes>


          </main>
        </div>
      </ThemeProvider>
     
    </ColorModeContext.Provider>
   
  );
}

export default App;
