export default [
    {
      label: "Bank Name",
      field: "bankName",
      type: "text",
      size: "3/12",
    },
    {
      label: "Account Name",
      field: "accName",
      type: "text",
      size: "3/12",
    },
    {
      label: "Account Number",
      field: "accNumber",
      type: "number",
      size: "3/12",
    },
    {
      label: "Currency",
      field: "currency",
      child: [
        { text: "Dollar", key: "US" },
        { text: "Riel", key: "KM" },
      ],
      size: "3/12",
    }
  ]