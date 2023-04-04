import React, { useState } from 'react'
import { connect } from 'react-redux'
import { toast } from 'react-toastify'
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap'
import { v4 } from 'uuid'
import { addTodo } from '../action/todoAction'


const TodoForm = ({ addTodo }) => {
    const [title, _title] = useState("")
    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === "") {
            toast.error("Please add a todo")
        }
        const todo = {
            title,
            id: v4()
        }
        addTodo(todo)

        _title("")
    }
    return (
        <Form onSubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input
                        type="text"
                        name="todo"
                        id="todo"
                        placeholder='Your next Todo'
                        value={title}
                        onChange={(e) => _title(e.target.value)}
                    />
                    <Button color='primary'>Add</Button>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = dispatch => ({
    addTodo: todo => {
        dispatch(addTodo(todo))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(TodoForm)
