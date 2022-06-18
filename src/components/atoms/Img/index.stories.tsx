import React from 'react';
import Img from '.';
import badgeApple4x from '../../../assets/img/badge-apple4x.png';
import triple2x from '../../../assets/img/triple2x.png';
import playstore2x from '../../../assets/img/play-store2x.png';
export default {
    title: 'Atoms / Img',
};

export const BadgeApple4x: React.FC = () => (
    <div style={{ padding: '1rem', backgroundColor: 'gray' }}>
        <div style={{ width: '100%' }}>
            <Img
                alt={'1'}
                src={badgeApple4x}
            />
        </div>
    </div>

);
export const PlayStore2x: React.FC = () => (
    <div style={{ padding: '1rem', backgroundColor: 'gray' }}>
        <div style={{ width: '100%' }}>
            <Img
                alt={'2'}
                src={playstore2x}
            />
        </div>
    </div>
)
export const Triple2x: React.FC = () => (
    <div style={{ padding: '1rem', backgroundColor: 'gray' }}>
        <div style={{ width: '100%' }}>
            <Img
                alt={'2'}
                src={triple2x}
            />
        </div>
    </div>
)

