import React from 'react';
import { Space, Table, Tag } from 'antd';
import type { TableProps } from 'antd';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'antd/es/typography/Link';
interface DataType {
    // key: string;
    tenLop: string;
    id: number;
    maLop: string;
    tags: string[];
  }
const { Column } = Table;
const Test: React.FC = () =>{
   
    let token = localStorage.getItem("token");
    const [getdata, setData] = useState([]);
    console.log(getdata)
    useEffect(()=>{
        axios.get("http://192.168.5.240/api/v1/builder/form/lop-hoc/data?page=1&pageSize=10",
            {headers:
                {"API-Key" : "0177e09f564ea6fb08fbe969b6c70877",
                "Authorization": `Bearer ${token}`
                }
            }
        )
        .then(res=>{
            // console.log(res)
            setData(res.data.data)
        })
    },[])

    const del = (e: React.MouseEvent<HTMLElement>) => { 
      e.preventDefault();
      let getId = e.currentTarget.id;
      console.log(getId)
      axios.delete("http://192.168.5.240/api/v1/builder/form/lop-hoc/data",
      {
          headers: {
              "API-Key" : "0177e09f564ea6fb08fbe969b6c70877",
              "Authorization": `Bearer ${token}`
          },
          data : [getId]
      }        
      )
      .then(res=>{
          if(res.data.status == true){
              
          }
      })
    }


    interface DataType {
      key: string;
      tenLop: string;
      maLop: string;
      id: number;
      tags: string[];
    }
    
    const columns: TableProps<DataType>['columns'] = [
      {
        title: 'Ten Lop',
        dataIndex: 'tenLop',
        key: 'tenLop',
        render: (text) => <a>{text}</a>,
      },
      {
        title: 'Ma Lop',
        dataIndex: 'maLop',
        key: 'maLop',
      },
      {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
          <Space size="middle">
            <a>Invite</a>
            <a>Delete</a>
          </Space>
        ),
      },
    ];
return (
 <Table columns={columns} dataSource={getdata} />
) 

}
export default Test;

