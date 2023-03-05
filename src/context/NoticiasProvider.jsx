import axios from "axios"; // Se usa para realizar las peticiones al servidor de la API
import { useState, useEffect, createContext } from "react"

const NoticiasContext = createContext()

const NoticiasProvider = ({children}) => {
    // States
    const [categoria, setCategoria] = useState('general');
    const [noticias, setNoticias] = useState([]);
    const [pagina, setPagina] = useState(1);
    const [totalNoticias, setTotalNoticias] = useState(0);
    
    // Este useEffect trae las noticias al instante de iniciar el sitio
    useEffect(() => {
        const consultarAPI = async () => {
            // url para extraer los datos. LA API KEY ES PROPORCIONADA POR NEWSAPI
            const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            // Se extraen los datos por una operacion asincrona
            const { data } = await axios(url);

            // Se agregan las noticas al state
            setNoticias(data.articles);

            // Se obtienen el total de las noticias
            setTotalNoticias(data.totalResults);

            // La pagina por defualt es uno, por cada cambio de categoria
            setPagina(1);
        }

        consultarAPI();
    }, [categoria])

    // Este useEffect trae las noticas de la siguiente pgina, por lo que no depende de la categoria
    useEffect(() => {
        const consultarAPI = async () => {
            // Se usa la misma url, ahora se agrega el state del numero de pagina
            const url = `https://newsapi.org/v2/top-headlines?country=mx&page=${pagina}&category=${categoria}&apiKey=${import.meta.env.VITE_API_KEY}`

            // Se extraen los datos
            const { data } = await axios(url);

            // Se agregan las noticias al state
            setNoticias(data.articles);

            // Se agrega ek total de las noticias
            setTotalNoticias(data.totalResults)
        }

        consultarAPI();
    }, [pagina])

    // Este metodo cambia la categoria y lo agrega al state de la categoria
    const handleChangeCategoria = e => {
        setCategoria(e.target.value);
    }

    // El metodo cambia el numero de pagina y lo agrega al state de la categoria
    const handleChangePagina = (e, valor) => {
        setPagina(valor)
    }

    return (
        /* Se retorna en forma de compoente todos los states y metodos de este archivo */
        <NoticiasContext.Provider value={{
            categoria, 
            handleChangeCategoria, 
            noticias,
            totalNoticias,
            pagina,
            handleChangePagina
        }}>
            { children }
        </NoticiasContext.Provider>
    )
}

export {NoticiasProvider}

export default NoticiasContext