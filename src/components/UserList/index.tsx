import React from 'react';

import { Container, Role, User, Avatar } from './styles';

export interface UserProps {
    nickname: string;
    isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({
    nickname, isBot
}) => {
    return (
        <User>
            <Avatar className={isBot ? 'bot' : ''} />
            <strong>{nickname}</strong>

            {isBot && <span>Bot</span>}
        </User>
    )
}

const UserList: React.FC = () => {
    return (
        <Container>
            <Role>Disponivel - 1</Role>
            <UserRow nickname="Daniel Filgueira" />
            <UserRow nickname="Daniel Filgueira" />
            <UserRow nickname="Daniel Filgueira" />
            <UserRow nickname="Daniel Filgueira" />
            <UserRow nickname="Daniel Filgueira" />
            <UserRow nickname="Daniel Filgueira" />
            <UserRow nickname="Daniel Filgueira" />
            <UserRow nickname="Daniel Filgueira" />
            <UserRow nickname="Daniel Filgueira" />
            
            <Role>Offline - 18</Role>
            <UserRow nickname="Guilherme Rodz" isBot={true} />
            <UserRow nickname="Guilherme Rodz" isBot={true} />
            <UserRow nickname="Guilherme Rodz" isBot={true} />
            <UserRow nickname="Guilherme Rodz" isBot={true} />
            <UserRow nickname="Guilherme Rodz" isBot={true} />
            <UserRow nickname="Guilherme Rodz" isBot={true} />
            <UserRow nickname="Guilherme Rodz" isBot={true} />
        </Container>
    )
}

export default UserList;