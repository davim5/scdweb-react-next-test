import { HeaderContainer, AddProductContainer, Form, Button, InputContainer } from "@/styles/pages/addproduct";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from "react";
import { prisma } from "@/lib/prisma";
import { api } from "@/lib/axios";
import { useRouter } from "next/router";


const addProductFormSchema = z.object({
    sku: z.string().min(1, {message:'Need to have at least 1 letter'}),
    name: z.string().min(1, {message:'Need to have at least 1 letter'}),
    price: z.number(),
    type: z.string(),
    size: z.number().optional(),
    weigth: z.number().optional(),
    width: z.number().optional(),
    heigth: z.number().optional(),
    length: z.number().optional(),
})

type ProductFormData = z.infer<typeof addProductFormSchema>

export default function AddProduct(){
    const router = useRouter();
    const [typeSelected, setTypeSelected ] = useState("dvd");

    const { register, handleSubmit, formState: {errors, isSubmitting} } = useForm({
        // resolver: zodResolver(addProductFormSchema)
    })

    const handleAddProduct = async (newProduct: ProductFormData) => 
    {
        await api.post('/products', {
            product: newProduct
        }).then(res=>{
            router.push('/');
            console.log(res);
        })

        
    }

    return(
        <>
        <HeaderContainer>
            <h1>Product Add</h1>
            <div>
                <button>Save</button>
                <Link href={'/'}>
                <button>Cancel</button>
                </Link>
            </div>
        </HeaderContainer>
        <AddProductContainer>
            <Form action="" onSubmit={handleSubmit(handleAddProduct)}>
            <InputContainer>
                <span>SKU: </span>
                <input type="text" id="sku" {...register('sku')}/>
            </InputContainer>
            <InputContainer>
                <span>Name: </span>
                <input type="text" id="name" {...register('name')}/>
            </InputContainer>
            <InputContainer>
                <span>Price: </span>
                <input type="text" id="price" {...register('price')}/>
            </InputContainer> 
            <InputContainer>
                <span>Type Switcher </span>
                <select id='productType' {...register('type')} onChange={(e) => setTypeSelected(e.target.value)}>
                    <option value="dvd">DVD</option>
                    <option value="book">Book</option>
                    <option value="furniture">Furniture</option>
                </select>
            </InputContainer>
            {typeSelected === "dvd" ? (
                <section>
                    <p>Please, provide size</p>
                    <InputContainer>
                        <span>Size (MB): </span>
                        <input type="text" id="size" {...register('size')}/>
                    </InputContainer> 
                </section>
            ) : typeSelected === "book" ? (
                <section>
                    <p>Please, provide weight</p>
                    <InputContainer>
                        <span>Weigth (KG): </span>
                        <input type="text" id="weight" {...register('weigth')}/>
                    </InputContainer> 
                </section>
            ) : (
                <section>
                    <p>Please, provide dimensions</p>
                    <InputContainer>
                        <span>Length (CM): </span>
                        <input type="text" id="length" {...register('length')}/>
                    </InputContainer> 
                    <InputContainer>
                        <span>Width (CM): </span>
                        <input type="text" id="width" {...register('width')}/>
                    </InputContainer> 
                    <InputContainer>
                        <span>Height (CM): </span>
                        <input type="text" id="heigth" {...register('heigth')}/>
                    </InputContainer> 
                </section>
            )}
            <Button type="submit" disabled={isSubmitting}>Submit</Button>
            </Form>
            
        </AddProductContainer>
        </>
        
    );
}