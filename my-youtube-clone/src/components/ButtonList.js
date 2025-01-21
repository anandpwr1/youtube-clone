import React from 'react'
import Button from './Button'

const list = ["All", "Gaming", "Movies", "Live", "Soccer", "Cricket", "Amazon", "Basketball", "Video-Gaming", "Vlogs", "Instagram", "Visual Studio", "Stackflow"]
const ButtonList = () => {
    return (
        <div className='flex'>
            {list.map((listItem, index) =>
                <Button key={index} name={listItem} />
            )}
        </div>
    )
}

export default ButtonList
