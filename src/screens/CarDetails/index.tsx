import React from 'react';
import { useNavigation } from '@react-navigation/native';

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
    About,
    Accessories,
    Footer
} from './styles';

export function CarDetails() {
    const navigation = useNavigation();

    function handleConfirmRental(){
        navigation.navigate('Scheduling');
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
                    <AccessoryCar name="2 Pessoas" icon={peopleSvg} />
                </Accessories>

                <About>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    In eaque nulla magni quae id perferendis eveniet dolore earum quasi,
                    minus ducimus et totam, vel sapiente deserunt quam quidem distinctio ipsam!
                </About>
            </Content>

            <Footer>
                <Button title="Escolher período do aluguel" onPress={handleConfirmRental} />
            </Footer>
        </Container>
    )
}