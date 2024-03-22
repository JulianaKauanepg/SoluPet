
import { jwt } from "jsonwebtoken"


let users : any[]

const SECRET = process.env.JWT_SECRET

function criarToken(user) {
    return jwt.sign({ cpf: user.cpf, nome: user.nome }, SECRET)
} 


//Verifica se o token é valido e se ele foi criado usando a chave secreta 
function lerToken(token){
    try {
        return jwt.verify(token, SECRET)
    } catch (error) {
        throw new Error('Token inválido')
    }
}

export function cadastro(body) {
 const user = users.find(({ cpf }) => cpf === body.cpf)
 if (user) throw new Error('Usuário já cadastrado')

 users.push(body)
 
 const token = criarToken(body)
 return token

}

export function login(body) {
 const user = users.find(({ cpf }) => cpf === body.cpf)
 if(!user) throw new Error('Usuário não encontrado')
 if(user.senha !== body.senha) throw new Error('Senha incorreta')

 const token = criarToken(user)
 return token
   
}