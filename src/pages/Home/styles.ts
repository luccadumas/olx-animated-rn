// @ts-ignore
import styled from 'styled-components/native';
import colors from '../../constants/colors';

export const ContainerMain = styled.View`
  display: flex;
  align-items: center;
`;

export const InputNumber = styled.TextInput`
  color: rgba(48, 48, 48, 1);
  font-size: 18px;
  padding: 10px;
  text-align: center;
`;

export const BtnHandlerInformation = styled.TouchableOpacity`
  background-color: ${colors.primary};
  height: 55px;
  width: 60%;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
  border-radius: 6px;
  elevation: 8;
`;

export const TextBtnHandlerInformation = styled.Text`
  fontSize: 25px;
  color: ${colors.background}
`;

export const InputWeight = styled.TextInput.attrs((props: any) => ({
  placeholder: props.placeholder,
  value: props.value,
  placeholderTextColor: colors.primary
}))`
    font-size: 22px;
    color: ${colors.primary};
    width: 60%;
    border-width: 1px;
    border-radius: 6px;
    text-align: center;
`;