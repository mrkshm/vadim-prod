import { useRouter } from "next/router";
import { useMemo } from "react";
import Link from "next/link";

const musicNav = [
  {
    name: "Concerts",
    url: "/concerts",
    citation:
      "Les mots ont parfois besoin de la musique mais la musique n’a besoin de rien.",
    source: "Edward Grieg",
  },
  {
    name: "Ciné-concerts",
    url: "/cine-concerts",
    citation:
      "Le côté superficiel des plus éhontés s’est ancré dans l’accompagnement musical au cinéma. Le seul bon chemin à prendre serait celui de l’écriture de la musique originale. Son but principal – respecter le tempo et le rythme du film et renforcer l’impression sur le spectateur.",
    source: "D. Chostakovitch",
  },
  {
    name: "Théâtre",
    url: "/theatre",
    citation:
      "Dans la composition musicale au théâtre, le croisement d’un texte provoque le plaisir d’un virage, l’idée d’un metteur en scène pousse vers l’inexploré, la proposition d’acteur indique un chemin jusque-là invisible. L’harmonie tant recherchée ne se crée jamais seule, elle est toujours le fruit du rapport aux autres.",
    source: " ",
  },
  {
    name: "Cinéma",
    url: "/cinema",
    citation:
      "Ce n’est pas écrire de la musique qui est difficile, c’est de barrer les notes en trop.",
    source: "Johannes Brahms",
  },
  {
    name: "Discographie",
    url: "/discographie",
    citation:
      "A ceux qui m’écoutent, je ne cache rien, dans ma musique je raconte tout.",
    source: " ",
  },
];

function SidebarMusique() {
  const router = useRouter();
  //   const [pageTitle, setPageTitle] = useState();
  const currentPage = router.pathname;

  const pageTitle = useMemo(() => {
    switch (currentPage) {
      case "/concerts":
        return "Concerts";
        break;
      case "/cine-concerts":
        return "Ciné-concerts";
        break;
      case "/theatre":
        return "Théâtre";
        break;
      case "/cinema":
        return "Cinéma";
        break;
      case "/discographie":
        return "Discographie";
        break;
      default:
        break;
    }
  }, [currentPage]);

  const citation = useMemo(() => {
    switch (currentPage) {
      case "/concerts":
        return musicNav[0].citation;
        break;
      case "/cine-concerts":
        return musicNav[1].citation;
        break;
      case "/theatre":
        return musicNav[2].citation;
        break;
      case "/cinema":
        return musicNav[3].citation;
        break;
      case "/discographie":
        return musicNav[4].citation;
        break;
      default:
        break;
    }
  }, [currentPage]);

  const source = useMemo(() => {
    switch (currentPage) {
      case "/concerts":
        return musicNav[0].source;
        break;
      case "/cine-concerts":
        return musicNav[1].source;
        break;
      case "/theatre":
        return musicNav[2].source;
        break;
      case "/cinema":
        return musicNav[3].source;
        break;
      case "/discographie":
        return musicNav[4].source;
        break;
      default:
        break;
    }
  }, [currentPage]);

  return (
    <div className="sidebar-music-inner">
      <div className="sidebar-title">{pageTitle}</div>
      <div className="music-sbar-menu">
        <ul className="music-menu-ul">
          {/* Concerts */}
          {currentPage === "/concerts" ? (
            <li className="inactive">Concerts</li>
          ) : (
            <li>
              <Link href="/concerts">
                <a>Concerts</a>
              </Link>
            </li>
          )}
          {/* Ciné-concerts */}
          {currentPage === "/cine-concerts" ? (
            <li className="inactive">Ciné-concerts</li>
          ) : (
            <li>
              <Link href="/cine-concerts">
                <a>Ciné-concerts</a>
              </Link>
            </li>
          )}
          {/* Theatre */}
          {currentPage === "/theatre" ? (
            <li className="inactive">Théâtre</li>
          ) : (
            <li>
              <Link href="/theatre">
                <a>Théâtre</a>
              </Link>
            </li>
          )}
          {/* Cinema */}
          {currentPage === "/cinema" ? (
            <li className="inactive">Cinéma</li>
          ) : (
            <li>
              <Link href="/cinema">
                <a>Cinéma</a>
              </Link>
            </li>
          )}
          {/* Discographie */}
          {currentPage === "/discographie" ? (
            <li className="inactive">Discographie</li>
          ) : (
            <li>
              <Link href="/discographie">
                <a>Discographie</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
      <div className="musique-citation">
        <figure>
          <figcaption>
            <cite>{citation}</cite>
            <div className="source">{source}</div>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default SidebarMusique;
