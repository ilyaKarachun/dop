import React, {FC} from 'react';

type ButtonType =  {
    nickName: string
    callBack: () => void
}
export const Button: FC<ButtonType> = (props: ButtonType) => {
    const onClickHandler = () =>{
        props.callBack()
    }

    return (
        <div>
            <button onClick={onClickHandler}>{props.nickName}</button>
        </div>
    );
};

