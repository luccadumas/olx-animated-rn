// @ts-ignore
import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: ${colors.primary};
`;

export const Head = styled.View`
    flex-direction: row;
    align-items: center;
    margin-top: 18px;
    margin-bottom: 40px;
`;

export const Title = styled.Text`
    font-size: 22px;
    color: ${colors.primary};
    font-weight: 600;
`;