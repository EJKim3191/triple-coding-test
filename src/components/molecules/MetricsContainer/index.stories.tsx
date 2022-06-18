import React from 'react';
import MetricsContainer from '.';


export default {
    title: 'Molecules / MetricsContainer',
};

export const MetricsContainerExample: React.FC = () => (
    <MetricsContainer count={{ travelerCount: 700, reviewCount: 100, planCount: 470}} />
);