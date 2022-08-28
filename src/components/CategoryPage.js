import React, { Component } from 'react'
import { CategoryContainer } from '../styles/CategoryStyles'
import { useQuery } from '@apollo/client';
import { getCategories } from '../graphql/Queries';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
  }
  render() {
    const { loading, data } = this.props.params
    console.log(data)
    return (
      <CategoryContainer>
        <h2>Category:  </h2>
        {/* {data.categories[0]?.name} */}
        <main>
          {
            loading ? <div>Please wait...</div>
              :
              data?.categories?.length ?
                data.categories[0].products?.map(
                  product =>
                    <Link to={`/${product.id}`} key={product.id} className='product'>
                      <img src={product.gallery[0]}
                        alt={product.brand}
                      />
                      <p className='product-name'>{product.id.replaceAll("-", ' ')}</p>
                      <p className='product-price'>{product?.prices[0]?.currency.symbol}{product.prices[0]?.amount}</p>
                    </Link>
                )
                :
                null
          }
        </main>
      </CategoryContainer>
    )
  }
}
const WithQuery = (Child) => {
  return function WithQuery(props) {
    const params = useQuery(getCategories)
    return <Child {...props} params={params} />;
  }
}
const mapStateToProps = {}

export default (WithQuery(CategoryPage))



// export default connect(mapStateToProps, { setLoading, fetchMovie })(WithRouter(Movie))
