const createError = require('http-errors');
const debug = require('debug')('app:module-users-controler');

const {UserService} = require('./services');
const {Response}= require('../common/response');


module.exports.UsersController = {
    getUsers: async(req,res) => {
        try {
            let users = await UserService.getAll()
            Response.success(res, 200,'Lista de usuarios', users);
        } catch (error) {
            debug(error)
            Response.error(res)
        }
    },
    getUser: async(req,res) => {
        try {
            const {params : {id}} = req;
            let user = await UserService.getById(id);
            if (!user) {
                Response.error(res, new createError.NotFound());
            }else{
                Response.success(res, 200, `Usuario encontrado: ${id}`, user);
            }
        } catch (error) {
            debug(error);
            Response.error(res)
        }
       
    },
    createUser: async(req,res) => {
        try {
            const {body} = req;
            if (!body || Object.keys(body).length === 0) {
                Response.error(res, new createError.BadRequest());
            }else{
                const insertedId = await UserService.create(body);
                Response.success(res, 201, 'Usuario agregado', insertedId);
            }
        } catch (error) {
            debug(error);
            Response.error(res);
        }
    },


}