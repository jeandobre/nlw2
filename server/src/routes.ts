import express from "express";
import ClassesController from "./controllers/ClassesController";
import ConnectionController from "./controllers/ConnectionsController";

const routes = express.Router();
const classesControllers = new ClassesController();
const connectionsControllers = new ConnectionController();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

routes.get("/connections", connectionsControllers.index);
routes.post("/connections", connectionsControllers.create);

routes.get('/', (req, res) => {
	res.json({
		ok: "Funcionando"
	})
})

export default routes;