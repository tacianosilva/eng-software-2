import {
    addUsuario,
    getUsuarios,
    getUsuarioById,
    updateUsuario,
    deleteUsuario,
    getUsuarios as resetUsuarios
} from './user';

beforeEach(() => {
    resetUsuarios();
});

describe('CRUD Usuario', () => {

    it('deve criar usuário', () => {
        const users = addUsuario('John', 'john@example.com', 'password');
        expect(users.length).toBe(1);
    });

    it('deve listar usuários', () => {
        addUsuario('John', 'john@example.com', 'password');
        const users = getUsuarios();
        expect(users.length).toBeGreaterThan(0);
    });

    it('deve buscar usuário por id', () => {
        addUsuario('John', 'john@example.com', 'password');
        const user = getUsuarioById(1);
        expect(user?.nome).toBe('John');
    });

    it('deve atualizar usuário', () => {
        addUsuario('John', 'john@example.com', 'password');
        const user = updateUsuario(1, 'John Doe');
        expect(user?.nome).toBe('John Doe');
    });

    it('deve deletar usuário', () => {
        addUsuario('John', 'john@example.com', 'password');
        const result = deleteUsuario(1);
        expect(result).toBe(true);
    });

});