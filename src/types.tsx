export interface Props {
  children: JSX.Element;
}

export interface NavProps {
  currentPage: string;
}

export interface Track {
  id: number;
  titre: string;
  spectacle: string;
  url: string;
  imageUrl: string;
}
