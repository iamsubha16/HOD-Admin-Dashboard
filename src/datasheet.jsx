import { Avatar } from "@mui/material";

export const userRows = [
  {
    id: 1,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Jon Snow",
    email: "idontknow@xyz.com",
    age: 35,
    status: "active",
  },
  {
    id: 2,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Cersei Lannister",
    email: "idontknow@xyz.com",
    age: 42,
    status: "passive",
  },
  {
    id: 3,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Jaime Lannister",
    email: "idontknow@xyz.com",
    age: 45,
    status: "active",
  },
  {
    id: 4,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: " Arya Stark",
    email: "idontknow@xyz.com",
    age: 16,
    status: "active",
  },
  {
    id: 5,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Daenerys Targaryen",
    email: "idontknow@xyz.com",
    age: 24,
    status: "pending",
  },
  {
    id: 6,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Mintu BC",
    email: "idontknow@xyz.com",
    age: 69,
    status: "pending",
  },
  {
    id: 7,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Mintu BC",
    email: "idontknow@xyz.com",
    age: 69,
    status: "active",
  },
  {
    id: 8,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Mintu BC",
    email: "idontknow@xyz.com",
    age: 69,
    status: "active",
  },
  {
    id: 9,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Mintu BC",
    email: "idontknow@xyz.com",
    age: 69,
    status: "active",
  },
  {
    id: 10,
    image: "https://www.emmegi.co.uk/wp-content/uploads/2019/01/User-Icon.jpg",
    username: "abcd398",
    fullName: "Mintu BC",
    email: "idontknow@xyz.com",
    age: 69,
    status: "passive",
  },
];

export const userColumns = [
  {
    field: "id",
    headerName: "ID",
    type: "number",
    width: 100,
  },
  {
    field: "user",
    headerName: "User",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 250,
    renderCell: (params) => {
      return (
        <div className="cellWithImage">
          <Avatar
            alt="Profile Picture"
            src={params.row.image}
            sx={{ width: 46, height: 46 }}
          />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "fullName",
    headerName: "Name",
    width: 250,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return (
        <div className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </div>
      )
    }
  },
];
