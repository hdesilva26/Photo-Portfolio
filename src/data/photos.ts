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
    title: 'Mountain Sunset',
    image: 'https://res.cloudinary.com/daohmpe2h/image/upload/v1743020585/fowrzizqrmcz2kyvgii1.jpg',
    category: 'Nature',
    description: 'A breathtaking sunset over the mountains.',
  },
  {
    id: 2,
    title: 'Urban Portrait',
    image: 'https://source.unsplash.com/random/800x600?portrait',
    category: 'Portrait',
    description: 'Street photography capturing urban life.',
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