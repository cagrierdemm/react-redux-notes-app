import React from 'react';

function Logo() {
  return (
    <div className='row mx-auto pe-2' style={{maxWidth: 570}}>
      <div className='col-12 col-md-11'>
        <img className='img-fluid mt-4 hoverOp' src='./logo.png' alt='Logo' />
      </div>
      <div className='col-12 col-md-1 mt-2'>
        <div className=''>
          <a href='https://github.com/cagrierdemm'>
            <img className='mt-md-5 me-3' src='./github.png' width={24} alt='github logo' />
          </a>
          <a href='https://www.linkedin.com/in/cagrierdemm/'>
            <img className='mt-md-2' src='./linkedin.png' width={24} alt='linkedin logo' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Logo;
