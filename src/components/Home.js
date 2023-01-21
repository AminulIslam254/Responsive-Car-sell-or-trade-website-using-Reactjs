import { makeStyles } from '@material-ui/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { links } from './Images/ImageExport';





const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    '@media (min-width: 780px)': {
        width: '80%'
    },

    mainBox: {
        backgroundImage: "url('https://images.unsplash.com/photo-1618202257696-3f6c4cd60e7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: 742,
        display: "flex",
        justifyContent: "center",
    },

    container: {
        width: "80%",
        minHeight: 732,
        height: "fit-content",
        marginBottom: "500px"

    },

    header: {
        minHeight: 40,
        height: "fit-content",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",


    },
    text: {
        "@media (min-width:0px) and (max-width:500px)": { fontSize: 30 },
        fontSize: 63,
    },

    nextButton:{
        "@media (min-width:0px) and (max-width:612px)": { 
            top: 200 ,
        },
        top:0,
        '&:hover': {
            cursor: "pointer",
          },
    }

}));
const Home = () => {

    const classes = useStyles();


    const [range, setRange] = useState({start1:0,end1:5});


    const handleNextClick=()=>{
        setRange((prevstate)=>{
            let var1={...prevstate};
            var1.start1+=1;
            var1.end1+=1;
            if(var1.end1===links.length){
                var1.start1=0;
                var1.end1=5;
            }
            return var1;
        });
    }







    return (
        <>

            <div className={classes.mainBox}>
                <div className={classes.container}>
                    <div className={classes.header}>

                        <div style={{ display: "flex", minHeight: "100%", height: "fit-content", width: "calc(10px + 563px)", alignItems: "center", justifyContent: "space-evenly", flexWrap: "wrap" }}>
                            <h1  style={{margin:5}}><Link to="/" style={{ color: "black", textDecoration: "none" }}>Carzz</Link> </h1>
                            <h3  style={{margin:5}}>Shop</h3>
                            <h3 style={{margin:5}}>Sell/Trade</h3>
                            <h3  style={{margin:5}}>Finance</h3>
                            <h3  style={{margin:5}}><Link to="/contact" style={{ color: "black", textDecoration: "none" }}>Contact Us</Link></h3>
                        </div>

                        <div style={{ marginRight: 15 }}>
                            <h3>Login</h3>
                        </div>



                    </div>
                    <div style={{ width: "100%", marginTop: 25, display: "flex", justifyContent: "center" }}>
                        <input placeholder='Search by Make Model or Keyword' style={{ width: "85%", height: 30, borderRadius: "10px 0px 0px 10px" }} type="text" name="" id="" />
                        <div style={{ display: "flex", height: 34, width: 37, backgroundColor: "wheat" }}>
                            <img style={{ height: 34, width: 50, border: "1px solid black" }} src="https://cdn0.iconfinder.com/data/icons/very-basic-2-android-l-lollipop-icon-pack/24/search-512.png" alt="" />
                        </div>


                    </div>

                    <div style={{  height: 300, height: "fit-content", marginTop: 75, display: "flex", flexWrap: "wrap", maxWidth: 500, }}>
                        <h1 className={classes.text}>Love your Car Gurentee</h1>
                        <h4 style={{ color: "grey", fontSize: 20 }}>24-hr test drives & 30-day returns (up to 1500 mi)</h4>

                    </div>

                    <div style={{ marginTop: 25, maxWidth: 250, height: 50, }}>
                        <button style={{ backgroundColor: "#fcec3f", height: "100%", width: "100%", borderRadius: 5 }}>Search Cars</button>
                    </div>
                </div>
            </div>


            <div style={{ width: "100%", height: 500,display:"flex",flexDirection: "column" ,alignItems: "center",marginBottom:100 }}>

                <div style={{width:"100%",display:"flex",justifyContent:"center",}}>
                    <h1>Available cars</h1>
                </div>

                <div style={{display: "flex", flexDirection: "row",width:"100%",alignItems:"center",overflow: "hidden", overflowY: "scroll" }}>
                    <div style={{ display: "flex", flexDirection: "row", width: "92%",  flexWrap: "wrap" }}>
                        {
                            links.map((item, index) => {

                                if(index>=range.start1 && index<range.end1){
                                    return (
                                        <div key={index} style={{ width: 270, height: 150, margin: 5 }} >
                                            <img style={{ width: "100%", height: "100%" }} src={links[index]} alt="" />

                                        </div>
                                    )
                                }
                                
                            })
                        }
                    </div>
                        <div style={{height:50,width:50,position:"sticky"}} className={classes.nextButton} onClick={handleNextClick}>
                             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRQ1bfq48CYlwuMnoUnx6sofc2dFf2D_IhCA&usqp=CAU" style={{width:"100%",height:"100%"}} alt="" />
                        </div>
                    <div>
                </div>

                

                </div>



            </div>


            <div style={{ display: "flex", justifyContent: "center", backgroundColor: "#1773cf ", width: "100%", height: 500, marginTop: 100 }}>

                <div style={{ height: "90%", width: "80%",  }}>

                    <div style={{ display: "flex", justifyContent: "space-between",overflow: "hidden", overflowX: "scroll"  }}>
                        <div style={{ display: "flex", flexWrap: "wrap", height: 200, width: 150,margin:10}}>
                            <h3 style={{ color: "white",margin:5 }}>Shop</h3>
                            <span style={{ color: "white",margin:5 }}>Browse by category</span>
                            <span style={{ color: "white",margin:5 }}>View all inventory</span>
                            <span style={{ color: "white",margin:5 }}>Find a store</span>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", height: 200, width: 150,margin:10 }}>
                            <h3 style={{ color: "white",margin:5  }}>Sell/Trade</h3>
                            <span style={{ color: "white",margin:5  }}>Get an online offer</span>
                            <span style={{ color: "white",margin:5  }}>How it works</span>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", height: 200, width: 150,margin:10  }}>
                            <h3 style={{ color: "white",margin:5  }}>Finance</h3>
                            <span style={{ color: "white",margin:5  }}>Get pre-qualified</span>
                            <span style={{ color: "white",margin:5  }}>How it works</span>
                        </div>
                        <div style={{ display: "flex", flexWrap: "wrap", height: 250, width: 150,margin:10  }}>
                            <h3 style={{ color: "white", width: "100%" ,margin:5 }}>About</h3>
                            <span style={{ color: "white", width: "100%" ,margin:5 }}>About Us</span>
                            <span style={{ color: "white" ,margin:5 }}>Contact us</span>
                            <span style={{ color: "white" ,margin:5 }}>Social responsibility</span>
                            <span style={{ color: "white" ,margin:5 }}>Media center</span>
                        </div>
                    </div>

                </div>


            </div>









        </>
    )
}

export default Home