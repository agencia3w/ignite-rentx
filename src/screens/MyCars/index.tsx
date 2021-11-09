import { useNavigation } from '@react-navigation/core';
import React, { useState, useEffect } from 'react';
import { Alert, StatusBar, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTheme } from 'styled-components/native';
import { BackButton } from '../../components/BackButton';
import { Car } from '../../components/Car';
import { LoadAnimation } from '../../components/LoadAnimation';

import { CarDTO } from '../../dtos/CarDTO';
import api from '../../services/api';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Content,
    Appointments,
    AppointmensTitle,
    AppointmensQuantity,
    CarWrapper,
    CarFooter,
    CarFooterTitle,
    CarFooterPeriod,
    CarFooterDate,
} from './styles';

interface CarProps {
    id: string;
    user_id: string;
    startDate: string;
    endDate: string;
    car: CarDTO
}

export function MyCars() {
    const [cars, setCars] = useState<CarProps[]>([]);
    const [loading, setLoading] = useState(true);
    const navigation = useNavigation();
    const theme = useTheme();

    function handleBack() {
        navigation.goBack();
    }

    useEffect(() => {
        async function fetchCars() {
            try {
                const response = await api.get('/schedules_byuser?user_id=1');
                console.log(response.data);
                setCars(response.data);
            } catch (error) {
                console.log(error)
                Alert.alert('Erro ao recuperar informações do carro');
            } finally {
                setLoading(false);
            }
        }

        fetchCars();
    }, [])

    return (
        <Container>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <Header>
                <BackButton onPress={handleBack} color={theme.colors.shape} />

                <Title>
                    Seus agendamentos {'\n'}
                    estão aqui.
                </Title>

                <SubTitle>
                    Conforto, segurança e praticidade.
                </SubTitle>
            </Header>
            {loading ? <LoadAnimation /> :
                <Content>
                    <Appointments>
                        <AppointmensTitle>Agendamentos feitos</AppointmensTitle>
                        <AppointmensQuantity>{cars.length}</AppointmensQuantity>
                    </Appointments>

                    <FlatList
                        data={cars}
                        keyExtractor={item => item.car.id}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <CarWrapper>
                                <Car
                                    data={item.car}
                                />
                                <CarFooter>
                                    <CarFooterTitle>Período</CarFooterTitle>
                                    <CarFooterPeriod>
                                        <CarFooterDate>{item.startDate}</CarFooterDate>
                                        <AntDesign
                                            name="arrowright"
                                            size={20}
                                            color={theme.colors.title}
                                            style={{ marginHorizontal: 10 }}
                                        />
                                        <CarFooterDate>{item.endDate}</CarFooterDate>
                                    </CarFooterPeriod>
                                </CarFooter>
                            </CarWrapper>
                        )
                        }
                    />
                </Content>
            }
        </Container>
    )
}