"use client"
import { DataTable } from "primereact/datatable"
import { Column } from "primereact/column"

import products from "@/assets/data/product.json"
import { Button } from "primereact/button"
import Link from "next/link"
import InterfaceProduct from "@/typescript/interfaceProduct"

export default function Home() {

  const columns = [
    {
      field: "Id", header: "Id"
    },
    {
      field: "CategoryId", header: "CategoryId"
    },
    {
      field: "Name", header: "Name"
    },
    {
      field: "Description", header: "Description"
    },
    {
      field: "ProductSettings", header: "ProductSettings", 
    }
  ]
  
  return (
   <>
    <DataTable value={products}>
      <Column field="Id" header="Id" sortable></Column>
      <Column field="CategoryId" header="CategoryId" sortable></Column>
      <Column field="Name" header="Name" sortable></Column>
      <Column field="Description" header="Description" sortable></Column>
      <Column field="ProductSettings" header="ProductSettings" body={ProductSettings}></Column>
      <Column field="" header="Action" body={EditButton}></Column>

    </DataTable>
   </> 
  )
} 

const ProductSettings = (rowData:InterfaceProduct) => {
  return rowData.ProductSettings.map((productSetting,i)=><p key={i}>{productSetting.Value}</p>)
}

const EditButton = (rowData:InterfaceProduct) => {
  return <Link href={`product-details?id=${rowData.Id}`}><Button>Edit</Button></Link>
}
