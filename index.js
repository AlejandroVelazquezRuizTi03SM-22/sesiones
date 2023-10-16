var express=require("express");
var path=require("path");
var cors=require("cors");
var rutasUsuarios=require("./rutas/usuariosRutas");
var rutasProductos=require("./rutas/productosRutas");
var rutasUsuariosApis=require("./rutas/usuariosRutasApis");
var rutasProductosApis=require("./rutas/productosRutasApis");
const { Session } = require("inspector");
require("dotenv").config();

var app=express();
app.set("view engine","ejs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true})); //cuando esta en false quiere decir que no voy a poder mandar datos
app.use("/",express.static(path.join(__dirname,"/web")));
app.use(Session({
    secret:process.env.SESSION_SECRETO,
    resave:true,
    saveUninitialized:true
}));
app.use("/",rutasUsuarios);
app.use("/",rutasProductos);
app.use("/",rutasUsuariosApis);
app.use("/",rutasProductosApis);

var port=process.env.PORT || 3000;

app.listen(port, ()=>{
    console.log("Servidor ininciado en http://localhost:"+port);
});                                                                             