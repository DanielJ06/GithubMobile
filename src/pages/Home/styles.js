import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  display: flex;
  flex: 1;
  padding: 18px;
`;

export const Header = styled.View`
  margin-top: 38px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
`;

export const Avatar = styled.Image`
  width: 38px;
  height: 38px;
  border-radius: 25px;
`;

export const Section = styled.View`
  margin-top: 25px;
`;

export const SectionTitle = styled.Text`
  font-size: 21px;
  font-weight: bold;
`;

export const Categories = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 18px;
  padding: 8px;
`;

export const CategoryName = styled.Text`
  margin-left: 8px;
  font-size: 16px;
`;
