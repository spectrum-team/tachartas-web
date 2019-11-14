import React from 'react';
import { Layout, Menu, Icon, Table } from 'antd';

const { Header, Content } = Layout;

const App: React.FC = () => {

  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ];

  return <Layout className="layout" style={{ height: 'inherit' }}>
    <Header style={{ background: '#7200ca' }}>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px', background: 'transparent' }}>
        <Menu.Item key="1"><Icon type={'caret-right'} />Eventos abiertos</Menu.Item>
        <Menu.Item key="2"><Icon type={'container'} />Histórico</Menu.Item>
        <Menu.Item key="3"><Icon type={'setting'} />Configuración</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '20px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: '100%' }}>
      <Table dataSource={dataSource} columns={columns} />;
      </div>
    </Content>
  </Layout>
    ;
}

export default App;
