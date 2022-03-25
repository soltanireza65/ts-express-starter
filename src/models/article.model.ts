import { prop, getModelForClass, modelOptions, post, pre, ReturnModelType, DocumentType, index, types, queryMethod, Ref } from '@typegoose/typegoose';
import { User } from './users.model';

@modelOptions({ schemaOptions: { collection: 'articles', timestamps: true } })
class Article {
  @prop({ type: String, required: true, unique: true })
  public title: string;

  @prop({ type: String, required: true })
  public content: string;

  @prop({ default: 'no-photo.jpg' })
  public photo: string;

  // @prop({ ref: () => User })
  // public user: Ref<User>;
}

const ArticleModel = getModelForClass(Article);
export default ArticleModel;
