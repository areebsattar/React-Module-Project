
import React from 'react';
import Bookings from '@/components/Bookings/Bookings.jsx';
import './App.scss';
import Footer from '../Footer/Footer';
import AppHeader from '../AppHeader/AppHeader';

const App = () => (
  <div className="app">
    <header className="app__header">
      <AppHeader />
      <h1 className="app__heading">CYF Hotel</h1>
    </header>
    <Bookings />
    <Footer
      details={[
        '123 Fake Street, London, E1 4UD',
        'hello@fakehotel.com',
        '0123 456789',
      ]}
      className="footer"
    />
  </div>
);

export default App;
