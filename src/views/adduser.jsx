import { Container, TextField, Box, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core'
import React, { useState,useEffect } from 'react'

export default function Adduser() {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        console.log("我这里进来了")
    });

    const handleChange = (propName) => {
        return (event) => {
            setFormData({...formData,[propName]:event.target.value})
        }
    }
    console.log(formData,'formData--a')
    return (
        <div>
            这里是用户添加的表单页面
            <Container style={{padding:'20px 0'}} maxWidth='lg'>
                <Box style={{padding:'10px 0'}} maxWidth='lg'>
                    <TextField label='姓名' size='small' variant='outlined' />
                </Box>
                <Box style={{padding:'10px 0'}} maxWidth='lg'>
                    <TextField label='密码' size='small' type='password' variant='outlined' />
                </Box>
                <Box style={{padding:'10px 0'}}>
                    <FormControl style={{width:'200px'}}>
                        <InputLabel size='small' id='formAge'>Age</InputLabel>
                        <Select
                            labelId='formAge'
                            label='Age' 
                            value={formData.age||''} 
                            onChange={handleChange('age')}
                            size='small'
                        >
                            <MenuItem value={1}>男</MenuItem>
                            <MenuItem value={2}>女</MenuItem>
                        </Select>
                    </FormControl>
                </Box>
                <Box style={{padding:'10px 0'}}>

                </Box>
            </Container>
        </div>
    )
}
