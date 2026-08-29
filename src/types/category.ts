import { Room } from './product';

export interface RoomCategory {
  id: Room;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  itemCount: number;
  tips: {
    title: string;
    description: string;
  }[];
}

export interface StyleCollection {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  image: string;
  characteristics: string[];
}
