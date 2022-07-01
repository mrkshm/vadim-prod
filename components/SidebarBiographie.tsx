import { DownloadSimple } from "phosphor-react";

interface BioSidebarProps {
  bioPic: string;
  citation: string;
  source: string;
}

function SidebarBiographie({ bioPic, citation, source }: BioSidebarProps) {
  return (
    <div>
      <div className="sidebar-title">Biographie</div>
      <div className="sidebar-photo">
        <img className="sidebarImage" alt="Vadim Sher avec vélo" src={bioPic} />
      </div>
      <div className="alting">
        <figure>
          <figcaption>
            <cite>{citation}</cite>
            <div className="source">{source}</div>
          </figcaption>
        </figure>
        <a
          href="https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/img/CV_Vadim_Sher.doc"
          className="cv"
        >
          <DownloadSimple />
          <div className="cv-text">Télécharger CV</div>
        </a>
      </div>
    </div>
  );
}

export default SidebarBiographie;
