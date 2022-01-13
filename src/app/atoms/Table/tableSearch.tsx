import { useState } from 'react';
import { useAsyncDebounce } from 'react-table';
import TextInput from '../TextInput/index';

type ComponentProps = {
    filter: any;
    setFilter: any;
};

const TableSearch = (props: ComponentProps) => {
    const { filter, setFilter } = props;
    const [value, setValue] = useState(filter);

    const onChange = useAsyncDebounce((val: any) => {
        setFilter(val || undefined);
    }, 1000);

    return (
        <span>
            Search: {''}
            <TextInput
                value={value || ''}
                onChange={(e) => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={'Search'}
            />
        </span>
    );
};
export default TableSearch;
