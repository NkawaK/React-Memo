import express, { Express } from "express";
import mongoose from "mongoose";
import passport from "passport";
import cors from "cors";
import routes from "./routes";
import User from "./models/user";

const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

passport.use((User as any).createStrategy());

app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(routes);
const uri: string = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ENDPOINT}/${process.env.MONGO_TABLE}?retryWrites=true&w=majority&appName=${process.env.MONGO_CLUSTER}`;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose.set("useFindAndModify", false);

mongoose
  .connect(uri, options)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    throw error;
  });
