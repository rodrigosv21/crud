import conexao from "../database/conexao.js"

class CadastroRepositoty{

    create(cadastro){
        const sql = "INSERT INTO cadastros SET ?;"
        return new Promise((resolve, reject) =>{
            conexao.query(sql, cadastro, (erro, resultado) => {
                if(erro) return reject("Erro no cadastro")
    
                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findAll() {
    const sql = "SELECT * FROM cadastros;" 
    return new Promise((resolve, reject) =>{
        conexao.query(sql, (erro, resultado) => {
                if(erro) return reject("não localizado")

                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    findById(id){    
    const sql = "SELECT * FROM cadastros WHERE id=?;"
    return new Promise((resolve, reject) =>{
        conexao.query(sql,id, (erro, resultado) => {
                if(erro) return reject("não localizado")

                const row = JSON.parse(JSON.stringify(resultado))
                return resolve(row)
            })
        })
    }

    update(cadastro, id){
        const sql = "UPDATE cadastros SET ? WHERE id=?;"
        return new Promise((resolve, reject) => {
        conexao.query(sql, [cadastro, id], (erro, resultado) =>{
                if(erro) return reject("erro")
    
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                })
            })
    }
        
    delete(id){
        const sql = "DELETE FROM cadastros WHERE id=?;"
        return new Promise((resolve, reject) => {
            conexao.query(sql, id, (erro, resultado) =>{
                if(erro) return reject("erro")
    
                    const row = JSON.parse(JSON.stringify(resultado))
                    return resolve(row)
                })
            })
    }

}

export default new CadastroRepositoty 