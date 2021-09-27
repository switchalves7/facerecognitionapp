import react from 'react';

const Navigation = () => {
   return (
       <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
           <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>
           {/* <button className='link pointer pa3'>Sign Out</button> */}
       </nav>
   )
}



export default Navigation;