import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import {useLocation} from 'react-router-dom'
import CategoriesLogo from '../../assets/categories-logo.png'
import { Container, ProductsImg, CategoryButton, CategoriesMenu, ProductsContainer } from './styles'
import { CardProduct } from '../../components'
import formatCurrency from '../../utils/formatCurrency'
import api from '../../services/api'


export function Products() {



    const [categories, setCategories] = useState([])
    const [products, setProducts] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])
    const [activeCategory, setActiveCategory] = useState(0)
    const { state } = useLocation()

    useEffect(() => {
        if (state?.categoryId) {
          setActiveCategory(state?.categoryId)
        }
      }, [state?.categoryId])

    useEffect(() => {

        async function loadCategories() {
            const { data } = await api.get('categories')

            const newCategories = [{ id: 0, name: "Todas" }, ...data]

            setCategories(newCategories)
        }

        async function loadProducts() {
            const { data: allProducts } = await api.get('products')

            const newProducts = allProducts.map(product => {
                return { ...product, formatedPrice: formatCurrency(product.price) }
            })


            setProducts(newProducts)
        }


        loadProducts()
        loadCategories()

    }, [])

    useEffect(() => {

        if (activeCategory === 0) {
            setFilteredProducts(products)
        } else {

            const newFilteredProducts = products.filter(
                product => product.category_id === activeCategory)

            setFilteredProducts(newFilteredProducts)
        }
    }, [activeCategory, products])

    return (
        <Container>
            <ProductsImg src={CategoriesLogo} alt="Logo da home" />
            <CategoriesMenu>
                {categories && categories.map(category => (
                    <CategoryButton type="button"
                        key={category.id}
                        isActiveCategory={activeCategory === category.id}
                        onClick={() => {
                            setActiveCategory(category.id)
                        }}
                    >
                        {category.name}
                    </CategoryButton>
                ))}
            </CategoriesMenu>

            <ProductsContainer>

                {filteredProducts && filteredProducts.map(product => (
                    <CardProduct key={product.id} product={product} />
                ))}

            </ProductsContainer>
        </Container>
    )
}

Products.propTypes = {
    location: PropTypes.object
}