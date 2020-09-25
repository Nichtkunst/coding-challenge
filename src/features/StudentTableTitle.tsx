/** @jsx jsx */
import * as React from "react";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { Flex, Text, jsx } from "theme-ui";

const StudentTableTitle = (props: {
  title: string;
  filterAsc: () => void;
  filterDesc: () => void;
}) => {
  return (
    <Flex sx={{ flexDirection: "row", alignItems: "center" }}>
      <Text mr={2} sx={{ color: "#fff", fontWeight: "bold" }}>
        {props.title}
      </Text>
      <Flex
        sx={{
          flexDirection: "column"
        }}
      >
        <AiOutlineUp
          sx={{ cursor: "pointer", color: "#fff" }}
          onClick={props.filterAsc}
        />
        <AiOutlineDown
          sx={{ cursor: "pointer", color: "#fff" }}
          onClick={props.filterDesc}
        />
      </Flex>
    </Flex>
  );
};

export default StudentTableTitle;
