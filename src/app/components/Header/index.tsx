import Logo from '../../../assets/images/dswd_logo_login.png';

import './index.scss';

type Props = {
    headerTabs: any;
    profileList: any;
};

const DashboardHeader = ({ headerTabs, profileList }: Props) => {
    return (
        <div className="row mar-0">
            <img
                className="header-logo align-self-center col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 pad-0"
                src={Logo}
            />
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 pad-0">{headerTabs}</div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12 pad-0">{profileList}</div>
        </div>
    );
};
export default DashboardHeader;
