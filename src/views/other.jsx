import { Box, Portal } from '@material-ui/core';
import React, { useRef, useState } from 'react'

export default function Other() {
    const [show, setShow] = useState(false);
    const container = useRef(null);

    return (
        <div>
            <button onClick={() => setShow(!show)}>{ show ? 'Unmount children' : 'Mount children' }</button>
            <Box>
                这里时第一个框
                {show?(
                    <Portal container={container.current}>
                        <span>But I actually render</span>
                    </Portal>
                ):null}
            </Box>
            <Box sx={{p:1,my:1,border:'1px solid'}} ref={container}>
            </Box>
        </div>
    )
}
