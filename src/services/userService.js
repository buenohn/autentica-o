import userRepository from "../repositories/UserRepository.js";

const userService = {
    recuperarUsuario: async () =>{
        const resultado = await userRepository.selecionar();
        return resultado;
    },
    recuperarUsuarioPorId: async (userId) =>{
        const resultado = await userRepository.recuperarUsuario(userId);
        return resultado;
    },
    deletarUsuario: async (userId) =>{
        const resultado = await userRepository.deletar(userId);
        return resultado;
    },
    criarUsuario: async (user) =>{
        const resultado = await userRepository.criar(user.name, user.email. user.passworld);
        return resultado;
    },
    atualizarUsuario: async (user) =>{
        const resultado = await userRepository.atualizar(user.name, user.email. user.passworld, user.id);
        return resultado;
    },
};

export default userService;