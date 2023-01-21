import { Button, makeStyles, TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react';

import 'date-fns';

var today = new Date();

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },




}));

function Register() {

    const classes = useStyles();



    return (
        <>


            <div style={{ width: "100%", height: 200, backgroundColor: "#20adc4", display: "flex", justifyContent: "center", alignItems: "center" }}>

                <div style={{ fontSize: 30 }}>Contact Us</div>

            </div>

            <div style={{ width: "100%", height: 620, marginTop: 30, display: "flex", justifyContent: "center", border: "2px solid black" }}>

                <div style={{ width: "70%" }}>
                    <div style={{ width: "100%", margin: 5 }}>
                        <div style={{ margin: 5 }}>What can we help you with</div>
                        <input style={{ width: "87%", height: 50, margin: 5 }} type="text" name="" id="" />
                    </div>
                    <div style={{ width: "100%", margin: 5 }}>
                        <div style={{ margin: 5 }}>Your Name</div>
                        <input style={{ width: "87%", height: 50, margin: 5 }} type="text" name="" id="" />
                    </div>
                    <div style={{ width: "100%", margin: 5 }}>
                        <div style={{ margin: 5 }}>Email Address</div>
                        <input style={{ width: "87%", height: 50, margin: 5 }} type="text" name="" id="" />
                    </div>
                    <div style={{ width: "100%", margin: 5 }}>
                        <div style={{ margin: 5 }}>Subject</div>
                        <input style={{ width: "87%", height: 50, margin: 5 }} type="text" name="" id="" />
                    </div>
                    <div style={{ width: "100%", margin: 5 }}>
                        <div style={{ margin: 5 }}>Details</div>
                        <input style={{ width: "87%", height: 50, margin: 5 }} type="text" name="" id="" />
                    </div>
                    <div style={{ width: "100%", margin: 5 }}>
                        <div style={{ height: 50, width: 200, backgroundColor: "#ffbf00",display:"flex",justifyContent:"center",alignItems:"center",marginLeft:10 }}>
                                Submit
                        </div>
                    </div>





                </div>



            </div>




        </>
    )
}


export default Register