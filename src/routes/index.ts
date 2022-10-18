import { Router, Request, Response, response } from "express"
import { request } from "http"

const router = Router()

router.get('/',(req:Request,res:Response) =>{

   let user:string = 'Viviane'

    res.render('pages/home',{
       user,
       produtos:[
        {titulo:'Livro Crepusculo',preco:39},
        {titulo:'Arroz São João', preco: 15},
        {titulo:'Bombril', preco:5},
        {titulo:'Salgadinho Fofura',preco:3}
       ],frases:[
        'A guerra contra as drogas é inutil pois acaba morrendo os dois lados',
        'A Vingança é plena mata alma e envenena',
        'Prefiro morrer do que perder a vida',
        'A vida passa mais rápido do que uma Ferrari na estrada'
       ]

    })
})

router.get('/login',(req:Request,res:Response) =>{
    res.render('pages/login',{
        name:'Fulano',
        lastName:'Fulaninho',
        showWelcome:false
    })
})

router.get('/idade',(req:Request,res:Response) =>{
    let nome: string = 'Caio'
    let idade: number = 15
    let mostrarIdade: boolean = false
    
    if(idade > 18){
        mostrarIdade = true
    }else{
        mostrarIdade = false
    }

    res.render('pages/idade',{
        nome,
        idade,
        mostrarIdade
    })
})

router.get ('/nome',(req:Request, res:Response) =>{

    let nome: string = req.query.nome as string


    res.render('pages/nome',{
        nome 
    })
})

router.get('/formulario',(req:Request, res:Response) =>{
    let nome: string = req.query.nome as string

    let idade: number = parseInt(req.query.number as string)

    let telefone: number = parseInt(req.query.telefone as string)

    let endereco: string = req.query.endereco as string

    let cpf: number = parseInt(req.query.cpf as string)


    res.render('pages/formulario',{  
        nome,
        idade,
        telefone,
        endereco,
        cpf

    })
})

router.get('/idade',(req:Request, res:Response) =>{
    res.render('pages/idade')
    
})  

router.post('/idade-resultado',(req:Request ,res:Response) =>{

    let mostrarIdade: boolean = false
    let idade: number = 0

    if(req.body.anoNascimento){
        let anoNascimento: number = parseInt(req.body.anoNascimento as string)
        let anoAtual:number = 2022
        idade = anoNascimento - anoAtual
        mostrarIdade = true
    }


    res.render('pages/idade',{
    idade,
    mostrarIdade

    })  
})


//ROTA ESTÁTICA
router.get('/contato',(req:Request,res:Response) =>{
    res.send("PAGINA DE CONTATO")
})
//ROTA DINÂMICA
router.get('/noticia/:noticia',(req:Request,res:Response) =>{
    let noticia: string = req.params.noticia
    res.send(`Noticias: ${noticia}`)
})

router.get('/viagens/:origem-:destino',(req:Request,res:Response) =>{
    let origem:string = req.params.origem
    let destino:string = req.params.destino

    res.send(`Procurando trajetos de ${origem} até ${destino}`)
})


router.get('pages/login',(req:Request ,res:Response)=>{
    res.render('pages/login')
})

router.post('/login-resultado',(req:Request ,res:Response) =>{

    let email: string = (req.body.email)
    let senha: string = (req.body.senha)


    res.render('pages/login',{
    email,
    senha

    })  
})
export default router