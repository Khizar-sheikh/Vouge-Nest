import {  Table} from "antd";

const contactColumns = [
  {
    title: "SR#",
    dataIndex: "sr",
    key: "sr",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Contact No",
    dataIndex: "contact_no",
    key: "contact_no",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Outlet Name",
    dataIndex: "outlet_name",
    key: "outlet_name",
  },
];

const contactData = [
  {
    key: "1",
    sr: 1,
    contact_no: "+1234567890",
    address: "123 Main Street",
    city: "New York",
    outlet_name: "ABC Store",
  },
  {
    key: "2",
    sr: 2,
    contact_no: "+1987654321",
    address: "456 Oak Avenue",
    city: "Los Angeles",
    outlet_name: "XYZ Shop",
  },
  {
    key: "3",
    sr: 3,
    contact_no: "+1122334455",
    address: "789 Elm Boulevard",
    city: "Chicago",
    outlet_name: "123 Mart",
  },
  {
    sr: 4,
    contact_no: "+1555098765",
    address: "321 Pine Road",
    city: "Houston",
    outlet_name: "Best Buy",
  },
  {
    sr: 5,
    contact_no: "+1666777888",
    address: "876 Cedar Lane",
    city: "Miami",
    outlet_name: "Super Mart",
  },
  {
    sr: 6,
    contact_no: "+1444333222",
    address: "654 Maple Street",
    city: "San Francisco",
    outlet_name: "Mega Store",
  },
];

const ContactTable = () => (
  <Table
    columns={contactColumns}
    dataSource={contactData}
    scroll={{ x: true }}
  />
);

export default ContactTable;
