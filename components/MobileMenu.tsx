import { X } from "phosphor-react";
import Link from "next/link";

interface MenuProps {
  close: Function;
  currentPage: string;
}

const mainNav = [
  { name: "Concerts", url: "/concerts" },
  { name: "Ciné-concerts", url: "/cine-concerts" },
  { name: "Théâtre", url: "/theatre" },
  { name: "Cinéma", url: "/cinema" },
  { name: "Discographie", url: "/discographie" },
  { name: "Agenda", url: "/agenda" },
  { name: "Biographie", url: "/biographie" },
  { name: "Contact", url: "/contact" },
];

function MobileMenu({ close, currentPage }: MenuProps) {
  return (
    <div className="mobileMenu">
      <div onClick={() => close()} className="close-button">
        <X />
      </div>
      <ul className="navlist-mobile">
        {mainNav.map((navItem) =>
          navItem.url === currentPage ? (
            <li className="inactive">{navItem.name}</li>
          ) : (
            <li onClick={() => close()}>
              <Link href={navItem.url}>
                <a>{navItem.name}</a>
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}

export default MobileMenu;
