import HOVS from '../pages/hovs.jsx'
import Services from '../pages/services.jsx'
import VerifyHouse from './dashboard/verifyhouse.jsx'

function Home() {
  return (
    <div>
      <HOVS/>
      <VerifyHouse/>
      <Services/>
    </div>
   
  )
}

export default Home