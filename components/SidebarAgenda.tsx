interface SbarAgProps {
  img1: string;
  img2: string;
}

function SidebarAgenda({ img1, img2 }: SbarAgProps) {
  return (
    <div className="sidebar-agenda-inner">
      <div className="sidebar-title">Agenda</div>
      <div className="sidebar-photo">
        <img className="sidebarImage" alt="Vadim Sher au piano" src={img1} />
        <img className="sidebarImage" alt="Vadim Sher" src={img2} />
      </div>
    </div>
  );
}

export default SidebarAgenda;
