import React, { useEffect, useState } from 'react';
import { Menu } from 'antd';
import axios from 'axios';
import { AppstoreOutlined, MailOutlined } from '@ant-design/icons';
import Link from 'antd/es/typography/Link';
const { SubMenu, Item } = Menu;

interface ChildItemProps {
    id: number;
    pageTitle: string;
    name: string;
    url: string
}

interface MenuItemProps {
    id: number;
    name: string;
    children: ChildItemProps[];
    pageTitle: string;
}

const App: React.FC = () => {
    const [data, setData] = useState<MenuItemProps[]>([]);

    useEffect(() => {
        axios.get("http://192.168.5.240/api/v2/menu/my-menu", {
                    headers: {
                        "API-Key": localStorage.getItem("api"),
                        "Authorization": `Bearer ${localStorage.getItem("token")}`
                    }
                })
                .then(res=>{
                    if (res.data.status === true) {
                        setData(res.data.data);
                    }else{
    
                    }
                })
                .catch (error =>{
                    console.error('Error fetching menu data:', error)
                 })
        },[])
             
        return (
            <Menu mode="inline" style={{ width: 256 }}>
                {data.map((menuItem) => (
                    <SubMenu key={menuItem.id} icon={<AppstoreOutlined />} title={menuItem.pageTitle}>
                        {menuItem.children.map((childItem) => (
                            <Item key={childItem.id} icon={<MailOutlined />}>
                                <Link href={childItem.url}>{childItem.pageTitle}</Link>
                            </Item>
                        ))}
                    </SubMenu>
                ))}
            </Menu>
        );
    
    }


export default App;