import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <main className ='flex justify-between items-center bg-gray-300'>
          <section id='left'>
            <h1 className='text-4xl font-bold'>Logo</h1>
          </section>
          
          <section id='right' className='flex gap-3'>
            <Link to='/'>
              <div>
                Home
              </div>
            </Link>
            
            <Link to='/Register'>
              <div>
                Register
              </div>
            </Link>

            <Link to='/Login'>
              <div>
              login
              </div>     
            </Link>


          </section>
      </main>
    )
}