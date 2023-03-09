export interface IArtist {
  genres: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
  mainPainting: IPainting;
}

export interface IPainting {
  _id: string;
  name: string;
  yearOfCreation: number;
  image: {
    _id: string;
    src?: string;
    webp?: string;
    src2x?: string;
    webp2x?: string;
    original?: string;
  };
}
