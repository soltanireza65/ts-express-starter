import App from '@/app';
import AuthRoute from '@routes/auth.route';
import IndexRoute from '@routes/index.route';
import UsersRoute from '@routes/users.route';
import validateEnv from '@utils/validateEnv';
import ArticlesRoute from './routes/articles.route';

validateEnv();

const app = new App([
  // routes
  new IndexRoute(),
  new UsersRoute(),
  new AuthRoute(),
  new ArticlesRoute(),
]);

app.listen();
