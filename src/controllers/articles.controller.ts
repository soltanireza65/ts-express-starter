import { CreateArticleDto } from '@/dtos/article.dto';
import { Article } from '@/interfaces/articles.interface';
import { RequestWithFile } from '@/interfaces/auth.interface';
import ArticleService from '@/services/article.service';
import { photoUpload } from '@/utils/storage';
import { NextFunction, Request, Response } from 'express';
import { validationResult } from 'express-validator';

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

  public createArticle = async (req: Request, res: Response, next: NextFunction) => {
    // if (req.file) {
    //   const { filename } = req.file;
    //   req.body.photo = filename;
    //   console.log('==================================================');
    //   console.log(req.body);
    //   console.log(req.file);
    //   console.log('==================================================');
    // }
    console.log('==================================================');
    console.log(req.body);
    // console.log(req.file);
    // console.log(req);
    console.log('==================================================');

    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   // return res.status(400).json({ errors: errors.array() });
    // } else {
    //   photoUpload(req, res, err => {
    //     console.log(req.file);
    //   })
    //     .then(async (result: any) => {})
    //     .catch(err => {});
    // }
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

    // try {
    //   const articleData: CreateArticleDto = { ...req.body, photo: req.file.path };

    //   const createArticleData: Article = await this.articleService.createArticle(articleData);

    //   res.status(201).json({ data: createArticleData, message: 'created' });
    // } catch (error) {
    //   next(error);
    // }
  };
}

export default ArticlesController;
