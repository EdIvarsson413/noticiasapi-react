// Componentes de MUI
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Grid'

const Noticia = ({ noticia }) => {
    // Se usa destruccturación para sacar variables importantes para mostrar en el card
    const { urlToImage, url, title, description, author } = noticia;

    return (
        <>  
            {/* Cada noticia es un item del grid principal */}
            <Grid item md={4} sm={4} xs={12}>
                <Card>
                    {   /* En caso de no tener una url de la imagen, este no mostrara ni el texto alterno*/
                        urlToImage && (
                            <CardMedia
                                component={'img'}
                                alt={`Imagen de la noticia ${title}`}
                                image={urlToImage}
                                height={'250'}
                            />
                        )
                    }

                    {/* Se muestra el titulo de noticia, el titular y descripción si es que existe */}
                    <CardContent>
                        <Typography variant='body1' color={'error'}>{ author }</Typography>
                        <Typography variant='h5' component={'div'}>{ title }</Typography>
                        <Typography variant='body2'>{ description }</Typography>
                    </CardContent>

                    {/* Se agrega un link para ingresar a la noticia completa */}
                    <CardActions>
                        <Link 
                            href={url}
                            target='_blank'
                            variant='button'
                            width={'100%'}
                            textAlign='center'
                            sx={{ textDecoration: 'none'}}
                        >
                            Leer noticia
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </>
    )
}

export default Noticia