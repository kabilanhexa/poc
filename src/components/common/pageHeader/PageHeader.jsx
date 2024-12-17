import React, {memo} from 'react';
import { useNavigate } from 'react-router-dom';
import BackIcon from './BackIcon';
import './PageHeader.scss';

const PageHeader = (props) => {
    const history = useNavigate();

    return (
        <>
            <div className="page-header" style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                <span
                    className="back-button-wrap"
                    onClick={(e) => (props?.backNavigation ? props?.backNavigation(e) : history(-1))}>
                    <BackIcon />
                </span>
                <h1>{props.name}</h1>
            </div>
        </>
    )
}

export default memo(PageHeader);