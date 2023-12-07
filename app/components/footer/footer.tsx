import Link from "next/link";
import Container from "../container";
import FooterList from "./footerlist";
import { MdFacebook } from "react-icons/md";
import {
  AiFillYoutube,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-orange-700 text-slate-100 text-sm mt-16">
      <Container>
        <div className="flex flex-col justify-between md:flex-row pt-16 pb-8">
          <FooterList>
            <h3 className="text-base font-bold mb-3">Shop categories</h3>
            <Link href="#">women</Link>
            <Link href="#">men</Link>
            <Link href="#">Kids</Link>
            <Link href="#">Home</Link>
          </FooterList>
          <FooterList>
            <h3 className="text-base font-bold mb-3">Customer service</h3>

            <Link href="#">Contact us</Link>
            <Link href="#">Return Policy</Link>
            <Link href="#">Shipping Policy</Link>
            <Link href="#">FAQs</Link>
          </FooterList>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-3">About Us</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              unde quis, perspiciatis fugit nulla laborum sequi ut assumenda
              iusto vero? Minus inventore ipsam ratione tempora laudantium hic
              repellendus ea harum.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-3">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
