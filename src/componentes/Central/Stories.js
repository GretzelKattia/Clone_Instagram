import Story from "./Story"
import './Stories.css'

var ListaUsuarios = [
    {
        nome: "MIAU",
        url: "https://i.pinimg.com/736x/45/ae/8e/45ae8e04b293c9b720434a2e9b8e1b97.jpg"
    },
    {
        nome: "QUAQUA",
        url: "https://i.pinimg.com/564x/86/19/2e/86192ed07d1d3427a58a8fa5d006384c.jpg"
    },
    {
        nome: "LALALA",
        url: "https://i.pinimg.com/564x/59/86/1e/59861e05dcdfcab54b7b95536b08ab09.jpg"
    },
    {
        nome: "PANANA",
        url: "https://i.pinimg.com/736x/83/c0/ec/83c0ecb342b41a43f7922070baab63e3.jpg"
    },

    {
        nome: "QUAQUA",
        url: "https://i.pinimg.com/736x/53/fa/a9/53faa92ba0182e0775713ae2fbba36a3.jpg"
    },
    {
        nome: "LALALA",
        url: "https://i.pinimg.com/564x/c9/49/22/c94922a5224e3cce0fe2abb68e48e767.jpg"
    },
    {
        nome: "PANANA",
        url: "https://i.pinimg.com/564x/9a/33/fe/9a33feb4dc6af12b4edfac7c9e00d897.jpg"
    },

    {
        nome: "ANINHA",
        url: "https://i.pinimg.com/564x/b0/33/9e/b0339ed203e6adf88c08e141fcfbd1d6.jpg"
    }
]

export default function Stories() {
    return (
    <div className="Stories">
        {ListaUsuarios.map((usuario) => {
            return <Story nomeUsuario= {usuario.nome} caminhoDaImagem= {usuario.url} />
        })
        }
    </div>
    )
}