"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import {useSearchParams} from "next/navigation"

import products from "@/assets/data/product.json"
import categories from "@/assets/data/category.json"
import settings from "@/assets/data/setting.json"
import InterfaceProduct from "@/typescript/interfaceProduct"

import { Button } from "primereact/button"
import { InputText } from "primereact/inputtext"
import { InputTextarea } from "primereact/inputtextarea"
import { Dropdown, DropdownChangeEvent } from "primereact/dropdown"
import { InputNumber, InputNumberChangeEvent } from "primereact/inputnumber"

const ProductDetails = () => {

  const params = useSearchParams()
  const productIdBySearchParam = params.get("id")
  const [product, setProduct] = useState<InterfaceProduct>({
    Id:0,
    CategoryId:0,
    Name:"",
    Description:"",
    ProductSettings:[{
      SettingId:0,
      Value:""
    }]
  })

  function getProductById(id:number){
    setProduct(products.find(product=>product.Id === id) || product)
  }

  useEffect(()=>{
    getProductById(Number(productIdBySearchParam))
  },[])

  function changeProduct(name:any, value:any){
    setProduct(prev=>({...prev, [name]: value}))
  }

  function changeProductSettings(i:number, name: any, value:any){

    const localProductSettings = [...product!.ProductSettings]

    localProductSettings.map((localProductSetting,k)=>{
      if(k===i){
        name === "SettingId" ? localProductSetting.SettingId = value : localProductSetting.Value = value
      }
    })

    setProduct(prev=>({...prev, ProductSettings: localProductSettings}))
    
  }

  function addProductSettings(){

    setProduct(prev=>({...prev, ProductSettings: [...prev?.ProductSettings, {SettingId: 1, Value: ""}]}))
    
  }

  function removeProductSettings(i:number){

    const localProductSettings = [...product!.ProductSettings]

    localProductSettings.splice(i,1)

    setProduct(prev=>({...prev, ProductSettings: localProductSettings}))
    
  }

  function getCategoryById(id:number){

    return categories.find(category=>category.Id === id)
    
  }

  function getSettingById(id:number){

    return settings.find(setting=>setting.Id === id)
    
  }

  return (
    <div style={{display: "flex", flexDirection: "column"}}>
      
      <div style={{display: "flex", borderBottom: "1px solid #aaa", padding: "10px"}}>
        <Link href="/" style={{width: "33.33%"}}><Button>Back</Button></Link>
        <h1 style={{width: "33.33%", margin: 0, textAlign: "center"}}>Product Details</h1>
      </div>

      <div style={{padding: "10px", display: "flex", flexDirection: "column"}}>

        {
          product ?
          <>
            <div style={{display: "flex", marginBottom: "10px", width: "800px"}}>
              <p style={{width: "150px"}}>Id:</p>
              <InputNumber name="Id" value={product?.Id} style={{width: "650px"}} onChange={(e: InputNumberChangeEvent)=>changeProduct("Id", e.value)} useGrouping={false} />
            </div>

            <div style={{display: "flex", marginBottom: "10px", width: "800px"}}>
              <p style={{width: "150px"}}>CategoryId:</p>
              <Dropdown name="CategoryId" value={getCategoryById(product?.CategoryId)} style={{width: "650px"}} options={categories} optionLabel="Name" onChange={(e: DropdownChangeEvent)=>changeProduct(e.target.name, e.target.value.Id)}/>
            </div>

            <div style={{display: "flex", marginBottom: "10px", width: "800px"}}>
              <p style={{width: "150px"}}>Name:</p>
              <InputText name="Name" value={String(product?.Name)} style={{width: "650px"}} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>changeProduct(e.target.name, e.target.value)}/>
            </div>

            <div style={{display: "flex", marginBottom: "10px", width: "800px"}}>
              <p style={{width: "150px"}}>Description:</p>
              <InputTextarea name="Description" value={String(product?.Description)} style={{width: "650px", maxWidth: "650px", minWidth: "650px", height: "100px", minHeight: "100px"}} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>)=>changeProduct(e.target.name, e.target.value)}/>
            </div>

            <div style={{display: "flex", marginBottom: "10px", width: "800px"}}>
              <p style={{width: "150px"}}>Product Settings:</p>
              <div style={{display: "flex", flexDirection: "column", width: "650px"}}>
                <Button onClick={()=>addProductSettings()} style={{marginBottom: "5px"}}>Add new setting</Button>
                <table>
                  <thead>
                    <tr>
                      <td style={{border: "1px solid #000"}}>SettingId</td>
                      <td style={{border: "1px solid #000"}}>Value</td>
                      <td style={{border: "1px solid #000"}}>Action</td>
                    </tr>
                  </thead>

                  <tbody>
                    {
                      product?.ProductSettings.map((productSetting,i)=>
                        <tr key={i}>
                          <td style={{border: "1px solid #000"}}>
                            <Dropdown name="SettingId" value={getSettingById(productSetting.SettingId)} style={{width: "100%"}} options={settings} optionLabel="Name" onChange={(e: DropdownChangeEvent)=>changeProductSettings(i, e.target.name, e.target.value.Id)}/>
                          </td>
                          <td style={{border: "1px solid #000"}}>
                            <InputText name="Value" value={productSetting.Value} style={{width: "100%"}} onChange={(e: React.ChangeEvent<HTMLInputElement>)=>changeProductSettings(i, e.target.name, e.target.value)}/>
                          </td>
                          <td style={{border: "1px solid #000"}}>
                            <Button onClick={()=>removeProductSettings(i)}>Remove</Button>
                          </td>
                        </tr>
                      )
                    }
                  </tbody>
                </table>
              </div>
            </div>
          </>
          : <p>Product not found</p>
        }

      </div>
    </div>
  )
}

export default ProductDetails