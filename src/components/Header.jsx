
import { Link } from "react-router-dom";
import Nav from "./Nav";
import { Button } from "./ui/button";

const Header = () => {

  return (
    <header className="py-8 xl:py-12">
      <div className="mx-auto flex justify-between items-center">
        {/* logo */}
        <Link to="/">
          <h1 className="test-4xl font-semibold">
            Fengsheng<span className="text-blue-500">.</span>
          </h1>
        </Link>

        {/* desktop nav */}
        <div className="hidden xl:flex items-center gap-8"> 
          <Nav />
          <Link to="/contact">
            <Button>Contact</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          mobile nav
        </div>

      </div>
    </header>
  );
};

export default Header;
