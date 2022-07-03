// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Track } from "../../src/types";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const tempTracks: Track[] = [];
  const result = await fetch(
    "http://musards.fr/wp/vadimsher/wp-json/wp/v2/posts?categories=10&per_page=30"
  );

  if (!result.ok) {
    return res.status(500).json({ message: "error, sorry" });
  }
  const json = await result.json();

  json.forEach((track: any) => {
    const tempTrack = {
      id: track.id,
      titre: track.acf.titre,
      spectacle: track.acf.spectacle,
      url: track.acf.url,
      imageUrl: track.acf.imageUrl,
    };
    tempTracks.push(tempTrack);
  });

  return res.status(200).json(tempTracks);
}
