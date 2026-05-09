# Tarefa 02 - Teste de Unidade

|Aluno|Usuário do Github|E-mail|Repositório da Questão|
|-|-|-|-|
|Mosiah Adam|akemi-adam|tech.adam.servicos@gmail.com|[backend](https://github.com/douglas-e-amigos/touchfy-api) e (frontend)[https://github.com/douglas-e-amigos/touchfy-ui]|

## CRUD no projeto

Eu implementei o CRUD de usuários. Ele ainda não está completo (no caso está faltando a parte de _soft delete_/exclusão lógica), mas para a operação que está faltando, vou colocar a de logout como "tapa buraco".

### UsuarioEntity

A [entidade jpa](https://github.com/douglas-e-amigos/touchfy-api/blob/main/src/main/java/com/ufrn/dct/bsi/touchfy/adapters/outbound/persistence/entities/UsuarioEntity.java) abaixo mapeia a tabela de usuários no Spring, utilizando anotações do lombok para facilitar a manipulação e criação de objetos.

```java
@Entity
@Table(name = "usuario")
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Getter
@Setter
public class UsuarioEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(name = "nome", nullable = false, length = 255)
    private String nome;

    @Column(name = "nome_usuario", nullable = false, length = 200, unique = true)
    private String nomeUsuario;

    @Column(name = "senha", nullable = false, length = 255)
    private String senha;

    @Column(name = "email", nullable = false, length = 255, unique = true)
    private Email email;

    @Column(name = "caminho_da_foto_de_perfil", length = 255)
    private String caminhoDaImagemDePerfil;

    @Column(name = "email_verificado", nullable = false)
    private Boolean emailVerificado = false;

    @Column(name = "data_nascimento", nullable = false)
    private LocalDate dataNascimento;
}
```

### Repositories

As operações do banco acontecem através de um JpaRepository que usa a entidade acima. Esse repository é acessado por uma classe chamada `UsuarioRepository`, que é usada pelo domínio da aplicação para realizar as operações de manipulação de dados.

```java
@Repository
@AllArgsConstructor
public class UsuarioRepositoryImpl implements UsuarioRepository {
    private final UsuarioJpaRepository jpaRepository;
    private final UsuarioMapper usuarioMapper;

    @Override
    public UsuarioEntity salvar(final Usuario usuario) {
        return jpaRepository.save(usuarioMapper.toEntity(usuario));
    }

    @Override
    public Optional<UsuarioEntity> acharPeloNomeDeUsuario(final String nomeUsuario) {
        return jpaRepository.findByNomeUsuario(nomeUsuario);
    }

    @Override
    public Optional<UsuarioEntity> acharPeloId(final UUID id) {
        return jpaRepository.findById(id);
    }

    @Override
    public void atualizarUsuarioParcialmente(final UUID id, final AtualizarUsuarioRequest request) {
        final var usuarioEntity = this.acharPeloId(id)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
        usuarioMapper.updateEntity(request, usuarioEntity);
        jpaRepository.save(usuarioEntity);
    }

    @Override
    public void atualizarFotoPerfilUsuario(final UsuarioEntity usuarioEntity, final String pathFotoPerfil) {
        usuarioEntity.setCaminhoDaImagemDePerfil(pathFotoPerfil);
        jpaRepository.save(usuarioEntity);
    }
}
```

Aqui, tem os seguintes métodos de um CRUD: Create, através do método salvar, que recebe um objeto de domínio do usuário (já mapeado pós request), mapeia para uma entidade (usando a lib map struct do java) e salva essa entidade com o jpaRepository.

Depois, há dois métodos de busca (busca por uma única entidade): o primeiro busca pelo nome de usuário e o segundo pelo id. Ambos retornam uma entidade optiona, que pode ou não existir. Isso é tratado porque chama esse método através de `orElseThrow`. As exceptions estão bem genéricas, mas isso irá melhorar com o andamento do projeto. Algo importante de se destacar, é que jpaRepository é uma interface. Essa interface consegue interpretar o nome de métodos e, se eles estiverem seguindo uma convenção e os nomes (camel case) dos atributos das entidades estiverem certos, o framework implementa por de baixo dos panos um método que faz exatamente o que o seu nome diz. Nesses casos: `findByNomeUsuario` (ache pelo username) e `findById` (ache pelo id).

Por fim, há dois métodos de atualização: um atualiza dados simples do usuário (coisas como senha e e-mail tem suas próprias regras de negócio e devem ser feitas separadamente) e outro atualiza a foto de perfil do usuário (a entidade guarda o caminho da imagem no bucket de armazenamento).

### Use cases

As regras de negócio da aplicação está definida em use cases. Abaixo, seguem os casos dos endpoints que implementam diretamente alguns dos métodos que mostrei acima (no caso não vai ter de achar usuário, porque **até** o presente momento, não desenvolvemos isso ainda. Mas será, com certeza).

Os casos de uso basicamente só chama ports (interfaces), para não ficarem com dependências do exterior.

```java
@Component
@AllArgsConstructor
public class CriarUsuarioUseCase {
    private final UsuarioRepository usuarioRepository;
    private final UsuarioMapper usuarioMapper;
    private final PasswordMaker passwordMaker;

    public void execute(final CriarUsuarioRequest request) {
        validarSenha(request.senha(), request.senhaNovamente());
        final var usuario = usuarioMapper.toDomain(request);
        usuario.setSenha(gerarHash(usuario.getSenha()));
        usuarioRepository.salvar(usuario);
    }

    private String gerarHash(final String senha) {
        return passwordMaker.execute(senha);
    }

    private void validarSenha(final String senha, final String senhaNovamente) {
        if (senha == null || senha.isEmpty() || senhaNovamente == null || senhaNovamente.isEmpty()) {
            throw new IllegalArgumentException("A senha é obrigatória.");
        }
        if (!senha.equals(senhaNovamente)) {
            throw new IllegalArgumentException("As senhas devem ser iguais.");
        }
    }
}
```

```java
@Component
@AllArgsConstructor
public class AtualizarUsuarioUseCase {
    private final UsuarioRepository usuarioRepository;

    public void execute(final UUID id, final AtualizarUsuarioRequest request) {
        usuarioRepository.atualizarUsuarioParcialmente(id, request);
    }
}
```

```java
@Component
@AllArgsConstructor
public final class AtualizarFotoPerfilUsuarioUseCase {
    private final UsuarioRepository usuarioRepository;
    private final UploadArquivoUseCase uploadArquivoUseCase;
    private final DeletarArquivoUseCase deletarArquivoUseCase;

    public void execute(final UUID usuarioId, final AtualizarFotoPerfilUsuarioRequest request) {
        final var usuarioEntity = this.usuarioRepository.acharPeloId(usuarioId)
                .orElseThrow(() -> new RuntimeException("Usuário não encontrado."));
        if (usuarioEntity.getCaminhoDaImagemDePerfil() != null) {
            this.deletarArquivoUseCase.execute(usuarioEntity.getCaminhoDaImagemDePerfil());
        }
        final String diretorio = String.format(DiretorioStorage.FOTOS_DE_PERFIL.getDiretorio(),
                usuarioEntity.getNomeUsuario());
        final var metadadosArmazenamento = this.uploadArquivoUseCase.execute(request.foto(), diretorio);
        this.usuarioRepository.atualizarFotoPerfilUsuario(usuarioEntity, metadadosArmazenamento.caminhoDoArquivo());
    }
}
```

```java
@Component
@AllArgsConstructor
public class LogoutUseCase {
    private final RefreshTokenRepository refreshTokenRepository;

    public void execute(final String token) {
        if (token == null) {
            throw new RuntimeException("Token inválido");
        }

        refreshTokenRepository.revogar(token);
    }
}
```
Esse caso de uso do logout realiza o equivalente a uma operação de "DELETE" do CRUD. A aplicação utiliza a ideia de access e refresh token com JWT. Então, o que esse use case faz é revogar (invalidar) o refresh token salvo no banco. Basicamente um """delete"""", entre aspas.

### Controller

Esses casos de uso são chamados pelo controller de Usuário, que apenas repassa a requisição para eles e devolve uma resposta http.

```java
@RestController
@RequestMapping(UsuarioRoute.ROOT)
@AllArgsConstructor
public class UsuarioController {
    private final AtualizarFotoPerfilUsuarioUseCase atualizarFotoPerfilUsuarioUseCase;
    private final AtualizarUsuarioUseCase atualizarUsuarioUseCase;
    private final AutenticarUsuarioUseCase autenticarUsuarioUseCase;
    private final CriarUsuarioUseCase criarUsuarioUseCase;
    private final RefreshTokenUseCase refreshTokenUseCase;
    private final LogoutUseCase logoutUseCase;

    @PostMapping(UsuarioRoute.CADASTRO)
    public ResponseEntity<NovoRecursoResponse> criarUsuario(
            @RequestBody @Valid final CriarUsuarioRequest request
    ) {
        criarUsuarioUseCase.execute(request);

        return ResponseEntity.ok(NovoRecursoResponse.builder()
                .criado(Boolean.TRUE)
                .criadoEm(LocalDate.now())
                .mensagem("Usuario criado com sucesso!")
                .build()
        );
    }

    @PostMapping(UsuarioRoute.LOGIN)
    public ResponseEntity<TokenResponse> autenticarUsuario(
            @RequestBody @Valid final AutenticarUsuarioRequest request) {
        final var response = autenticarUsuarioUseCase.execute(request.nomeUsuario(), request.senha());
        return ResponseEntity.ok(response);
    }

    @SecurityRequirement(name = "bearerAuth")
    @PatchMapping(UsuarioRoute.ATUALIZAR)
    public ResponseEntity<RecursoAtualizadoResponse> atualizarUsuario(
            @PathVariable("id") final UUID id,
            @RequestBody @Valid final AtualizarUsuarioRequest request) {
        atualizarUsuarioUseCase.execute(id, request);

        return ResponseEntity.ok(RecursoAtualizadoResponse.builder()
                .atualizado(Boolean.TRUE)
                .atualizadoEm(LocalDate.now())
                .mensagem("Usuário atualizado com sucesso!")
                .build()
        );
    }

    @SecurityRequirement(name = "bearerAuth")
    @PatchMapping(value = UsuarioRoute.ATUALIZAR_FOTO_DE_PERFIL, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<RecursoAtualizadoResponse> atualizarFotoDePerfil(
            @PathVariable("id") final UUID id,
            @ModelAttribute @Valid final AtualizarFotoPerfilUsuarioRequest request) {
        atualizarFotoPerfilUsuarioUseCase.execute(id, request);

        return ResponseEntity.ok(RecursoAtualizadoResponse.builder()
                .atualizado(Boolean.TRUE)
                .atualizadoEm(LocalDate.now())
                .mensagem("Foto de perfil atualizada com sucesso!")
                .build()
        );
    }

    @PostMapping(UsuarioRoute.REFRESH_TOKEN)
    public ResponseEntity<TokenResponse> refresh(@RequestBody @Valid final RefreshTokenRequest request) {
        final var response = refreshTokenUseCase.execute(request.refreshToken());
        return ResponseEntity.ok(response);
    }

    @PostMapping(UsuarioRoute.LOGOUT)
    public ResponseEntity<Void> logout(@RequestBody @Valid final RefreshTokenRequest request) {
        logoutUseCase.execute(request.refreshToken());
        return ResponseEntity.noContent().build();
    }
}
```

### Testes

Cada caso de uso tem um arquivo próprio de testes, assim como os repositories. Vou pegar um como exemplo e detalhar ele.

```java
class CriarUsuarioUseCaseTest {

    private UsuarioRepository repository;
    private UsuarioMapper mapper;
    private PasswordMaker passwordMaker;

    private CriarUsuarioUseCase useCase;

    @BeforeEach
    void setup() {
        repository = mock(UsuarioRepository.class);
        mapper = mock(UsuarioMapper.class);
        passwordMaker = mock(PasswordMaker.class);

        useCase = new CriarUsuarioUseCase(repository, mapper, passwordMaker);
    }

    private Usuario usuarioMock() {
        return new Usuario(
                UUID.randomUUID(),
                "Nome",
                "user",
                "senha",
                new Email("teste@email.com"),
                null,
                false,
                LocalDate.now()
        );
    }

    private CriarUsuarioRequest requestValido() {
        return new CriarUsuarioRequest(
                "Nome",
                "user",
                "senha",
                "senha",
                "teste@email.com",
                LocalDate.now()
        );
    }

    @Test
    void deveCriarUsuarioComSucesso() {
        var request = requestValido();
        var usuario = usuarioMock();

        when(mapper.toDomain(request)).thenReturn(usuario);
        when(passwordMaker.execute("senha")).thenReturn("hash");

        useCase.execute(request);

        assertEquals("hash", usuario.getSenha());
        verify(repository).salvar(usuario);
    }

    @Test
    void deveLancarErroQuandoSenhaForNula() {
        var request = new CriarUsuarioRequest(
                "Nome",
                "user",
                null,
                null,
                "teste@email.com",
                LocalDate.now()
        );

        assertThrows(IllegalArgumentException.class, () -> useCase.execute(request));
    }

    @Test
    void deveLancarErroQuandoSenhasForemDiferentes() {
        var request = new CriarUsuarioRequest(
                "Nome",
                "user",
                "senha1",
                "senha2",
                "teste@email.com",
                LocalDate.now()
        );

        assertThrows(IllegalArgumentException.class, () -> useCase.execute(request));
    }

    @Test
    void deveGerarHashAntesDeSalvar() {
        var request = requestValido();
        var usuario = usuarioMock();

        when(mapper.toDomain(request)).thenReturn(usuario);
        when(passwordMaker.execute("senha")).thenReturn("hashSeguro");

        useCase.execute(request);

        verify(passwordMaker).execute("senha");
        verify(repository).salvar(usuario);
    }
}
```

Minha experiência fazendo testes na faculdade e no trabalho é cansativa, mas é algo necessário, então precisa ser feito para garantir uma qualidade e segurança mínima.

Esse teste aí de cima testa o caso de uso de criar um usuário. Para isso, ele mocka as depedências (repositories, mappers, etc) e também cria objetos mockados com valores falsos para fins de teste. Nesse caso não usei nenhum faker e setei os valores manualmente. Testa o caso normal, de criar um usuário, mas também testa os erros de validação e a chamada de funções (como no caso de gerar a senha antes de salvar no repository).

### Tipo do teste

Teste unitários são testes que testam as menores porções do código, como métodos e classes. Já testes de integração testam a integração entre partes diferentes do sistema, como integração com api, db, filas, etc. Esse teste que eu mostrei aqui é um teste unitário, pois as partes do sistema que ele deveria interagir, como por exemplo a camada de repositories (que acessa a camada de dados) está mockada, abstraindo o funcionamento real.

- [Link desse teste aí](https://github.com/douglas-e-amigos/touchfy-api/blob/main/src/test/java/com/ufrn/dct/bsi/touchfy/application/usecases/usuario/CriarUsuarioUseCaseTest.java);
- [Link para os demais testes](https://github.com/douglas-e-amigos/touchfy-api/tree/main/src/test/java/com/ufrn/dct/bsi/touchfy).