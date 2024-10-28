import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { CreditCard } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0 backdrop-blur-3xl shadow-sm">
   
      <div className="max-w-[94%] mx-auto p-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold tracking-tight">
          AnanyaSoftware
        </Link>

        <div className="hidden md:block">
     
          <NavMenu />
          </div>
       

        <button className="bg-black text-white py-3 px-4 rounded-md flex gap-2 items-center">
          Payment <CreditCard />
        </button>

      </div>
    </nav>
  );
};

export default Navbar;
