import React from "react";
import Classes from './Footer.css';



const footer = (props) => {

      
    return (
        <footer className={Classes.footer} style = {props.style}>
            <div className={Classes.container}>
                <div className={Classes.row}>
                    <div className={Classes.footer_col}>
                        <h4>Company</h4>
                            <ul className={Classes.unordered}>
                                <li><a href="#">About us</a></li>
                                <li><a href="#">Our Services</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li><a href="#">Affiliate Program</a></li>
                            </ul>
                    </div>
                
                
                    <div className={Classes.footer_col}>
                        <h4>Follow us</h4>
                            <ul className={Classes.unordered}>
                            <li><a className='ico' href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a> <a className='ico' href="https://www.twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i></a></li>
                            <li><a className='ico' href="https://www.instagram.com/" target="_blank"><i className="fab fa-instagram"/></a> <a className='ico' href="https://pk.linkedin.com/" target="_blank"><i className="fab fa-linkedin-in ico"/></a></li>
                                
                                
                                
                                
                            </ul>
                    </div>
                    
                </div>

            </div>
        </footer>
    )

  

}
    


export default footer;
