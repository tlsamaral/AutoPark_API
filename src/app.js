// eslint-disable-next-line import/no-extraneous-dependencies
import { resolve } from "path";
import dotenv from "dotenv";
dotenv.config();
import "./database";

import cors from "cors";
import express from "express";

import fotoRoutes from "./routes/fotoRoutes";
import homeRoutes from "./routes/homeRoutes";
import tokenRoutes from "./routes/tokenRoutes";
import turnstileRoutes from "./routes/turnstileRoutes";
import userRoutes from "./routes/userRoutes";
import vacancyRoutes from "./routes/vacancyRoutes";

// const whiteList = [
//   'http://localhost:3000',
//   'http://localhost:3001',
//   'http://localhost:3002',
//   'http://localhost:3003',
// ];

// const corsOptions = {
//   origin(origin, callback) {
//     if (whiteList.indexOf(origin) !== -1 || !origin) {
//       callback(null, true);
//     }
//     callback(new Error('Not allowed by CORS'));
//   },

// };

class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		// this.app.use(helmet());
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(cors({ origin: "*" }));
		this.app.use(
			"/images/",
			(req, res, next) => {
				res.setHeader("Access-Control-Allow-Origin", "*");
				res.setHeader("Access-Control-Allow-Methods", "GET");
				res.setHeader(
					"Access-Control-Allow-Headers",
					"Content-Type, Authorization",
				);
				next();
			},
			express.static(resolve(__dirname, "..", "uploads", "images")),
		);
	}

	routes() {
		this.app.use("/", homeRoutes);
		this.app.use("/users/", userRoutes);
		this.app.use("/tokens/", tokenRoutes);
		this.app.use("/fotos/", fotoRoutes);
		this.app.use("/vacancies/", vacancyRoutes);
		this.app.use("/turnstiles/", turnstileRoutes);
	}
}

const { app } = new App();
export default app;
