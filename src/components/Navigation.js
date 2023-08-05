import Navbar from 'react-bootstrap/Navbar';

import logo from '../VERBmi_logo.png';

const Navigation = ({ account }) => {
  return (
    <Navbar className='my-3'>
      <img
        alt="VERBmi logo"
        src={logo}
        width="70"
        height="50"
        className="d-inline-block align-top mx-3"
      />
      <Navbar.Brand href="#">VERBmi</Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          {account}
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
