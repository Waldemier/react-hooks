import React, {useContext, useState} from 'react'
import {AlertContext} from '../context/alert/alertContext'
import {GitHubContext} from '../context/github/githubContext'

export const Search = () => {

    const alert = useContext(AlertContext)
    const [value, setValue] = useState('')
    const github = useContext(GitHubContext)


    const onSubmit = event => {
        if(event.key !== 'Enter') {
            return
        }

        github.clearUsers()

        if(value.trim()) {
            alert.hide()
            github.search(value.trim())
        }
        else {
            alert.show("Input user information!")
        }
    }

    return (
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Input user nickname..." onKeyPress={onSubmit} value={value} onChange={ event => setValue(event.target.value) }/>
        </div>
    )
}