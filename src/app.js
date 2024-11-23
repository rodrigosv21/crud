import express from 'express';
import CadastroController from './app/controllers/CadastroController.js';

const app = express();

app.use(express.json()) //indicar para o express ler body com json


//rotas
app.get("/cadastros", CadastroController.index)

app.get("/cadastros/:id", CadastroController.show)

app.post("/cadastros", CadastroController.store )

app.put("/cadastros/:id", CadastroController.update)

app.delete("/cadastros/:id", CadastroController.delete)


export default app
