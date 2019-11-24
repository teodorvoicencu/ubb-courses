// @flow
import * as React from 'react';
import { Spinner } from 'react-bootstrap';
import './styles/suspenseFallback.scss';

const SuspenseFallback = (): React.Node => {
    return (
        <div className={'container'}>
            <Spinner className={'spinner'} animation={'border'} variant={'primary'} />
        </div>
    );
};

export default SuspenseFallback;
