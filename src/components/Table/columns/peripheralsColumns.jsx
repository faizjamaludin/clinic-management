export const peripheralsColumn = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => <span>{props.getValue()}</span>,
    minSize: 300,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: (props) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "assignTo",
    header: "Assign To",
    cell: (props) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "value",
    header: "Asset Value (RM)",
    cell: (props) => <span>{props.getValue()}</span>,
  },
];
