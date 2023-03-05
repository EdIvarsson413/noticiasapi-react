// Componentes de MUI
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import Stack from '@mui/material/Stack'
import Pagination from '@mui/material/Pagination'
import useNoticias from '../hooks/useNoticias'
import Noticia from './Noticia';


const ListadoNoticias = () => {
    // Se extraen los state de noticias (arreglo) y el total para ser usado en la paginacion 
    const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias();

    // En una ventana se muestran 20 noticias, se calcula el numero de paginas para mostrar todas las noticias de la categoria
    const totalPaginas = Math.ceil(totalNoticias / 20);

    return (
        <>
            <Typography textAlign='center' marginY={5} variant='h3' component={'h2'}>
                Ultimas Noticias
            </Typography>

            {/* Paginador 1 */}
            <Stack direction={'row'} justifyContent='center' justifyItems={'center'}>
                <Pagination count={totalPaginas} color='secondary' onChange={handleChangePagina} page={pagina}/>
            </Stack>

            {/* Este Grid contendra todas las noticias, una por una */}
            <Grid container spacing={2} marginY={4}>
                {
                    noticias.map(noticia => (
                        <Noticia key={noticia.url} noticia={noticia}/>
                    ))
                }
            </Grid>

            {/* Paginador 2, ambos actuan se forma sincrona */}
            <Stack direction={'row'} justifyContent='center' justifyItems={'center'}>
                <Pagination count={totalPaginas} color='secondary' onChange={handleChangePagina} page={pagina}/>
            </Stack>
        </>
    )
}

export default ListadoNoticias