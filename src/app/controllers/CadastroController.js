import conexao from '../database/conexao.js';


class CadastroController{
    index (req, res) {
        const sql = "SELECT * FROM cadastros;"
        conexao.query(sql, (erro, resultado) =>{
            if(erro){
                res.status(404).json({'erro': erro})
            }else{
                res.status(200).json(resultado)
            }
        } )
    }
    show(req, res){
        const id =req.params.id
        const sql = "SELECT * FROM cadastros WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) =>{
            const linha = resultado[0]
            if(erro){
                res.status(404).json({'erro': erro})
            }else{
                res.status(200).json(linha)
            }
        } )
    }
    store(req, res) {
        const cadastro = req.body
        const sql = "INSERT INTO cadastros SET ?;"
        conexao.query(sql, cadastro, (erro, resultado) =>{
            if(erro){
                res.status(400).json({'erro': erro})
            }else{
                res.status(201).json(resultado)
            }
        } )
    }
    update(req, res) {
        const id = req.params.id
        const cadastro = req.body
        const sql = "UPDATE cadastros SET ? WHERE ID=?;"
        conexao.query(sql, [cadastro, id], (erro, resultado) =>{
            if(erro){
                res.status(400).json({'erro': erro})
            }else{
                res.status(200).json(resultado)
            }
        } )
    }
    delete(req, res) {
        const id = req.params.id
        const sql = "DELETE FROM cadastros WHERE id=?;"
        conexao.query(sql, id, (erro, resultado) =>{
            if(erro){
                res.status(404).json({'erro': erro})
            }else{
                res.status(200).json(resultado)
            }
        } )
    }

}

export default new CadastroController()