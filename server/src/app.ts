import express, { Express, Request, Response } from 'express';
import mongoose from 'mongoose';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';
import routes from './routes';
import User from './models/user';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cookieParser('reactMemo1234'));
app.use(
  expressSession({
    secret: 'reactMemo1234',
    cookie: {
      maxAge: 4000000
    },
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());
passport.use((User as any).createStrategy());
passport.serializeUser((User as any).serializeUser());
passport.deserializeUser((User as any).deserializeUser());

app.use((req: Request, res: Response, next: any) => {
  res.locals.loggedIn = req.isAuthenticated();
  res.locals.currentUser = req.user;
  next();
});

app.use(cors());
app.use(routes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.qcl1j.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
const options = { useNewUrlParser: true, useUnifiedTopology: true };
mongoose.set('useFindAndModify', false);

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch(error => {
    throw error
  });

