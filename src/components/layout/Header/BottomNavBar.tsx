import { Home, ShoppingBag, Info, Phone } from "lucide-react";
import { NavLink } from "react-router";

const navItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: ShoppingBag, label: "Products", href: "/products" },
  { icon: Info, label: "About", href: "/about" },
  { icon: Phone, label: "Contact", href: "/contact" },
];

export function BottomNavBar() {
  return (
    <nav className="fixed md:hidden block bottom-0 left-0 right-0 bg-white border-t  shadow-lg">
      <ul className="flex justify-around items-center h-14">
        {navItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.href} // Use `to` instead of `href` for NavLink
         
              className={({ isActive }) =>
                `flex flex-col items-center text-foreground ${
                  isActive
                    ? "text-primary  font-bold"
                    : "text-foreground hoverText"
                }`
              }
             
            >
              <item.icon className="w-5 h-5" />
              <span className="text-xs mt-1">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
