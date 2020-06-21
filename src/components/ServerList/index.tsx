import React from 'react';

import { Container, Separator } from './styles';

import ServerButton from '../ServerButton/';

const ServerList: React.FC = () => {
    return (
        <Container>
            <ServerButton isHome={true} />
            <Separator />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton mentions={3}/>
            <ServerButton />
            <ServerButton mentions={72}/>
            <ServerButton />
            <ServerButton />
            <ServerButton hasNotifications />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
            <ServerButton />
        </Container>
    )
}
export default ServerList;