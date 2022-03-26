import ArticlesController from '@/controllers/articles.controller';
import { Routes } from '@/interfaces/routes.interface';
import { photoUpload } from '@/utils/storage';
import { Router } from 'express';
import { body, check } from 'express-validator';

class ArticlesRoute implements Routes {
  public path = '/articles';
  public router = Router();

  public articlesController = new ArticlesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.articlesController.getArticles);
    // this.router.get(`${this.path}/:id`, this.usersController.getUserById);
    this.router.post(`${this.path}`, async (req, res) => {
      console.log(req.body);
      await res.send(req.body);

      // console.log('==================================================');
      // console.log(req.body);
      // // console.log(req.file);
      // // console.log(req);
      // console.log('==================================================');
    });
    // this.router.post(
    //   `${this.path}`,
    //   //   validationMiddleware(CreateArticleDto, 'body'),
    //   // photoUpload,
    //   // [
    //   // body('title').isString().withMessage('title in required'),
    //   // body('content').isString().withMessage('content in required'),
    //   // check('photo')
    //   //   .custom(async (value, { req }) => {
    //   //     if (req.file) {
    //   //       return true;
    //   //     }
    //   //     throw new Error('photo is required');
    //   //   })
    //   //   .withMessage('Please submit photo documents.'),
    //   // ],
    //   this.articlesController.createArticle,
    // );
    // this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default ArticlesRoute;
