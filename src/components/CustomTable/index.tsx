import React, { useState } from 'react';
import {
  Table, Input, Button, Space,
} from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import './style.css';

type customTablePropType = {
  data: {
    key:string,
    name:string,
    branch:string,
    institute:string,
    feesPaid?:string,
    address:string,
    applicationid?:string,
    email?:string,
    marks?:string,

  }[],
  customTableColumnsData:{
    title:string,
    dataIndex:string,
    key: string,
    responsive: any[],
    sorter?: (a:any,b:any)=>number,
    sortDirections?:string[]
  }[]
}

export default function CustomTable({ data, customTableColumnsData }:customTablePropType) {
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  let searchInput:any;

  const handleSearch = (selectedKeys:string[], confirm:any, dataIndex:string) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters:any) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex:string) => ({
    filterDropdown: ({
      setSelectedKeys, selectedKeys, confirm, clearFilters,
    }:{setSelectedKeys:Function, selectedKeys:string[], confirm:any, clearFilters:Function}) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered:any) => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value:any, record:any) => (record[dataIndex]
      ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
      : ''),
    onFilterDropdownVisibleChange: (visible:boolean) => {
      if (visible) {
        setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text:any) => (searchedColumn === dataIndex ? (
      <Highlighter
        highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
        searchWords={[searchText]}
        autoEscape
        textToHighlight={text ? text.toString() : ''}
      />
    ) : (
      text
    )),
  });

  /**  data related to columns,
   *  will be coming from props and we need to destruct the incoming ,
   *  as well as the search-props that is defined above.
   *
   * */
  const columns:any[] = [];
  if (customTableColumnsData !== undefined) {
    customTableColumnsData.forEach((element) => {
      columns.push(
        {
          ...getColumnSearchProps(element.key),
          ...element,
        },
      );
    });
  }

  return (
    <Table
      columns={columns}
      pagination={{
        pageSize: 5,
      }}
      bordered
      dataSource={data}
      scroll={{ x: 1300 }}
    />
  );
}
