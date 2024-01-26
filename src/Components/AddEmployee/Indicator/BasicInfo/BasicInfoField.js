export default [
    {
      label: "First Name",
      field: "firstName",
      type: "text",
      size: "3/12",
    },
    {
      label: "Last Name",
      field: "lastName",
      type: "text",
      size: "3/12",
    },
    {
      label: "Middle Name",
      field: "middleName",
      type: "text",
      size: "3/12",
    },
    {
      label: "Maiden Name",
      field: "maidenName",
      size: "3/12",
    },
    {
      label: "Country",
      field: "countries",
      child: [
        { text: "United States", key: "US" },
        { text: "Cambodia", key: "CA" },
        { text: "France", key: "FR" },
        { text: "China", key: "DE" },
      ],
      size: "4/12",
    },
    {
      label: "City",
      field: "city",
      type: "text",
      size: "4/12",
    },
    {
      label: "Street",
      field: "street",
      type: "text",
      size: "4/12",
    },
    {
      label: "Email Address",
      field: "emailAddress",
      type: "text",
      size: "4/12",
    },
    {
      label: "Phone Number",
      field: "phone",
      type: "number",
      size: "4/12",
    },
    {
      label: "Alternative Phone Number",
      field: "alternativePhone",
      type: "number",
      size: "4/12",
    },
    {
      label: "Attendance Time",
      field: "attendanceTime",
      type: "time",
      size: "4/12",
    },
    {
      label: "Employee Type",
      field: "employeeType",
      child: [
        { text: "Developer", key: "US" },
        { text: "Research", key: "CA" },
        { text: "UX/UI", key: "FR" },
        { text: "Graphic Design", key: "DE" },
      ],
      size: "4/12",
    },
  ]