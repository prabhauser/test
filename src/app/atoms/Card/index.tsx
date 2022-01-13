import './index.scss';

type ComponentProps = {
    heading: string;
    icon?: any;
    children?: any;
};

const Card = (props: ComponentProps) => {
    const { icon, heading } = props;
    return (
        <div className="card-container-common">
            {props?.heading && (
                <div className="card-title-container">
                    {icon && (
                        <div className="icon-title-card">
                            <img src={icon} alt="icon" className="icon-common-card" />
                        </div>
                    )}
                    <div>{heading}</div>
                </div>
            )}
            <div className="mar-top-10">{props.children}</div>
        </div>
    );
};

export default Card;
