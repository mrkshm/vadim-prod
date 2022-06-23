import { createStore, action } from "easy-peasy";

export const store = createStore({
  activeTracks: [
    {
      titre: "Ouverture",
      spectacle: "Don Juan",
      url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Don_Juan_Ouverture.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/don_juan.jpg",
    },
    {
      titre: "La Coupe écrasée",
      spectacle: "Le Degré 41",
      url: "musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Degre_41_la_coupe_ecrasee.mp3",
      imageUrl:
        "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/degre_41.jpeg",
    },
  ],
  activeTrack: {
    titre: "Ouverture",
    spectacle: "Don Juan",
    url: "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/Don_Juan_Ouverture.mp3",
    imageUrl:
      "https://musards.fr/wp/vadimsher/wp-content/uploads/sites/2/2022/06/don_juan.jpg",
  },
  changeActiveTracks: action((state: any, payload: any) => {
    state.activeTracks = payload;
  }),
  changeActiveTrack: action((state: any, payload: any) => {
    state.activeTrack = payload;
  }),
});
