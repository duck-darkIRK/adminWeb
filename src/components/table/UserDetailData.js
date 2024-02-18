import React from "react";
import { CTable } from "@coreui/react";

const UserDetailData = (props) => {
  const columns = [
    {
      key: "count",
      label: "#",
      _props: { scope: "col" },
    },
    {
      key: "Data",
      _props: { scope: "col" },
    },
    {
      key: "Value",
      label: "Value",
      _props: { scope: "col" },
    },
  ];


  return (
    <>
      <CTable
        columns={columns}
        items={props.detailData}
        style={{
          margin: 0,
          border: "1px solid black",
        }}
      />
    </>
  );
};

export default UserDetailData;
