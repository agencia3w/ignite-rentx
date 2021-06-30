import React from 'react';
import { SvgProps } from 'react-native-svg';

interface Props {
    name: string;
    icon: React.FC<SvgProps>;
}

import {
    Container,
    Name
} from './styles';

export function AccessoryCar({ name, icon: Icon }: Props) {
    return (
        <Container>
            <Icon width={32} height={32} />
            <Name>{name}</Name>
        </Container>
    )
}