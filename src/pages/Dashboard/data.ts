export const customTableData = [
  {
    key: '1',
    name: 'Tejas Ladhani',
    branch: 'IT',
    institute: 'DEPSTAR',
    feesPaid: 'Not Paid',
    address: 'New York No. 1 Lake Park'
  },
  {
    key: '2',
    name: 'Shrey Sharma',
    branch: 'CE',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '3',
    name: 'Radhika Tiwari',
    branch: 'CE',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '4',
    name: 'Rekha Popat',
    branch: 'CE',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '5',
    name: 'Ravi Karia',
    branch: 'CE',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'London No. 1 Lake Park'
  },
  {
    key: '6',
    name: 'Megha Man',
    branch: 'ME',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '7',
    name: 'Rohan Bangoriya',
    branch: 'ME',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '8',
    name: 'Sameer Wangdu',
    branch: 'ME',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '9',
    name: 'Omshree Okhani',
    branch: 'ME',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '10',
    name: 'shreyansh Bhagat',
    branch: 'ME',
    institute: 'CSPIT',
    feesPaid: 'Paid',
    address: 'Sidney No. 1 Lake Park'
  },
  {
    key: '11',
    name: 'Ranchit Sharma',
    branch: 'ME',
    institute: 'CSPIT',
    feesPaid: 'Not Paid',
    address: 'London No. 2 Lake Park'
  }
]

export const customTableColumnsData = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    responsive: ['md']
  },
  {
    title: 'Branch',
    dataIndex: 'branch',
    key: 'branch',
    responsive: ['md']
  },
  {
    title: 'Institute',
    dataIndex: 'institute',
    key: 'institute',
    responsive: ['md']
  },
  {
    title: 'Fees Paid',
    dataIndex: 'feesPaid',
    key: 'feesPaid',
    responsive: ['md'],
    sorter: (a: any, b: any) => a.address.length - b.address.length,
    sortDirections: ['descend', 'ascend']
  }
]
// export const customTableColumns = [
//     {
//         title: 'Name',
//         dataIndex: 'name',
//         key: 'name',
//         // width: '30%',
//         ...getColumnSearchProps('name'),
//         responsive: ['md'],
//     },
//     {
//         title: 'Branch',
//         dataIndex: 'branch',
//         key: 'branch',
//         // width: '20%',
//         responsive: ['md'],
//         ...getColumnSearchProps('branch'),
//     },
//     {
//         title: 'Institute',
//         dataIndex: 'institute',
//         key: 'institute',
//         responsive: ['md'],
//         // width: '20%',
//         ...getColumnSearchProps('institute'),
//     },
//     {
//         title: 'Fees Paid',
//         dataIndex: 'feesPaid',
//         key: 'feesPaid',
//         responsive: ['md'],
//         ...getColumnSearchProps('feesPaid'),
//         sorter: (a, b) => a.address.length - b.address.length,
//         sortDirections: ['descend', 'ascend'],
//     },
// ];
