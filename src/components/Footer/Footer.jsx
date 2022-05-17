import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter bgColor='light'className='text-center text-lg-left'>
      <div className='text-center p-3' style={{ backgroundColor: 'rgb(0, 0, 0 )' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-light' href="#">
          GoCourses.com
        </a>
      </div>
    </MDBFooter>
  );
}