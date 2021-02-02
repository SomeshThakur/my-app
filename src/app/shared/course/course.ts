import { Author } from './author';

export interface Course {
  id: string;
  name: string;
  createdDate: string;
  length: string;
  description: string;
  isTopRated?: boolean;
  authors?: Author[];
}
