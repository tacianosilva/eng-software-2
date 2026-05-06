type Usuario = {
    id: number;
    nome: string;
    email: string;
    senha: string;
};

let usuarios: Usuario[] = [];

export function addUsuario(nome: string, email: string, senha: string): Usuario[] {
    const novoUsuario: Usuario = {
        id: usuarios.length + 1,
        nome,
        email,
        senha
    };
    usuarios.push(novoUsuario);
    return usuarios;
}

export function getUsuarios(): Usuario[] {
    return usuarios;
}

export function getUsuarioById(id: number): Usuario | undefined {
    return usuarios.find(usuario => usuario.id === id);
}

export function updateUsuario(
    id: number,
    nome?: string,
    email?: string,
    senha?: string
): Usuario | undefined {
    const usuario = getUsuarioById(id);
    if (usuario) {
        if (nome) usuario.nome = nome;
        if (email) usuario.email = email;
        if (senha) usuario.senha = senha;
    }
    return usuario;
}

export function deleteUsuario(id: number): boolean {
    const index = usuarios.findIndex(usuario => usuario.id === id);
    if (index !== -1) {
        usuarios.splice(index, 1);
        return true;
    }
    return false;
}

export function resetUsuarios(): void {
    usuarios = [];
}