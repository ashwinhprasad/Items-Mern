import React, { Component } from 'react';
import axios from 'axios'
import { 
    Button, 
    Container ,
    ListGroup,
    ListGroupItem
    } from 'reactstrap';
//mport {v4 as uuidv4 } from 'uuid'
//import { json } from 'body-parser';



class ShoppingList extends Component {

    state = {
        items : [],
        
        itemname:""
    }


    onChange = (e) => {
        e.preventDefault();
        this.setState({
            itemname:e.target.value
        })

    }


    onDelete = (_id) => {
        axios.delete('api/items/'+_id)
         .then(res => {
                console.log(res)
                this.setState({
                    items:this.state.items.filter((item) => item._id !== _id )
                })
            })
         .catch(err => {
            
            console.log('api/items/'+_id)
            console.log(err)
        
        })
        
    }

    onAdd = (e) => {
        const name = this.state.itemname;
        if (name) {
            axios.post('/api/items',{
                name:name,
            }).then(res => this.setState({items:[res.data,...this.state.items]}))

        }
        this.setState({
            itemname:''
        })
    }

    componentDidMount = () => {
    
        axios.get('/api/items')
         .then((res) =>{this.setState({items:res.data})})
         .catch(err => console.log(err))
     
    }





    render() {
        return(
            <Container style={{
                'width':"30%",
                "padding":"30px"
            }}>
                <input style={{ 
                    "marginRight":"5px",
                    "padding":"5px",
                    "marginBottom":"10px",
                    "border":"none",
                    "marginLeft":"15%"
                     }} 
                    placeholder="Enter Item Name" 
                    type="text"
                    onChange={this.onChange}
                    value={this.state.itemname}></input>
                <Button color="dark" style={{
                    'marginBottom':'5px'
                }} onClick={this.onAdd}>Add</Button>
                <ListGroup>
                    {this.state.items.map((item) => {
                        return (
                            <ListGroupItem key={item._id}>
                                <Button className="remove-btn"
                                color="danger"
                                size="sm"
                                onClick = {this.onDelete.bind(this,item._id) }
                                style={{
                                    'marginRight':'5px'
                                }}
                                >
                                &times;</Button>
                                <p style={{
                                    "float":"right",
                                    "marginRight":"10px",
                                }}>{item.name}</p>
                            </ListGroupItem>
                        )
                    })}                
                </ListGroup>
            </Container>
        )
    }
};


export default ShoppingList;