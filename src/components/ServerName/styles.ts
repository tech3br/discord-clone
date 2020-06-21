import styled from 'styled-components';
import { ChevronsDown } from 'styled-icons/boxicons-solid'

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 0 11px 0 16px;

    background-color: var(--secondary);


    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 0px 0px;
    z-index: 2;
`;
export const Title = styled.div`
    font-size: 14px;
    font-weight: bold;
    color: var(--white);
`;
export const ExpandIcon = styled(ChevronsDown)`
    width: 20px;
    height: 20px;

    color: var(--white);
    cursor: pointer;
`;