export interface GalleryItem {
  id: number;
  image: string;
  title: string;
}

export const gallery: GalleryItem[] = [
  {
    id: 1,
    image: "/images/gallery/creator-workspace.jpg",
    title: "Creator Workspace",
  },
  {
    id: 2,
    image: "/images/gallery/portrait.jpg",
    title: "Portrait",
  },
  {
    id: 3,
    image: "/images/gallery/content-creator.jpg",
    title: "Content Creator",
  },
  {
    id: 4,
    image: "/images/gallery/music-project.jpg",
    title: "Music Project",
  },
  {
    id: 5,
    image: "/images/gallery/behind-the-screen.jpg",
    title: "Behind The Screen",
  },
  {
    id: 6,
    image: "/images/gallery/official-photo.jpg",
    title: "Official Photo",
  },
];