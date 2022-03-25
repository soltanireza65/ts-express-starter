import ArticlesController from '@/controllers/articles.controller';
import { CreateArticleDto } from '@/dtos/article.dto';
import { Routes } from '@/interfaces/routes.interface';
import validationMiddleware from '@/middlewares/validation.middleware';
import { photoUpload } from '@/utils/storage';
import { Router } from 'express';

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
    this.router.post(
      `${this.path}`,
      //   validationMiddleware(CreateArticleDto, 'body'),
      photoUpload,
      this.articlesController.createArticle,
    );
    // this.router.put(`${this.path}/:id`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id`, this.usersController.deleteUser);
  }
}

export default ArticlesRoute;
