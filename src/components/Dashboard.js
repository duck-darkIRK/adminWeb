import React from 'react';
import { UserParameter, DetailChart, TopUser } from './index'


class Dashboard extends React.Component {

    render() {
        return (
            <>
                <UserParameter />
                <DetailChart />
                <TopUser />
            </>
        )
    }
}

export default Dashboard;