// Componentes de MUI
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'

// Se importa un hook personalizado que usa el context
import useNoticias from '../hooks/useNoticias'

// Categorias que soporta la API
const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const Formulario = () => {
    // Se extraen el state de categoria y el metodo que la cambia
    const { categoria, handleChangeCategoria } = useNoticias()

    return (
        <form>
            <FormControl fullWidth>
                <InputLabel>Categoria</InputLabel>

                <Select label='categoria' onChange={handleChangeCategoria} value={categoria}>
                    { /* Se agregran las categorias al input  */
                        CATEGORIAS.map(categoria => (
                            <MenuItem
                                key={categoria.value}
                                value={categoria.value}
                            >
                                {categoria.label}
                            </MenuItem>
                        )) 
                    }
                </Select>
            </FormControl>
        </form>
    )
}

export default Formulario