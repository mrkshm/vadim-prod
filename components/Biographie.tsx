interface BioProps {
  bioText: string;
}

function Biographie({ bioText }: BioProps) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: bioText,
      }}
    ></div>
  );
}

export default Biographie;
