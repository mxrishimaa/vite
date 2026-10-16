import './Greetings.css'

function Greetings({nome, mensagem = "Seja bem vindo(a)!"}) {
    return (
        <div className='greeting'>
            <span className='greeting__eyebrow'>React - Primeiros Passos</span>
            <h1>{nome}, {mensagem}!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, necessitatibus nobis aut officia quidem iste voluptatum illum maiores dolorem illo veniam nihil dignissimos magni facere, quas totam cum libero dolor.</p>
        </div>
    )
}

export default Greetings;