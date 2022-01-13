import PersonIcon from '../../../../assets/images/u112.png';
import './styles.scss';

export const COLUMNS = [
    {
        Header: 'Name',
        accessor: 'Name',
        Cell: (column: any) => {
            const data = column?.cell?.row?.original;
            return (
                <div>
                    <img
                        src={PersonIcon}
                        alt="person icon"
                        height="20px"
                        width="20px"
                        style={{ marginLeft: '9px', marginRight: '5px' }}
                    />
                    <a className="name-underline" href={'/test'}>
                        {data.Name}{' '}
                    </a>
                </div>
            );
        }
    },
    {
        Header: 'User ID',
        accessor: 'user_id'
    },
    {
        Header: 'Designation',
        accessor: 'Designation'
    },
    {
        Header: 'Region',
        accessor: 'Region'
    },
    {
        Header: "ML's",
        accessor: "ML's"
    },
    {
        Header: 'SWA',
        accessor: 'SWA'
    },
    {
        Header: 'Status',
        accessor: 'Status'
    },
    {
        Header: 'Action',
        accessor: 'Action'
    }
];
