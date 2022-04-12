import {Router} from 'express';
import { getArticulos, addArticulo, updateArticulo, deleteArticulo, getArticulosByID } from './controlador/controlador';

const router = Router();

router.get('/test', (req, res) => res.send("Hola Mundo !"));

router.get('/articulos', getArticulos)
router.post('/articulos', addArticulo)
router.put('/articulos/update', updateArticulo)
router.delete('/articulos/:idParam', deleteArticulo)
router.get('/articulos/:idParam', getArticulosByID)


export default router;