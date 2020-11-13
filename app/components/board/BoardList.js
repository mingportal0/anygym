import * as React from 'react';
import { DataTable, Searchbar } from 'react-native-paper';
import { StatusBar } from "react-native";

const itemsPerPage = 2;

const items = [
  {
      id: 1,
    key: 1,
    name: 'Page 1',
  },
  {
    id: 2,
    key: 2,
    name: 'Page 2',
  },
  {
    id: 3,
    key: 3,
    name: 'Page 3',
  },
];
const headerData = [
    {id: 1, name: 'no', isNumeric: false}
    , {id: 2, name: 'title', isNumeric: false}
    , {id: 3, name: 'write', isNumeric: false}
    , {id: 4, name: 'date', isNumeric: false}
]
const getRowData = () =>{
    let rowData = []
    for(let i=1; i<=10; i++){
        rowData.push({
            id: [i]
            , no: `${i}`
            , title: `제목${i}`
            , writer: `작성자${i}` 
            , date: `2020-11-${i}` 
        })
    }
    return rowData;
}
export default function BoardList() { 
    const TableGrid = () => {      
        const [page, setPage] = React.useState(0);
        const from = page * itemsPerPage;
        const to = (page + 1) * itemsPerPage;

        return (
            <DataTable>
                <DataTable.Header>
                    {headerData.map((item)=>{
                        return <DataTable.Title numeric={item.isNumeric}>{item.name}</DataTable.Title>
                    })}
                </DataTable.Header>
                
                {
                    getRowData().map((item)=>{
                        return  <DataTable.Row>
                                    <DataTable.Cell>{item.no}</DataTable.Cell>
                                    <DataTable.Cell>{item.title}</DataTable.Cell>
                                    <DataTable.Cell>{item.writer}</DataTable.Cell>
                                    <DataTable.Cell numeric>{item.date}</DataTable.Cell>
                                </DataTable.Row>
                    })
                }                             
                <DataTable.Pagination
                    page={page}
                    numberOfPages={Math.floor(items.length / itemsPerPage)}
                    onPageChange={page => setPage(page)}
                    label={`${from + 1}-${to} of ${items.length}`}
                />
                
            </DataTable>
        );
    };

    return (
        <>        
            <StatusBar/>            
            <TableGrid/>
            <Searchbar/>
        </>
    );
}
