import { CreateArticleDto } from '@/dtos/article.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Article } from '@/interfaces/articles.interface';
import articleModel from '@/models/article.model';
import { isEmpty } from '@/utils/util';

class ArticleService {
  constructor() {}

  public async findAllArticles(): Promise<Article[]> {
    const articles: Article[] = await articleModel.find();
    return articles;
  }

  public async createArticle(articleData: CreateArticleDto): Promise<Article> {
    if (isEmpty(articleData)) throw new HttpException(400, "You're not articleData");

    const findArticle: Article = await articleModel.findOne({ title: articleData.title });
    if (findArticle) throw new HttpException(409, `You're title ${articleData.title} already exists`);

    const createArticleData: Article = await articleModel.create({ ...articleData });

    return createArticleData;
  }
}

export default ArticleService;
