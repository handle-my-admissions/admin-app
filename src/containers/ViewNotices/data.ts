/* eslint-disable import/prefer-default-export */
export const customTableColumnsData = [
  {
    title: 'Notice ID',
    dataIndex: 'NoticeID',
    key: 'NoticeID',
    fixed: 'left'
    // width:300,
    // responsive: ['md']
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title'
    // responsive: ['md'],
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    width: '25em'
    // responsive: ['md'],
  },
  {
    title: 'Due Attached ?',
    dataIndex: 'anyDueAttach',
    key: 'anyDueAttach'
  },
  {
    title: 'Due Date ',
    dataIndex: 'DueDate',
    key: 'DueDate'
  },
  {
    title: 'Application Specific ?',
    dataIndex: 'ApplicationSpecific',
    key: 'ApplicationSpecific'
  },
  {
    title: 'Application Number',
    dataIndex: 'ApplicationNumber',
    key: 'ApplicationNumber'
  },
  {
    title: 'Branch',
    dataIndex: 'branch',
    key: 'branch'
  }
  // {
  //     title: 'Description',
  //     dataIndex: 'description',
  //     key: 'description',
  //     // responsive: ['md'],
  // },

  // {
  //     title: 'Delete',
  //     dataIndex: 'feesPaid',
  //     key: 'feesPaid',
  //     responsive: ['md'],
  //     sorter: (a, b) => a.address.length - b.address.length,
  //     sortDirections: ['descend', 'ascend'],
  // },
]
