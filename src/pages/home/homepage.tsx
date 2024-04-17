import React from 'react';
import { Layout, Flex } from 'antd';
import Menu_header from '../../components/header/menu-header';
import { Outlet } from 'react-router-dom';
import './_home.scss';
import Headers from '../../components/header/header';


const Homepage: React.FC = () =>{

  const { Header, Footer, Content } = Layout;

  const footerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#4096ff',
  };
  
  
return (
  <Flex gap="middle" wrap="wrap">
    <Layout className='style_layout'>
      <Header className='header_style'>
        <Headers />
      </Header>
      <Layout>
        <Content  className='content_style'>
          <div className='sider_style' >
            <Menu_header />
          </div>
            <div className='Outlet'><Outlet /></div>        
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  </Flex>
)
}

export default Homepage;




