import Link from "next/link";

interface CtSbarProps {
  ctPic: string;
}

function SidebarContact({ ctPic }: CtSbarProps) {
  return (
    <div className="sidebar-flex">
      <div className="sidebar-titleflex">
        <div className="sidebar-title">Contact</div>
        <div className="sidebar-title-mobile-right">
          <Link href="/mentions">
            <a>
              mentions
              <br />
              légales
            </a>
          </Link>
        </div>
      </div>

      <div className="sidebar-photo">
        <img className="sidebarImage" alt="Vadim Sher avec vélo" src={ctPic} />
      </div>
      <div className="mentions">
        <Link href="/mentions">
          <a>Mentions légales</a>
        </Link>
      </div>
    </div>
  );
}

export default SidebarContact;
