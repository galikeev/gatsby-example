import * as React from "react"
import { HeadFC, graphql } from "gatsby"

const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
interface Product {
  id: string;
  name: string;
  price: string;
}
interface ProductsQueryData {
  products: {
    nodes: Product[]
  }
}
interface IndexPageProps {
  data: ProductsQueryData
}

const IndexPage: React.FC<IndexPageProps> = ({data}) => {
  const products = data.products.nodes
console.log(data)
  return (
    <div style={pageStyles}>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  query {
    products: allProductsJson {
      nodes {
        id
        name
        price
      }
    }
  }
`

export const Head: HeadFC = () => <title>Home Page</title>
