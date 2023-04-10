import { prisma } from '@/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req:NextApiRequest, res:NextApiResponse){
    
    if(req.method === 'POST')
    {
        const productData = req.body.product;
        const newProduct = await prisma.product.create({
            data: {
                    sku: productData.sku,
                    name: productData.name,
                    price: Number(productData.price),
                    type: productData.type,
                }
            })
            
        if(productData.type === 'dvd')
            {
                await prisma.size.create({
                    data:{
                        size: productData.size,
                        product: {
                            connect: {
                                id: newProduct.id
                        }
                    }
                }
            })
        }
        if(productData.type === 'book')
        {
            await prisma.weight.create({
                data:{
                    weight: productData.weigth,
                    product: {
                        connect: {
                            id: newProduct.id
                        }
                    }
                }
            })
        }
        if(productData.type === 'furniture')
        {
            await prisma.dimension.create({
                data:{
                    height: productData.heigth,
                    width: productData.width,
                    length: productData.length,
                    product: {
                        connect: {
                            id: newProduct.id
                        }
                    }
                }
            })
        }
        
        return res.status(201).json(newProduct);
    }
    
    if(req.method === 'DELETE')
    {
        const selectedToDelete = req.query['skuArray[]'];
        console.log(selectedToDelete);
        const deleteProducts = await prisma.product.deleteMany({
            where:
            {
                sku:{
                    in: selectedToDelete
                }
            }
        })
        return res.status(200).json(selectedToDelete);
    }

}