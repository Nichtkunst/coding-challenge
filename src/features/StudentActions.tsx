import * as React from "react";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Button } from "theme-ui";

import { useStore } from "../store";

const StudentActions = (props: {
  studentId: number;
  setToggle: () => void;
}) => {
  const store = useStore();
  return (
    <>
      <Button
        mr={2}
        variant="secondary"
        onClick={() => store.deleteStudent(props.studentId)}
      >
        <AiOutlineDelete />
      </Button>
      <Button variant="secondary" onClick={props.setToggle}>
        <AiOutlineEdit />
      </Button>
    </>
  );
};

export default StudentActions;
