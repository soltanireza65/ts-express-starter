import { CreateArticleDto } from '@/dtos/article.dto';
import { HttpException } from '@/exceptions/HttpException';
import { Article } from '@/interfaces/articles.interface';
import { RequestWithFile } from '@/interfaces/auth.interface';
import { User } from '@/interfaces/users.interface';
import ArticleService from '@/services/article.service';
import { Request, Response, NextFunction } from 'express';
import path from 'path';

class ArticlesController {
  public articleService = new ArticleService();
  public getArticles = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const findAllArticlesData: Article[] = await this.articleService.findAllArticles();

      res.status(200).json({ data: findAllArticlesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  // createArticle

  public createArticle = async (req: RequestWithFile, res: Response, next: NextFunction) => {
    console.log('req.file: ', req.file);

    // req.file:  {
    //   fieldname: 'photo',
    //   originalname: '1.png',
    //   encoding: '7bit',
    //   mimetype: 'image/png',
    //   destination: './public/uploads/',
    //   filename: 'photo-1648227953766-316647300.png',
    //   path: 'public\\uploads\\photo-1648227953766-316647300.png',
    //   size: 40177
    // }
    try {
      const articleData: CreateArticleDto = { ...req.body, photo: req.file.path };

      const createArticleData: Article = await this.articleService.createArticle(articleData);

      res.status(201).json({ data: createArticleData, message: 'created' });
    } catch (error) {
      next(error);
    }
  };
}

export default ArticlesController;
