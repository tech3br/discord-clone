import React from 'react';
import { Button } from './styles'

export interface Props {
    selected ?: boolean;
    isHome ?: boolean;
    hasNotifications ?: boolean;
    mentions ?: Number;
}

const ServerButton: React.FC<Props>= ({
    selected,
    isHome,
    hasNotifications,
    mentions,
}) => {
    return (
        <Button>
            {isHome && <span>T3</span>}
        </Button>
    )
}
 
export default ServerButton;