import React from 'react';
import Text from '.';


export default {
    title: 'Atoms / Text',
};

export const BoldText: React.FC = () => (
    <Text content='Bold Text' bold={true} />
);

export const NormalText: React.FC = () => (
    <Text content='Normal Text' bold={false} />
);