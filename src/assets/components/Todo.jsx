import React, { useRef, useState } from 'react'
import './todo.css'
import { IoIosAddCircle } from "react-icons/io";
import { MdDelete } from "react-icons/md";
import { IoMdCloudDone } from "react-icons/io";
import { Box, Button, TextField,List,ListItem} from '@mui/material';
// import { blue } from '@mui/material/colors';
import { CiEdit } from "react-icons/ci";
// import { RxLetterSpacing } from 'react-icons/rx';
function Todo() {
    let[item,setitem]=useState(" ");
    let[items,setitems]=useState([]);
    let[toggle,settoggle]=useState({show:false,id:""})
    let editRef=useRef(null);

    let updateitem=(e)=>{
        setitem(e.target.value)

    }
    let addItems=()=>{
        // e.preventDefault();
        setitems([...items,item])
    }
    let deleteItem = (id) => {
        let filterIt = items.filter((_,index)=>id!==index);
        setitems(filterIt);
      };

    let editItem=(id)=>{
        editRef.current.focus();
        settoggle({show:true,id});
        setitem(items[id]);
    }
    let updateItem=()=>{
        items[toggle.id]=item;
        setitems([...items])
        setitem(" ");
        settoggle({show:false})
    }
  return (
    // <div className='mainas'>
        <Box
         style={{height:360,
            width:750,
            display: "flex",
            justifyContent: "center",
            alignItems: 'center',
            flexDirection:'column',

            
         }}
        >
        {/* <div className='htodo'> */}
        <Box style={{height:40,
             width:500,
             margin:5,
             display:"flex",
             justifyContent: "center",
             alignItems: 'center',
             borderBottom:'1px solid blue'
        }}
        >
            <h2 style={{letterSpacing:'2px',textShadow:'2px 2px 2px black',fontFamily:'Arial, Helvetica, sans-serif',color:'rgb(29, 151, 208)'}}>TO-DO LIST</h2>
            </Box>
            {/* </div> */}
         
        {/* <div className='inas'> */}
            <Box
           sx={{
            height:'300px',
            width:'50%',
            borderRadius:'3%',
            overflowX:'auto',
            boxShadow:'2px 2px 2px black',
            backgroundImage:'linear-gradient(to bottom,rgb(25, 229, 229),rgb(86, 147, 201),rgb(97, 131, 198))'

           }}
            >
        {/* <div className='inputas'> */}
            <Box
            sx={{height:'50px',
                width:'340px',
                margin:'10px',
                display:'flex',
                backgroundColor:'white',
                boxShadow:'2px 2px 3px black',
                padding:'4px',
                display:'flex'
              
            //    justifyContent:'space-between'
               
            }}>
       {/* <div className='inputpart'>  */}
        <Box>
        {/* <input type="text" onChange={updateitem} value={item} placeholder='to do list' ref={editRef} /> */}
        <TextField
        onChange={updateitem}
        inputRef={editRef}
        value={item}
        // inputRef={(el) => editRef.current[index] = el}  // Assign ref to each item

        style={{width:220,paddingRight:10,padding:3}}
        sx={{
            '& .MuiInputBase-root': {
              height: 40,  //! Control the height of the input field itself
            //   backgroundImage:'linear-gradient(to bottom,rgb(25, 229, 229),rgb(86, 147, 201),rgb(97, 131, 198))',
              borderRadius:'none',
            
            }}}
        />
        </Box>
       {/* </div> */}
      {/* <div className='btnic'>  */}
        <Box
        sx={{
            width:'45px',
            height: '33px'
        }}
        >
        {/* <button onClick={addItems} className='adbtn'><IoIosAddCircle /></button> */}
        <Button 
        onClick={addItems}
        sx={{
            height:' 100%',
            width: '100%',
            marginTop: '10px',
            paddingTop:'10px',
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'rgb(12, 110, 167)',
            backgroundColor:'skyblue',
            '&:hover': {
                bgcolor:' rgb(35, 128, 182)',
                color:'white'
               }
        }}
        style={{margin:10}}>
            <IoIosAddCircle />
            </Button>
        {toggle.show &&
        //  <button className='upbtn' onClick={updateItem}><IoMdCloudDone /></button>
        <Button onClick={updateItem}
        sx={{
            height:'30px',
            width:'5px',
            backgroundColor:'skyblue'
        }}
        >
            <IoMdCloudDone />
        </Button>
        }
        </Box> 
        {/* </div> */}
        </Box>
        {/* </div> */}
        {items.map((i,index)=>{
            return(
            //    <div className='listy2'>
                <Box 
                  key={index}
                  sx={{
                    width:' 295px',
                    height:' 37px',
                    margin: '10px',
                    boxShadow: '2px 2px 2px black',
                    backgroundColor: 'rgba(248, 243, 249, 0.991)',
                    display:' flex',
                    alignItems: 'center',
                    justifyContent:'space-around',
                    gap:'10px'
                }}>
                   <List key={index} type='square'>
                    <ListItem>{i}
                        {/* <button className='del' onClick={()=>{
                        editItem(index)
                    }}>Edit</button> */}
                    <Button

                     onClick={()=>{editItem(index)}}
                     style={{width:40,margin:10}}
                     sx={{backgroundColor:'skyblue',
                        height: '27px',
                         width: '66px',
                         display: 'inline',
                         color: 'blue',
                         margin: '6px',
                         padding: '3px',
                         border: 'none'
                     }}
                     
                    >
                     <CiEdit />
                    </Button>
                    {/* <button className='del' onClick={()=>{
                     deleteItem(index)
                    }}><MdDelete /></button> */}
                    <Button
                      
                    onClick={()=>{
                        deleteItem(index)
                    }}
                    sx={{backgroundColor:'skyblue',
                        height: '27px',
                        width: '66px',
                        display: 'inline',
                        color: 'blue',
                        margin: '6px',
                        padding: '3px',
                        border: 'none'
                    }}
                    style={{margin:10}}
                    >
                    <MdDelete />
                    </Button>
                    
                    
                    </ListItem> 
                    
                    
                  
                  
                   </List>
                   </Box>
                   
                 
                
       
                   
            )
        })

        }
        </Box>
        {/* </div> */}
        </Box>
    // </div>
  )
}

export default Todo
