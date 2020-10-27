import React from 'react';
import { Link } from 'react-router-dom';
import PageNotFound from '../assets/images/PageNotFound.jpeg';
class NotFoundPage extends React.Component{
    render(){
        return <div>
            <img style={{paddingLeft:'40%'}} src={PageNotFound}  alt=""/>
            <p style={{textAlign:"center"}}>
              <Link style={{textDecoration:'none',paddingLeft:'27%'}} to="/">Go to Home </Link>
            </p>
          </div>;
    }
}
export default NotFoundPage;
