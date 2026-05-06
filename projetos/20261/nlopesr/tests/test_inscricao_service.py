from pathlib import Path
from unittest import TestCase, main
from unittest.mock import MagicMock
import importlib.util


SERVICE_PATH = Path(__file__).resolve().parents[1] / "src" / "inscricao_service.py"
spec = importlib.util.spec_from_file_location("inscricao_service", SERVICE_PATH)
module = importlib.util.module_from_spec(spec)
spec.loader.exec_module(module)
InscricaoService = module.InscricaoService


class TestInscricaoService(TestCase):
    def test_inserir_inscricao_chama_create_do_repositorio(self):
        repository = MagicMock()
        service = InscricaoService(repository)

        dados = {"tipo": "geral", "usuario_id": 10}
        repository.create.return_value = {"id": 1, **dados}

        resultado = service.inserir(dados)

        repository.create.assert_called_once_with(dados)
        self.assertEqual(resultado["id"], 1)

    def test_atualizar_inscricao_chama_update_do_repositorio(self):
        repository = MagicMock()
        service = InscricaoService(repository)

        inscricao_id = 1
        dados = {"status": "confirmada"}
        repository.update.return_value = {"id": inscricao_id, **dados}

        resultado = service.atualizar(inscricao_id, dados)

        repository.update.assert_called_once_with(inscricao_id, dados)
        self.assertEqual(resultado["status"], "confirmada")

    def test_deletar_inscricao_chama_delete_do_repositorio(self):
        repository = MagicMock()
        service = InscricaoService(repository)

        inscricao_id = 1
        repository.delete.return_value = True

        resultado = service.deletar(inscricao_id)

        repository.delete.assert_called_once_with(inscricao_id)
        self.assertTrue(resultado)

    def test_consultar_inscricao_chama_get_by_id_do_repositorio(self):
        repository = MagicMock()
        service = InscricaoService(repository)

        inscricao_id = 1
        repository.get_by_id.return_value = {
            "id": inscricao_id,
            "tipo": "especifica",
            "status": "pendente",
        }

        resultado = service.consultar(inscricao_id)

        repository.get_by_id.assert_called_once_with(inscricao_id)
        self.assertEqual(resultado["tipo"], "especifica")


if __name__ == "__main__":
    main()