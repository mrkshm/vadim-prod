import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { List } from "phosphor-react";
import Modal from "react-modal";
import { useState, useMemo } from "react";

const mainNav = [
  { name: "Musique", url: "/concerts" },
  { name: "Agenda", url: "/agenda" },
  { name: "Biographie", url: "/biographie" },
  { name: "Contact", url: "/contact" },
];

// Modal starts here

const customStyles = {
  content: {
    top: "0",
    right: "0",
  },
};
Modal.setAppElement("body");

// Modal ends here

interface NavProps {
  currentPage: string;
}

function Navbar({ currentPage }: NavProps) {
  // modal
  const [modalIsOpen, setIsOpen] = useState(false);

  const bg = useMemo(() => {
    if (currentPage === "/") {
      return "bg-midnight";
    } else {
      return "bg-dark";
    }
  }, [currentPage]);

  function openModal() {
    setIsOpen(true);
    console.log("hello");
  }

  function closeModal() {
    setIsOpen(false);
  }
  //   modal
  return (
    <div className={`navbar ${bg}`}>
      {currentPage === "/" ? (
        <div className="logo">Vadim Sher</div>
      ) : (
        <div className="logo">
          <Link href="/">Vadim Sher</Link>
        </div>
      )}
      <div className="mobileNav">
        <div onClick={openModal}>
          <List />
        </div>
        {/* <MobileMenu /> */}
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          className="modal-dialog"
        >
          <MobileMenu currentPage={currentPage} close={closeModal} />
        </Modal>
      </div>
      <ul className="navlist">
        {mainNav.map((navItem) =>
          navItem.url === currentPage ? (
            <li key={navItem.name} className="inactive">
              {navItem.name}
            </li>
          ) : (
            <li key={navItem.name}>
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

export default Navbar;
