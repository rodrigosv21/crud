import CadastroRepository from '../repositories/CadastroRepository.js';

class CadastroController{

    //listar os dados na tabela
    async index (req, res) {
        const row = await CadastroRepository.findAll();
        res.json();
    }

    //consultar por id
    async show(req, res){
        const id = req.params.id
        const row = await CadastroRepository.findById(id)
        res.json(row)
    }

    //adicionar novo
    async store(req, res) {
        const cadastro = req.body
        const row = await CadastroRepository.create(cadastro)
        res.json(row)
        
    }

    //atualizar novo
    async update(req, res) {
        const id = req.params.id
        const cadastro = req.body
        const row = await CadastroRepository.update(cadastro, id)
        res.json(row)
    }

    //detetar
    async delete(req, res) {
        const id = req.params.id
        const row = await CadastroRepository.delete(id)
        res.json(row)
    }
}

export default new CadastroController()
