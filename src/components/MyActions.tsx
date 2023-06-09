import React from 'react';

interface IMyActionProps {
    isMyAttack: boolean
    onRepulsed: ()=> void
    onGetCard: ()=> void
}

const MyAction : React.FC<IMyActionProps>= ({ isMyAttack, onRepulsed, onGetCard}) => {

    const classes = ['btn-actions']
    if(!isMyAttack){
        classes.push('red-btn')
    }

    return (
        <button
            className={classes.join(' ')}
        onClick={isMyAttack ? onRepulsed : onGetCard}>
            {isMyAttack ? 'Бито' : 'Беру'}
        </button>
    );
};

export default MyAction;