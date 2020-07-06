const express = require('express');
const bodyparser = require('body-parser');
const UsuariosRouter=require('./routes/Usuarios');
const RolesRouter=require('./routes/Roles');
const PermisosRouter=require('./routes/Permisos');
const LoginRouter=require('./routes/Login');
const CategoriasRouter = require('./routes/Categorias')
const ProductosRouter= require('./routes/Productos')
const EstadosRouter = require('./routes/Estados');
const PedidosRouter = require('./models/Pedido');
const models = require('./models');
const auth= require('./middlewares/auth');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(auth);

app.use(bodyparser.json());

models.sync();


app.use('/usuarios',UsuariosRouter);

app.use('/roles',RolesRouter);

app.use('/permisos',PermisosRouter);

app.use('/login',LoginRouter);

app.use('/categorias', CategoriasRouter);

app.use('/productos',ProductosRouter);

app.use('/estados', EstadosRouter);

app.use('/pedidos',PedidosRouter);

app.listen(port=5000, function() {
    console.log('Servidor escuchando en 5000...');
});
