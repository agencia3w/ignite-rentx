import { getBottomSpace, getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

interface DateValueProps {
    selected: boolean;
}

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background_secondary};
`;

export const Header = styled.View`
    width: 100%;
    height: 325px;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.header};
    padding: 25px;
    padding-top: ${getStatusBarHeight()}px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};    
    font-family: ${({ theme }) => theme.fonts.secondary_600};
    font-size: ${RFValue(34)}px;
    margin-top: 24px;
`;

export const RentalPeriod = styled.View`
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top:32px;
`;

export const DateInfo = styled.View`
    width: 30%;
`;

export const DateTitle = styled.Text`
    color: ${({ theme }) => theme.colors.text};    
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    font-size: ${RFValue(10)}px;
`;

export const DateValue = styled.Text<DateValueProps>`
    color: ${({ theme }) => theme.colors.shape};    
    font-family: ${({ theme }) => theme.fonts.primary_500};
    font-size: ${RFValue(15)}px;

    ${({ selected, theme }) => !selected && css`
        border-bottom-width: 1px;
        border-bottom-color: ${theme.colors.main};
        padding-bottom: 5px;
    `};
`;

export const Content = styled.ScrollView.attrs({
    contentContainerStyle:{
        paddingBottom: 24
    },
    showsVerticalScrollIndicator: false
})``;

export const Footer = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background_primary};
    padding: 24px 24px ${getBottomSpace() + 24}px;
    box-shadow: 5px 5px 25px ${({theme}) => theme.colors.text};
    /* padding: 24px; */
`;