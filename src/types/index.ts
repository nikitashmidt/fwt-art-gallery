export interface IArtist extends IPainting {
  genres: string[];
  _id: string;
  name: string;
  description: string;
  yearsOfLife: string;
}

export interface IPainting {
  mainPainting: {
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
  };
}
