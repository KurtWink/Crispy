import React, {useState} from 'react';

function App() {
  return(
    <Navbar>
      <NavItem icon="X" />
      <NavItem icon="X" />
      <NavItem icon="X" />

      <NavItem icon=">">
        <DropdownMenu></DropdownMenu>
      </NavItem> 

    </Navbar>
  );
}

function DropdownMenu() {

  function DropdownItem(props){
    return (
      <a href="#" className="menu-item">

        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className="icon-right">{props.rightIcon}</span>

      </a>
    )
  }

  return (
    <div className="dropdown">
      <DropdownItem>My Profile</DropdownItem>
      <DropdownItem
        leftIcon={"X"}
        rightIcon={"V"}>
      </DropdownItem>


    </div>
  );
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}
export default App;
