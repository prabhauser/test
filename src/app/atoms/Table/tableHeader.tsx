import TableSearch from './tableSearch';
import './tableHeader.scss';

type ComponentProps = {
    headerTotal: {
        headerText: string;
        headerCountText: string;
    };
    filter: any;
    setFilter: any;
    children?: any;
};

const TableHeader = (props: ComponentProps) => {
    const { headerTotal, filter, setFilter } = props;
    return (
        <div className="header-container">
            <div className="header-total col-xl-3 col-lg-3 col-md-6 col-sm-6 col-12">
                <div>{headerTotal.headerText}</div>
                <div>{headerTotal.headerCountText}</div>
            </div>
            <div className="header-search col-xl-7 col-lg-7 col-md-8 col-sm-8 col-12">
                <TableSearch filter={filter} setFilter={setFilter} />
            </div>
            <div className="header-filter col-xl-2 col-lg-2 col-md-4 col-sm-4 col-12">{props.children}</div>
        </div>
    );
};
export default TableHeader;
