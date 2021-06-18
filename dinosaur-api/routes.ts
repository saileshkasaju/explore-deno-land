import { Router } from './deps.ts';
import {
  showWelcome,
  getDinosaurs,
  addDinosaur,
  getDinosaur,
  updateDinosaur,
  deleteDinosaur,
} from './handlers.ts';

const router = new Router();

router
  .get('/', showWelcome)
  .get('/dinosaurs', getDinosaurs)
  .get('/dinosaurs/:id', getDinosaur)
  .put('/dinosaurs/:id', updateDinosaur)
  .post('/dinosaurs', addDinosaur)
  .delete('/dinosaurs/:id', deleteDinosaur);

export { router };
