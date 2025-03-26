// Import your images here
// Example: import mountainSunset from '../images/mountain-sunset.jpg';

export interface Photo {
  id: number;
  title: string;
  image: string; // This will be either a local image import or a URL
  category: string;
  description: string;
}

export const photos: Photo[] = [
  {
    id: 1,
    title: 'Pink Moon',
    image: 'https://res.cloudinary.com/daohmpe2h/image/upload/v1743022240/PinkMoon.jpg',
    category: 'Local',
    description: 'A beautiful pink moon captured in the night sky.',
  },
  {
    id: 2,
    title: 'Dark Tree',
    image: 'https://res.cloudinary.com/daohmpe2h/image/upload/v1743022239/DarkTree.jpg',
    category: 'Local',
    description: 'A striking silhouette of a tree against the sky.',
  },
  {
    id: 3,
    title: 'Modern Architecture',
    image: 'https://source.unsplash.com/random/800x600?architecture',
    category: 'Architecture',
    description: 'Contemporary architectural marvels.',
  },
  {
    id: 4,
    title: 'City Streets',
    image: 'https://source.unsplash.com/random/800x600?street',
    category: 'Street',
    description: 'Life in the city streets.',
  },
  {
    id: 5,
    title: 'Abstract Forms',
    image: 'https://source.unsplash.com/random/800x600?abstract',
    category: 'Abstract',
    description: 'Abstract photography exploring shapes and forms.',
  },
]; 