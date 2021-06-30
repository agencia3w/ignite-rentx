import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons'

import { RFValue } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

import { BackButton } from '../../components/BackButton';
import { ImageSlider } from '../../components/ImageSlider';
import { AccessoryCar } from '../../components/AccessoryCar';
import { Button } from '../../components/Button';

import speedSvg from '../../assets/speed.svg';
import accelerationSvg from '../../assets/acceleration.svg';
import forceSvg from '../../assets/force.svg';
import gasolineSvg from '../../assets/gasoline.svg';
import exchangeSvg from '../../assets/exchange.svg';
import peopleSvg from '../../assets/people.svg';

import {
    Container,
    Header,
    CarImages,
    Content,
    Details,
    Description,
    Brand,
    Name,
    Rent,
    Period,
    Price,
    Accessories,
    Footer,
    RentalPeriod,
    CalendarIcon,
    DateInfo,
    DateTitle,
    DateValue,
    RentalPrice,
    RentalPriceLabel,
    RentalPriceDetails,
    RentalPriceQuota,
    RentalPriceTotal
} from './styles';


export function SchedulingDetails() {
    const theme = useTheme();

    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('SchedulingComplete');
    }
    return (
        <Container>
            <Header>
                <BackButton onPress={() => { }} />
            </Header>

            <CarImages>
                <ImageSlider imagesUrl={['https://www.motortrend.com/uploads/sites/10/2018/05/2018-audi-rs5-4wd-coupe-angular-front.png']} />
            </CarImages>

            <Content>
                <Details>
                    <Description>
                        <Brand>Lamborgini</Brand>
                        <Name>Huracan</Name>
                    </Description>


                    <Rent>
                        <Period>Ao dia</Period>
                        <Price>R$ 500</Price>
                    </Rent>
                </Details>

                <Accessories>
                    <AccessoryCar name="380Km" icon={speedSvg} />
                    <AccessoryCar name="3.2s" icon={accelerationSvg} />
                    <AccessoryCar name="800 HP" icon={forceSvg} />
                    <AccessoryCar name="Gasolina" icon={gasolineSvg} />
                    <AccessoryCar name="Auto" icon={exchangeSvg} />
                    <AccessoryCar name="2 " icon={peopleSvg} />
                </Accessories>

                <RentalPeriod>
                    <CalendarIcon>
                        <Feather
                            name="calendar"
                            size={RFValue(24)}
                            color={theme.colors.shape}
                        />
                    </CalendarIcon>

                    <DateInfo>
                        <DateTitle>DE</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>
                    <Feather
                        name="chevron-right"
                        size={RFValue(10)}
                        color={theme.colors.text}
                    />
                    <DateInfo>
                        <DateTitle>ATÉ</DateTitle>
                        <DateValue>18/06/2021</DateValue>
                    </DateInfo>

                </RentalPeriod>

                <RentalPrice>
                    <RentalPriceLabel>TOTAL</RentalPriceLabel>
                    <RentalPriceDetails>
                        <RentalPriceQuota>R$ 580 x 3 diárias</RentalPriceQuota>
                        <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
                    </RentalPriceDetails>
                </RentalPrice>
            </Content>

            <Footer>
                <Button title="Alugar agora" color={theme.colors.success} onPress={handleConfirmRental} />
            </Footer>
        </Container>
    )
}