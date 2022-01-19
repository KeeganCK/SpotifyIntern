import styled from 'styled-components';
import { Spin, Button, DatePicker } from 'antd';

export const ShopifyH1 = styled.h1`
    margin-top: 2em;
    display: flex;
    justify-content: center;
    color: white;
`;

export const CardDiv = styled.div`
    margin-top: 1em;
    display: flex;
    justify-content: center;
    padding-bottom 2em;
`;

export const Spinner = styled(Spin)`
    .ant-spin-dot-item {
        background-color: #008060;
    }
`;

export const CustomButton = styled(Button)`
    border-color: #008060  !important;
    background-color: #008060 !important;
    color: white !important;
    border-radius: 4px;
    width: 100px;
    :hover {
        border-color: #008060  !important;
        background-color: #004c3f !important;
    }
    margin-right: 1em;
`;

export const CustomDatePicker = styled(DatePicker)`

`;