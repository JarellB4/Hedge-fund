
import React from 'react'
import FormControl from "../FormControl/FormControl"


const InputGroup = () => {
    return (
        <div>
           <InputGroup className="mb-3">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="skjkd"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup> 
        </div>
    )
}

export default InputGroup


