import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import github from '../../services/github'

// Components
import { Container, Form, SubmitButton, List, Error } from './styles'

// Icons
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'

export default class Main extends Component {
    state = {
        newRepo: '',
        repositories: [],
        error: null,
        loading: false,
    }

    componentDidMount () {
        const repositories = localStorage.getItem('repositories')

        if (repositories) {
            this.setState({ repositories: JSON.parse(repositories) })
        }
    }

    componentDidUpdate (_, prevState) {
        const { repositories } = this.state

        if (repositories !== prevState.repositories) {
            localStorage.setItem('repositories', JSON.stringify(repositories))
        }
    }

    handleInputChange = e => {
        this.setState({ newRepo: e.target.value })
    }

    handleSubmit = async e => {
        e.preventDefault()

        this.setState({ loading: true, error: null })

        const { newRepo, repositories } = this.state

        // Input was empty
        if (!newRepo) {
            setTimeout(() => {
                this.setState({ error: 'Preencha o nome do repositório!', loading: false })
            }, 500)

            return
        }

        const repoExists = repositories.filter(repo => repo.name.toUpperCase() === newRepo.toUpperCase())

        // Repository already added
        if (repoExists.length > 0) {
            setTimeout(() => {
                this.setState({ error: 'Repositório já adicionado', loading: false })
            }, 500)

            return
        }

        let response = {}

        try {
            response = await github.get(`/repos/${newRepo}`)
        } catch (error) {
            setTimeout(() => {
                this.setState({ error: 'Não foi possível adicionar o repositório... :/', loading: false })
            }, 500)

            return
        }

        const data = {
            id: response.data.id,
            name: response.data.full_name,
        }

        this.setState({
            repositories: [...repositories, data],
            newRepo: '',
        })

        this.setState({ loading: false })
    }

    render () {
        const { repositories, newRepo, loading, error } = this.state

        return (
            <Container>
                <h1>
                    <FaGithubAlt />
                    Repositórios
                </h1>

                <Form onSubmit={this.handleSubmit} error={error}>
                    <input
                        type="text"
                        placeholder="Adicionar repositório"
                        value={newRepo}
                        onChange={this.handleInputChange}
                        disabled={!!loading}
                    />
                    <SubmitButton loading={loading ? 1 : 0}>
                        {loading ? <FaSpinner /> : <FaPlus /> }
                    </SubmitButton>
                </Form>

                <Error>
                    {error}
                </Error>

                <List>
                    {repositories.map(repository => (
                        <li key={repository.id}>
                            <span>{repository.name}</span>
                            <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
                        </li>
                    ))}
                </List>

            </Container>
        )
    }
}
