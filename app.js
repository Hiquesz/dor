import express from 'express';
import cors from 'cors'
import ProdutoRouter from './src/routes/rotaProduto.js';
import MaquinarioRouter from './src/routes/rotaMaquinario.js';
import FerramentaRouter from './src/routes/rotaFerramenta.js';


const app = express()
const port = process.env.PORT || 3000
app.use(express.json())

app.use(cors())
app.use('/Produtos', ProdutoRouter)
app.use('/Maquinarios', MaquinarioRouter)
app.use('/Ferramentas', FerramentaRouter)

app.listen(port, () => console.log(`API rodando na porta ${port}`))