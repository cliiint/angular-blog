import { PostInterface } from './post-interface';

export interface PostDataInterface {
  post: PostInterface,
  formContext: 'Create' | 'Update';
}