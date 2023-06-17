import Nav from '../components/Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
       <>          
          <footer className="footer">
            <Nav />
            <ul>
               <li><FontAwesomeIcon icon={faTwitterSquare} /></li>
               <li><FontAwesomeIcon icon={faLinkedin} /></li>
               <li><FontAwesomeIcon icon={faEnvelope} /></li>
            </ul>
            <h3>&copy;2023</h3>
          </footer>
       </> 
    )
}

export default Footer