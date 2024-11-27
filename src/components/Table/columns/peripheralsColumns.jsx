export const peripheralsColumn = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (props) => <span>{props.getValue()}</span>,
    minSize: 100,
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
    cell: (props) => {
      const status = props.getValue();
      const statusClasses = {
        "Not Used": "text-alert-error-text bg-alert-error-text",
        Used: "text-alert-success-text bg-alert-success-text",
        Draft: "text-alert-pending-text bg-alert-pending-text",
      };

      const [textClass, bgClass] = statusClasses[status]?.split(" ") || [];

      return (
        <span className={`flex flex-row items-center gap-x-md ${textClass}`}>
          <span className={`h-1.5 w-1.5 ${bgClass}`}></span>
          {status}
        </span>
      );
    },
  },
  {
    accessorKey: "value",
    header: "Asset Value (RM)",
    cell: (props) => <span>{props.getValue()}</span>,
  },
];
