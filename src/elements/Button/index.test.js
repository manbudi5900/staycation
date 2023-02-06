import React from 'react'
import {render} from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom'

import Button from 'elements/Button/index'

test("Testing button disabled", ()=> {
    const {container} = render(<Button isDisabled></Button>)

    expect(container.querySelector('span.disabled')).toBeInTheDocument()
});

test("Testing button loading", ()=> {
    const {container, getByText} = render(<Button isLoading></Button>)
    expect(getByText(/loading/i)).toBeInTheDocument();

    expect(container.querySelector('span')).toBeInTheDocument();
});


test("Testing button tag <a> ", ()=> {
    const {container} = render(<Button  type='link' isExternal></Button>)

    expect(container.querySelector('a')).toBeInTheDocument();
});
test("Testing button tag <Link> ", ()=> {
    const {container} = render(<Router><Button  type='link' href=''></Button></Router>);

    expect(container.querySelector('a')).toBeInTheDocument();
})