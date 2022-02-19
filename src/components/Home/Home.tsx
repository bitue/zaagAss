import { Button, Input, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const [country, setCountry] = useState<string>('');
    const history =useHistory()
    useEffect(()=> {
        console.log(country,'ppppppppppp')
    },[country])
    return (
        <div>
            <Typography sx={{textAlign:'center'}} variant="h5" component="h2">
             Wellcome to Search your country
            </Typography>
            <div style={{border:'none' , textAlign:'center', margin:'30px'}}>
                <Input onChange={(e)=>setCountry(e.target.value) } type='text' ></Input>
                <Button onClick={() => history.push(`/country/${country}`)} variant='contained' disabled={!country}>Search</Button>
            </div>

            
        </div>
    );
};

export default Home;