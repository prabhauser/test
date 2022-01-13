import { useTable, useGlobalFilter } from 'react-table';
import TableHeader from './tableHeader';
import './index.scss';

type ComponentProps = {
    columns: {
        Header: string;
        accessor: string;
    }[];
    data: any;
};

const ADBTable = (props: ComponentProps) => {
    const { columns, data } = props;
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, state, setGlobalFilter } = useTable(
        {
            columns,
            data
        },
        useGlobalFilter
    ) as any;
    const { globalFilter } = state;
    const headerTotal = { headerText: 'Total Supervisors', headerCountText: '50 Supervisors' };
    return (
        <>
            <TableHeader headerTotal={headerTotal} filter={globalFilter} setFilter={setGlobalFilter}>
                {'TestChildren'}
            </TableHeader>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map((headerGroup: any) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column: any) => (
                                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row: any) => {
                        prepareRow(row);
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell: any) => {
                                    return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
                                })}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </>
    );
};
export default ADBTable;
