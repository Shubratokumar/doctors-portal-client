import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>

        {/* <div style={{"border-top-color":"transparent"}}
            className="w-16 h-16 border-4 border-blue-400 border-dashed rounded-full animate-spin">
        </div> */}
        {/* <div className='h-screen flex justify-center items-center'>
            <button class="btn loading">loading</button>
        </div> */}
        </div>
        
    );
    
};

export default Loading;