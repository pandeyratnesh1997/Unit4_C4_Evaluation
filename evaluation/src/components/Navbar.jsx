
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#8000ff", padding: 20 , display : "flex",color : "#FFFFFF", justifyContent : "space-around"}}>
      {/* 
                all the links in navbar,
      IMPORTANT: Link should match as mentioned in problem statement 
      */}
      <div>
        <Link to="/home" >Home</Link>
      </div>
      <div>
        <Link to="/about" >About</Link>
      </div>
      <div>
        <Link to="/products" >Products</Link>
      </div>
      <div>
        <Link to="/men" >Men</Link>
      </div>
      <div>
        <Link to="/women" >Womens</Link>
      </div>
      <div>
        <Link to="/kids" >Kids</Link>
      </div>
      <div>
        <Link to="/home-decor" >Home Decor</Link>
      </div>
      
    </nav>
  );
};
