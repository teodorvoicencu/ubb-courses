// @flow
import * as React from 'react';
import { Button } from 'react-bootstrap';

type LightButtonProps = {
    onClick: React.SyntheticEvent<>,
    children: React.Node,
};

const LightButton = (props: LightButtonProps) => (
    <Button variant={'light'} onClick={props.onClick}>
        {props.children}
    </Button>
);

export default LightButton;
