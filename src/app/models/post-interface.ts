export interface PostInterface {
  uuid: string;
  title: string;
  author: string;
  published: string; // Should be date
  hero_img?: string;
  body: string;
}