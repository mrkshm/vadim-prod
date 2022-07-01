import create from "zustand";

export const useStore = create((set) => ({
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
    {
      id: 3,
      titre: "La Coupe écrasée",
      spectacle: "Le Degré 41",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Degre_41_la_coupe_ecrasee.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/degre_41.jpeg",
    },
    {
      id: 4,
      titre: "Le Manteau",
      spectacle: "Le Degré 41",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Degre_41_le_manteau.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/degre_41.jpeg",
    },
    {
      id: 5,
      titre: "Au kabak",
      spectacle: "Le Kaddish",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/kaddish_au_kabak.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/le_kaddish.jpg",
    },
    {
      id: 6,
      titre: "Chorale",
      spectacle: "Le Kaddish",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/kaddish_Chorale.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/le_kaddish.jpg",
    },
    {
      id: 7,
      titre: "Sabbat",
      spectacle: "Le Kaddish",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/kaddish_Sabbat.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/le_kaddish.jpg",
    },
    {
      id: 8,
      titre: "Mécanique de Mme Diss",
      spectacle: "Les Serpents",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Serpents_Mecanique_de_Mme_Diss.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/serpents.jpg",
    },
    {
      id: 9,
      titre: "Sortilège de France",
      spectacle: "Les Serpents",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Serpents_Sortilege_de_France.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/serpents.jpg",
    },
    {
      id: 10,
      titre: "La fuite",
      spectacle: "Varietà",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Varieta_La_fuite.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/varieta.jpg",
    },
    {
      id: 11,
      titre: "En revenant des noces",
      spectacle: "En revenant des noces",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/EnRevenantDesNoces.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Disque_EnRevenantDesNoces.png",
    },
    {
      id: 12,
      titre: "Beata Viscera",
      spectacle: "Worldes Blis",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/WoldesBlis_BeataViscera.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/WorldesBlis-Pochette-scaled.jpg",
    },
  ],
  fetch: async (hydrator: string) => {
    const response = await fetch(hydrator);
    const tempTracks: any = [];
    const res = await response.json();
    res.forEach((track: any) => {
      const tempTrack = {
        id: track.id,
        titre: track.acf.titre,
        spectacle: track.acf.spectacle,
        url: track.acf.url,
        imageUrl: track.acf.imageUrl,
      };
      tempTracks.push(tempTrack);
    });
    set({ tracks: tempTracks });
  },
  activeTrack: 0,
  setActive: (arg: number) => set(() => ({ activeTrack: arg })),
}));
