import { useQuery } from '@apollo/client'
import React, { Component } from 'react'
import { useParams } from 'react-router-dom'
import { getProduct } from '../graphql/Queries'
import { ProductContainer } from '../styles/ProductStyles'

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {

  }

  render() {
    const { loading, data, type } = this.props.params
    console.log({ props: this.props })
    console.log(data)
    return (
      <ProductContainer>

        {
          loading ? <div>please wait...</div>
            :
            data?.product ?
              <div className='product-wrapper'>
                <div className='product-image-container'>

                  <div className='product-images-container'>
                    {data.product.gallery.map(gallery => (
                      <img className='images' src={gallery} alt='bestgallery' />
                    ))}
                  </div>
                  <img className='image-zoom' src={data.product.gallery[0]} alt="" />
                </div>

                <div className='product-attributes'>
                  <h3>{data?.product.name}</h3>
                  <div>Brand: {data?.product.brand}</div>
                  <div>Category: {data?.product.category}</div>
                  <div>Instock: {data?.product?.category.inStock}</div>

                  <div className='item-attributes'>
                    {data?.product?.attributes[0].items.map(item =>
                      <div>
                        <ul className='item-attributes'>
                          <li>{item.displayValue}</li>
                        </ul>
                      </div>
                    )}
                  </div>
                  <div>

                  </div>

                  <p className='product-price'>
                    PRICE:
                    <br />
                    {data?.product?.prices[1]?.currency.symbol}{data?.product?.prices[1]?.amount}
                  </p>
                  <button>ADD TO CART</button>
                  <div className='discription'>
                    {data?.product.description.replaceAll(/<\/?[^>]+(>|$)/g, '')}
                  </div>

                </div>


              </div>
              : null
        }

      </ProductContainer>

    )
  }
}

export const WithQuery = (Child) => {
  return function WithQuery(props) {
    const reactRouterParams = useParams()

    const params = useQuery(getProduct, { variables: { id: reactRouterParams.productId } })

    const allParams = { ...params, ...reactRouterParams }
    return <Child {...props} params={allParams} />;
  }
}


export default (WithQuery(ProductDescriptionPage))