import { Contact } from "./types/ContactType";
import { InfoImageProps } from "./types/infoImage";
import { OfferCardType } from "./types/OfferCardType";

export const dataOffers: OfferCardType[] = [
  {
    image:
      "https://images.unsplash.com/photo-1526045478516-99145907023c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    title: "Makeup",
    icon: "icon-park-outline:lip-tattoo",
    description:
      "Makijaż, aby zdobił, a nie szpecił musi być dobrany nie tylko do typu urody i charakteru danej osoby, ale także do pory dnia i okoliczności." +
      "\n" +
      "W mojej ofercie znajdziecie makijaż dzienny, wieczorowy, ślubny, okolicznościowy, a także na specjalne okazje.",
    timeout: 300,
    slug: "makeup",
  },
  {
    image:
      "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    title: "Włosy",
    icon: "icon-park-outline:hair-brush",
    description: "Opis dostępny wkrótce...",
    timeout: 600,
    slug: "wlosy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1492618269284-653dce58fd6d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1476&q=80",
    title: "Oczy",
    icon: "icon-park-outline:eyebrow",
    description: "Opis dostępny wkrótce...",
    timeout: 900,
    slug: "oczy",
  },
  {
    image:
      "https://images.unsplash.com/photo-1583241800806-1ab2556fabd0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80",
    title: "Szkolenia",
    icon: "icon-park-outline:degree-hat",
    description: "Opis dostępny wkrótce...",
    timeout: 1200,
    slug: "szkolenia",
  },
];

export const contactPageData: Contact[] = [
  {
    id: 1,
    title: "Adres",
    details: "Burakowska 16, Warszawa",
  },
  { id: 2, title: "E-mail", details: "izakru.makeup@gmail.com" },
  { id: 3, title: "Telefon", details: "+48 600 264 624" },
];

export const infoImages: InfoImageProps[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1571332283201-99c82a8b3046?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80",
    alt: "eyeshadows",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1628153277991-7a185ac84511?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80",
    alt: "perfectmakeup",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1589710751893-f9a6770ad71b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    alt: "lashextension",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1619749623747-c256b910961a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    alt: "eyeshadowred",
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1585433405076-9626d637cc83?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    alt: "smokeyeyes",
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1589825853236-7a9e04b56687?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80",
    alt: "selfmakeup",
  },
];

