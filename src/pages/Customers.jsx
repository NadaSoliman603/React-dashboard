import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
export const Customers = () => {
  return (
<div className='mt-10 m-2 md:m-4 p-2 md:p-10 bg-white rounded-3xl'>
    <Header cartegory="Page" title="Employees"/>
    <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      allowExcelExport
      allowPdfExport
      toolbar={['Delete']}
      width="auto"
      editSettings={{allowDeleting:true , allowEditing:true}}
    >
    <ColumnsDirective>
        {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
      </ColumnsDirective>
      <Inject services={[Page,   Toolbar  , Selection , Sort , Filter]} />
    </GridComponent>
  </div>  )
}
