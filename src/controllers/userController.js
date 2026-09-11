import userService from "../services/userService.js";
import User from "../models/User.js";

const userController = {

    selecionar: async (req, res) => {

        try {

            const resultado = await userService.recuperarUsuario();

            res.status(200).json({
                message: "Usuários recuperados com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao recuperar usuários!",
                data: error.message
            });

        }

    },

    criar: async (req, res) => {

    try {

        const { name, email, password, role } = req.body;

        const hashedPassword = await userService.hashPassword(password);

        const user = new User(
            name,
            email,
            hashedPassword,
            role
        );

        const resultado = await userService.criarUsuario(user);

        return res.status(201).json({
            message: "Usuário criado com sucesso!",
            data: resultado
        });

    } catch (error) {

        return res.status(500).json({
            message: "Erro ao criar usuário!",
            data: error.message
        });

    }

},

    deletar: async (req, res) => {

        try {

            const { id } = req.params;

            const resultado = await userService.deletarUsuario(id);

            res.status(200).json({
                message: "Usuário deletado com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao deletar usuário!",
                data: error.message
            });

        }

    },

    atualizar: async (req, res) => {

        try {

            const { id } = req.params;

            const { name, email, password } = req.body;

            const dadosAtualizados = new User(
                name,
                email,
                password,
                id
            );

            const resultado = await userService.atualizarUsuario(
                dadosAtualizados
            );

            res.status(200).json({
                message: "Usuário atualizado com sucesso!",
                data: resultado
            });

        } catch (error) {

            res.status(500).json({
                message: "Erro ao atualizar usuário!",
                data: error.message
            });

        }

    }

};

export default userController;