import React, { useState } from 'react';
import { Layout, Menu, Icon, Button } from 'antd';
import CreateEvent from './CreateEvent';
import EventList from './EventList';
import Event from './Models/Event';

const { Header, Content } = Layout;

const App: React.FC = () => {

  const [isVisible, toggleVisible] = useState(false);
  const [event, changeEvent] = useState(new Event());

  
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
        <Button  type="primary" onClick={() => {
            toggleVisible(true)
            changeEvent(new Event())
          }}  >Nuevo</Button>
        <EventList changeEvent={changeEvent} toggleVisible={toggleVisible} />
      </div>
    </Content>
    <CreateEvent isVisible={isVisible} close={() => toggleVisible(false)} event={event} />
  </Layout>
    
}

export default App;
