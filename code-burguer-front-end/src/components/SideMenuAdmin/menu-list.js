import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import ListIcon from '@mui/icons-material/List';
import paths from '../../constants/paths';
import AddIcon from '@mui/icons-material/Add';

const listLinks = [
    {
        id: 1,
        label: 'Pedidos',
        link: paths.Order,
        icon: ShoppingBagIcon
    },
    {
        id: 2,
        label: 'Listar Produtos',
        link: paths.Products,
        icon: ListIcon
    },
    {
        id: 3,
        label: 'Adicionar Produtos',
        link: paths.NewProduct,
        icon: AddIcon
    }
]

export default listLinks