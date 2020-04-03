import React, {Component} from 'react';
import axios from "axios";
import {Navbar, Nav} from 'react-bootstrap';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

const BASE_URL = process.env.REACT_APP_BASE_URL


// function NavBar() {
//     const isLoggedIn = localStorage.getItem('my-app-user') ? true : false;
//     return (
//       <React.Fragment>
//         {isLoggedIn ? (
//         <Navbar collapseOnSelect expand="lg" defaultactivekey="/">
//           <Navbar.Brand href="/">brewSpotter</Navbar.Brand>
//           <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//           <Navbar.Collapse id="responsive-navbar-nav">
//             <Nav className="mr-auto">
//               <Nav.Link href="/profile/user">Profile</Nav.Link>
//               {/* <Nav.Link href="/signup">Create an Account</Nav.Link>
//               <Nav.Link href="/login">Log In</Nav.Link> */}
//               <Nav.Link onClick={logOut} href="/login">Log Out</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Navbar>
//         ) : (
//         <Navbar collapseOnSelect expand="lg" defaultactivekey="/">
//             <Navbar.Brand href="/">brewSpotter</Navbar.Brand>
//             <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//             <Navbar.Collapse id="responsive-navbar-nav">
//               <Nav className="mr-auto">
//                 {/* <Nav.Link href="/profile/user">Profile</Nav.Link> */}
//                 <Nav.Link href="/signup">Create an Account</Nav.Link>
//                 <Nav.Link href="/login">Log In</Nav.Link>
//                 {/* <Nav.Link onClick={logOut} href="/login">Log Out</Nav.Link> */}
//               </Nav>
//             </Navbar.Collapse>
//         </Navbar>
//         )}
//       </React.Fragment>
//     )
//   }

//   function logOut() {
//     axios.post(`${BASE_URL}/rest-auth/logout/`)
//       .then(res => {
//           localStorage.removeItem('my-app-user');
//           console.log('one', res);
//           // this.context.history.push('/login');
//       })
//       .catch(error => {
//           console.log(error);
//       });
//   }

axios.defaults.headers.common["Authorization"] = localStorage.getItem('my-app-user') ? `Token ${JSON.parse(localStorage.getItem('my-app-user')).key}` : null;

class NavBar extends Component {

    logout = () => {
        axios.post('/api/v1/rest-auth/logout/');
        localStorage.removeItem('my-app-user');
    }

    render() {

    if (JSON.parse(localStorage.getItem('my-app-user'))) {
        return(
            <Navbar collapseOnSelect expand="lg" defaultactivekey="/">
                <Navbar.Brand href="/">brewSpotter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/profile/user">Profile</Nav.Link>
              {/* <Nav.Link href="/signup">Create an Account</Nav.Link>
               <Nav.Link href="/login">Log In</Nav.Link> */}
                        <Nav.Link onClick={this.logout} href="/login">Log Out</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
        } else {
            return(
                <Navbar collapseOnSelect expand="lg" defaultactivekey="/">
                <Navbar.Brand href="/">brewSpotter</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                 {/* <Nav.Link href="/profile/user">Profile</Nav.Link> */}
                            <Nav.Link href="/signup">Create an Account</Nav.Link>
                            <Nav.Link href="/login">Log In</Nav.Link>
                 {/* <Nav.Link onClick={logOut} href="/login">Log Out</Nav.Link> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            )
            }
}
}


  export default NavBar;