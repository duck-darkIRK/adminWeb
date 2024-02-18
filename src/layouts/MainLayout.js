import React from 'react';
import { AppContent, AppHeader } from '../components'
import '../assets/styles/App.css';



class MainLayout extends React.Component {
    render(){
      return (
        <div>
            <div className='wrapper d-flex flex-column min-vh-100 bg-light'>
              <AppHeader />
              <div className="body flex-grow-1 px-3">
                <AppContent />
              </div>
            </div>
        </div>
      );
    }
  }
  
  export default MainLayout;