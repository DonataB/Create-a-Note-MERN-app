import React from "react";
import { Card, HomePageWrapper, Title, Text } from "./HomePage.style";

const HomePage = () => {
    return (
      <HomePageWrapper>
        <Card>
  
          {/* eslint-disable react/no-unescaped-entities */}
          <Title>Let's create some notes!</Title>
          <Text>
            Every day, all over the world, everyone - from young children to
            adults - takes notes...
          </Text>

        </Card>
      </HomePageWrapper>
    );
  };
  
  export default HomePage;
  