import express from 'express'

const app = express();

app.get('/', (req, res)=>{
    res.status(200).send('<h2>Estas en la pagina Principal</h2>')
})
app.get('/usuario', (req, res)=>{
    res.status(200).send('<h2>Dentro de la seccion Usuarios</h2>')
})
app.listen(3000, ()=>console.log("🖥servidor levantado..."))