// Componentes de MUI
import { Container, Grid, Typography } from "@mui/material"

// Componentes propios
import Formulario from "./components/Formulario"
import ListadoNoticias from "./components/ListadoNoticias"

// Provider usando context
import { NoticiasProvider } from "./context/NoticiasProvider"

const App = () => {
  return (
    /* Toda la aplicacion se envuelve con el provider para usar los state o metodos dentro de él */
    <NoticiasProvider>
      <Container>
        <header>
          <Typography align="center" marginY={5} component='h1' variant="h3">
            Buscador de Noticias
          </Typography>
        </header>

        {/* Este Grid contiene el input para cambiar la categoria de las noticias */}
        <Grid container direction='row' justifyContent='center' alignItems='center'>
          <Grid item md={6} xs={12} lg={4}>
            <Formulario />
          </Grid>
        </Grid>

        <ListadoNoticias/>
      </Container>
    </NoticiasProvider>
  )
}

export default App