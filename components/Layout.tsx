import { Props } from "../src/types";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import PlayerBar2 from "./PlayerBar2";
import { useMemo } from "react";

function Layout({ children }: Props) {
  const router = useRouter();
  const currentPage = router.pathname;
  const outerClassColor = useMemo(() => {
    if (currentPage === "/") {
      return "outer-container bg-midnight";
    } else {
      return "outer-container bg-dark";
    }
  }, [currentPage]);

  return (
    <div className={outerClassColor}>
      <div className="inner-container">
        <Navbar currentPage={currentPage} />
        <div>
          <main>{children}</main>
        </div>
        <PlayerBar2 />
      </div>
    </div>
  );
}

export default Layout;
