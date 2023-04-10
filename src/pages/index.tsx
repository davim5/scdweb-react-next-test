import { api } from '@/lib/axios';
import { prisma } from '@/lib/prisma';
import { HeaderContainer, HomeContainer, Product } from '@/styles/pages/home'
import Head from 'next/head'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface IProduct {
  sku:string,
  name:string,
  price: string,
  type: string,
  attribute: string,
};

interface HomeProps {
  initialProducts: IProduct[];
}

export default function Home({ initialProducts }:HomeProps) {
  const [ products, setProducts ] = useState<IProduct[]>(initialProducts);
  const [ productsChecked, setProductsChecked ] = useState<string[]>();
  const [checkedState, setCheckedState] = useState<boolean[]>(
    new Array(products.length).fill(false)
  );

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedState(updatedCheckedState);
  };

  function resetCheckedState(updatedProducts:IProduct[]){
    setCheckedState(new Array(updatedProducts.length).fill(false))
  }

  function generateSkuArray()
  {
    const skuArray = products.map((product,i) => {
      if (checkedState[i]) return product.sku
    }).filter((sku) => sku !== undefined);

    return skuArray;
  }

  useEffect(()=> {
    setProductsChecked(generateSkuArray())
},[checkedState])

  useEffect(() => {
    console.log(productsChecked)
  },[productsChecked])

  const handleMassDelete = async (skuArray: string[]) => 
    {
        await api.delete('/products', {
            params:{
              skuArray:skuArray
            }
        }).then(res=>{
          console.log(res);
          const updatedProducts = products.filter(product => !skuArray.includes(product.sku));
          setProducts(updatedProducts);
          resetCheckedState(updatedProducts);
        })
    }
  
  // console.log(productsChecked);
  return (
    <>
    <Head>
      <title> Home | Scandiweb </title>
    </Head>
    <HeaderContainer>
      <h1>Product List</h1>
      <div>
        <Link href={'/addproduct'}>
          <button >Add</button>
        </Link>
        <button id='delete-product-btn' onClick={() => handleMassDelete(productsChecked)}>Mass Delete</button>
      </div>
    </HeaderContainer>
    <HomeContainer>
      {products.map((product,index) => {
        return (
          <Product key={product.sku}>
            <input 
            className='delete-checkbox' 
            value={product.sku} 
            type="checkbox" 
            name="" 
            id=""
            checked={checkedState[index]} 
            onChange={() => handleOnChange(index)}/>
            <div>
              <span>{product.sku}</span>
              <span>{product.name}</span>
              <span>{product.price}</span>
              <span>{product.attribute}</span>
            </div>
          </Product>
        )
      })}
      
    </HomeContainer>
    </>
  )
}

export async function getServerSideProps(){
  const data = await prisma.product.findMany(
    {
      include: {
        Weight: true,
        Size: true,
        Dimension: true,
      }
    },
  );

  // function manageAttribute() {

  // }
  
  const products = data.map((product) => {
    return {
      sku: product.sku,
      name: product.name,
      price: new Intl.NumberFormat('en-US', {
        style:'currency',
        currency:'USD'
      }).format(product.price),
      attribute: product.Weight[0] ? (new Intl.NumberFormat('en-US', {
        style:'unit',
        unit:'kilogram'
      }).format(Number(product.Weight[0].weight))) 
      : product.Size[0] ? 
      (new Intl.NumberFormat('en-US', {
        style:'unit',
        unit:'megabyte'
      }).format(Number(product.Size[0].size))) : 
      `${product.Dimension[0].height}x${product.Dimension[0].length}x${product.Dimension[0].width}`
    }
  })
  return {
    props: {
      initialProducts: products
    }
  }
}
