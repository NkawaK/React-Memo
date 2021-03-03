import express, { Express } from 'express';
import mongoose from 'mongoose';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';
import routes from './routes';
import User from './models/user';

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
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

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
}));

app.use(routes);

const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}${process.env.MONGO_CLUSTER}/${process.env.MONGO_DB}?retryWrites=true&w=majority`;
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

