import create from "zustand";
import { Track } from "../types";

interface TrackState {
  playing: boolean;
  setPlaying: () => void;
  setStop: () => void;
  togglePlaying: (val: boolean) => void;
  tracks: Track[];
  fetch: (hydrator: string) => void;
  activeTrack: number;
  setActive: (arg: number) => void;
  populateStore: (newTracks: Track[]) => void;
}

export const useStore = create<TrackState>((set) => ({
  playing: false,
  setPlaying: () => set((state) => ({ playing: true })),
  setStop: () => set((state) => ({ playing: false })),
  togglePlaying: (val: boolean) => set(() => ({ playing: val })),
  tracks: [
    {
      id: 1,
      titre: "Ouverture",
      spectacle: "Don Juan",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Don_Juan_Ouverture.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/don_juan.jpg",
    },
    {
      id: 2,
      titre: "Pot pourri",
      spectacle: "Don Juan",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Don_Juan_Pot_pourri.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/don_juan.jpg",
    },
  ],
  fetch: async (hydrator: string) => {
    const response = await fetch(hydrator);
    const res = await response.json();

    // res.forEach((track: any) => {
    //   const tempTrack = {
    //     id: track.id,
    //     titre: track.acf.titre,
    //     spectacle: track.acf.spectacle,
    //     url: track.acf.url,
    //     imageUrl: track.acf.imageUrl,
    //   };
    //   tempTracks.push(tempTrack);
    // });
    // set({ tracks: res });
  },
  activeTrack: 0,
  setActive: (arg: number) => set(() => ({ activeTrack: arg })),
  populateStore: (newTracks: Track[]) => set(() => ({ tracks: newTracks })),
}));
