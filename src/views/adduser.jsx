import { Container, TextField, Box, Select, MenuItem, InputLabel, FormControl, FormControlLabel, Switch, Zoom } from '@material-ui/core';
import React, { useState,useEffect } from 'react';
import { DataGrid, GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'
import { useHistory } from 'react-router';

function CustomToolbar(){
    return (
        <GridToolbarContainer>
            <GridToolbarExport/>
        </GridToolbarContainer>
    );
}

export default function Adduser({location}) {
    const [formData, setFormData] = useState({});
    const [checked, setChecked] = useState(false);


    console.log(location,'adduser-page-location')
    let history = useHistory();

    const { data } = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10,
        maxColumns: 6,
    })


    useEffect(() => {
        console.log("我这里进来useEffect")
    });

    const handleChange = (propName) => {
        return (event) => {
            setFormData({...formData,[propName]:event.target.value})
        }
    }
    
    console.log(data,'data--a')
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
                <FormControlLabel 
                    control={<Switch checked={checked}
                    onChange={() => {
                        setChecked((prev) => !prev)
                    }} />}
                    label='Show'></FormControlLabel>
                
                <Box style={{ height:'300px',width:'100%',padding:'10px 0'}}>
                    <Zoom in={checked}>
                        <DataGrid {...data} components={{Toolbar:CustomToolbar,}}>
                        </DataGrid>
                    </Zoom>
                    <Zoom in={checked} style={{ transitionDelay: checked ? '500ms' : '0ms' }}>
                        <DataGrid {...data} components={{Toolbar:CustomToolbar,}}>
                        </DataGrid>
                    </Zoom>
                </Box>
            </Container>
        </div>
    )
}
