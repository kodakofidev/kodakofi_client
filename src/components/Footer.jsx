import coffeIcon from "../assets/icon/coffeeColor.svg";
import facebook from "../assets/icon/facebook.svg";
import instagram from "../assets/icon/instagram.svg";
import twitter from "../assets/icon/twitter.svg";

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="px-4 lg:px-8 md:px-12 xl:px-24 py-16 flex flex-col md:flex-row gap-8">
        {/* Section 1 */}
        <div className="flex-1 flex flex-col lg:justify-between text-center items-center lg:items-start lg:text-left">
          <div className="flex items-center gap-3 mb-4">
            <img src={coffeIcon} alt="Coffee Icon" className="w-8 h-8" />
            <p className="text-lg font-bold">Coffee Shop</p>
          </div>
          <p className="text-gray-600 mb-4">
            Coffee Shop is a store that sells some good meals, and especially coffee. We provide high quality beans.
          </p>
          <p className="text-gray-500 text-sm">©2020 CoffeeStore</p>
        </div>
        {/* Section 2 */}
        <div className="flex-1 flex md:flex-row lg:justify-between justify-center gap-8">
          <div>
            <h2 className="text-lg font-bold mb-4">Product</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Our Product</li>
              <li>Pricing</li>
              <li>Locations</li>
              <li>Countries</li>
              <li>Blog</li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">Engage</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Partner</li>
              <li>FAQ</li>
              <li>About Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Service</li>
            </ul>
          </div>
        </div>
        {/* Section 3 */}
        <div className="flex-1 md:flex md:flex-col md:items-center">
          <h2 className="text-lg font-bold mb-4 text-center md:text-left">Social Media</h2>
          <div className="flex justify-center md:justify-start gap-4">
            <img src={facebook} alt="Facebook" className="w-8 h-8" />
            <img src={instagram} alt="Instagram" className="w-8 h-8" />
            <img src={twitter} alt="Twitter" className="w-8 h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
