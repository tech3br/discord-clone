import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
    return (
        <Container>
            <Category>
                <span>Canais de Texto</span>
                <AddCategoryIcon />
            </Category>

            {/* <ChannelButton channelName="Chat-Livre"/>
            <ChannelButton channelName="JavaScript"/>
            <ChannelButton channelName="TypeScript"/>
            <ChannelButton channelName="Python"/>
            <ChannelButton channelName="HTML"/>
            <ChannelButton channelName="CSS"/>
            <ChannelButton channelName="ReactJS"/>
            <ChannelButton channelName="NodeJS"/>
            <ChannelButton channelName="Deno"/>
            <ChannelButton channelName="C"/>
            <ChannelButton channelName="C#"/>
            <ChannelButton channelName="C++"/> */}
        </Container>
    )
}

export default ChannelList;