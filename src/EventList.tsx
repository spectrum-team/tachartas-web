import React from 'react';
import { Table, notification, Button } from 'antd';
import API from './API';
import Event from './Models/Event';
import { AxiosResponse } from 'axios';

export default class EventList extends React.Component<any, any> {
    state = {
        events: [] as Event[]
    }

    columns = [
        { title: 'Nombre', dataIndex: 'name' },
        { title: 'Lugar', dataIndex: 'venue' },
        { title: 'Fecha', dataIndex: 'date' },
        {
            title: '', render: (e: any) => <Button onClick={() => {
                this.props.changeEvent(e)
                this.props.toggleVisible(true)
            }} icon='edit' type='link' />
        },
        { title: '', render: () => <Button icon='delete' type='danger' /> },
    ]

    getEvents = () => {
        API.post('event/filter', {})
            .then((response: AxiosResponse) => this.setState({ events: response.data }))
            .catch(() => notification.error({ message: 'Ha ocurrido un error' }));
    }

    componentDidMount() {
        this.getEvents()
    }

    render() {
        return <Table
            size={'small'}
            dataSource={this.state.events}
            columns={this.columns} />
    }
}