import React from 'react';

import { useNavigation } from '@react-navigation/native';
import Icons from '@expo/vector-icons/FontAwesome5';

import {
    Container,
    Header,
    Title,
    Avatar,
    Section,
    SectionTitle,
    Categories,
    CategoryName,
} from './styles';

const Home = () => {
  const navigation = useNavigation();

  function navigateToRepos() {
    navigation.navigate("Repositories")
  }

  return (
      <Container>
          <Header>
              <Title>Home</Title>
              <Avatar source={{uri: "https://avatars3.githubusercontent.com/u/56522385?s=460&u=06fe342b22147506c0fd975b1ae96d4ec3bfe7bd&v=4"}} />
          </Header>

          <Section>
              <SectionTitle>My Work</SectionTitle>

              <Categories>
                  <Icons name="exclamation-circle" size={32} />
                  <CategoryName>Issues</CategoryName>
              </Categories>
              <Categories>
                    <Icons name="code-branch" size={32} />
                  <CategoryName>Pull requests</CategoryName>
              </Categories>
              <Categories onPress={navigateToRepos} >
                  <Icons name="book" size={32} />
                  <CategoryName>Repositories</CategoryName>
              </Categories>
              <Categories>
                  <Icons name="user-friends" size={32} />
                  <CategoryName>Organizations</CategoryName>
              </Categories>
          </Section>
      </Container>
  );
}

export default Home;
