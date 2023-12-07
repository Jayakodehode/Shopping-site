import Link from "next/link";
import Container from "../container";
import { Mrs_Sheppards } from "next/font/google";
const mrs_sheppards = Mrs_Sheppards({ subsets: ["latin"], weight: ["400"] });

const Navbar = () => {
  return (
    <div className="sticky top-0 w-full bg-slate-200 z-30 ">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex item-center justify-between">
            <Link
              href="/"
              className={`${mrs_sheppards.className} text-orange-700 text-4xl`}
            >
              Shopping-Site
            </Link>
            <div>Searchbar</div>
            <div className="flex item-center justify-between gap-5">
              <div>Login/Register</div>
              <div>Cartitems</div>
              <div>Wishlist</div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Navbar;
