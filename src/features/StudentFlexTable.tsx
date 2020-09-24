import * as React from "react";
import { Flex, Box } from "theme-ui";

// normal table in case they wanna have it

const StudentFlexTable = () => {
  return (
    <Box>
      <Flex>
        <Box>Name</Box>
        <Box>Alter</Box>
        <Box>Klasse</Box>
        <Box>Aktion</Box>
      </Flex>
      <Flex></Flex>
    </Box>
  );
};

export default StudentFlexTable;
