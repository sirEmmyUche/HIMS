import '../styles/footer.css'

function Footer(){
    return(
        <footer>
            <div className='first-div'>
                <div className='footer-logo'><img src="/images/HIMS-logo.jfif" alt='logo'/></div>
                <div className='footer-about-us' >
                <h2>About Us</h2>
                    <p>
                        At HIMS, we specialize in real estate services, 
                        helping clients verify property ownership and facilitate property sales.
                        Our expert team is dedicated to ensuring transparency and facilitating smooth transactions. 
                        Trust us to simplify your real estate journey with reliable and efficient solutions.
                    </p>
                </div>
            </div>
            <div className='second-div'>
                <h2>Exclusive</h2>
                <ul>
                    <li>Project</li>
                    <li>Service</li>
                    <li>Blog</li>
                </ul>
            </div>
        
            <div className='last-div'>
                <h2>Contact Us</h2>
                <ul>
                    <li>WhatsApp</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer