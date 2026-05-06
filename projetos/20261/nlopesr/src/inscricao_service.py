"""Simple enrollment service used to demonstrate CRUD unit tests."""


class InscricaoService:
    def __init__(self, repository):
        self.repository = repository

    def inserir(self, dados_inscricao):
        """Create a new enrollment."""
        return self.repository.create(dados_inscricao)

    def atualizar(self, inscricao_id, dados_inscricao):
        """Update an existing enrollment."""
        return self.repository.update(inscricao_id, dados_inscricao)

    def deletar(self, inscricao_id):
        """Delete an enrollment."""
        return self.repository.delete(inscricao_id)

    def consultar(self, inscricao_id):
        """Get an enrollment by id."""
        return self.repository.get_by_id(inscricao_id)