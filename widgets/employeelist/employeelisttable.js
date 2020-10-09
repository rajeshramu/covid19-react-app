import * as React from "react";
import { DataTable } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

const empdata = [
  {
    image: "RAJ",
    role: "DI LEAD",
    reload: "",
    desc: "lalala",
    status: "Good",
  },
  {
    image: "CP1",
    role: "DI Engineer",
    reload: "",
    desc: "blahblah",
    status: "Good",
  },
  {
    image: "CP2",
    role: "DI Engineer",
    reload: "",
    desc: "WaahWaah",
    status: "Good",
  },
];

export default function MyComponent() {
  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Image</DataTable.Title>
        <DataTable.Title>Role</DataTable.Title>
        <DataTable.Title>Reload</DataTable.Title>
        <DataTable.Title>Desc</DataTable.Title>
        <DataTable.Title>Status</DataTable.Title>
      </DataTable.Header>

      {empdata.map((element, index) => {
        return (
          <DataTable.Row>
            <DataTable.Cell>{element.image}</DataTable.Cell>
            <DataTable.Cell>{element.role}</DataTable.Cell>
            <DataTable.Cell>
              <AntDesign name="sync" size={15} color="black" />
            </DataTable.Cell>
            <DataTable.Cell>
              <AntDesign
                name="exclamationcircle"
                size={15}
                color="black"
                Text={element.desc}
              />
            </DataTable.Cell>
            <DataTable.Cell>{element.status}</DataTable.Cell>
          </DataTable.Row>
        );
      })}
      <DataTable.Pagination
        page={1}
        numberOfPages={3}
        onPageChange={(page) => {
          console.log(page);
        }}
        label="1-2 of 6"
      />
    </DataTable>
  );
}
