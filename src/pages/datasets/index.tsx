
import { DataTable } from "@grepsr/components/dataTable"
import DataSetHeader from "./DataSetHeader"
import { Text, VStack } from "@chakra-ui/react"
import { useMemo } from "react";
import {  ColumnDef, Row } from "@tanstack/react-table";
import { useGetDataSet } from "@grepsr/components/service/service-dataset";

const DataSets = () => {
  const columns = useMemo(
    () =>
      [
        {
          header: "Product name",
          accessorKey: "name",
        },
        {
          header: "Email", 
 accessorKey:"email"},
        {
          header: "City",
          cell: ({ row }: { row: Row<{ address: {city:string} }> }) => {
         
            return (<Text>{row.original.address.city}</Text>)
        }},
        {
          header: "Brand",
          accessorKey: "username",
        },
        {
          header: "Availability",
          accessorKey: "website",
        },

      ] as ColumnDef<string, string>[],
    []
  );
  const{data, isLoading}=useGetDataSet()

  return (
<VStack>
<DataSetHeader/>
<DataTable data={data} columns={columns} isLoading={isLoading}/>
</VStack>
  )
}

export default DataSets